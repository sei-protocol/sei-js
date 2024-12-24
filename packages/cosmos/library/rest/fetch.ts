export interface InitReq extends RequestInit {
	pathPrefix?: string;
}

export function fetchReq<_I, O>(path: string, init?: InitReq): Promise<O> {
	const { pathPrefix, ...req } = init || {};

	const url = pathPrefix ? `${pathPrefix}${path}` : path;

	return fetch(url, req).then((r) =>
		r.json().then((body: O) => {
			if (!r.ok) {
				throw body;
			}
			return body;
		}),
	) as Promise<O>;
}

type Primitive = string | boolean | number;
type RequestPayload = Record<string, unknown>;
type FlattenedRequestPayload = Record<string, Primitive | Array<Primitive>>;

function isPlainObject(value: unknown): boolean {
	const isObject = Object.prototype.toString.call(value).slice(8, -1) === "Object";
	const isObjLike = value !== null && isObject;

	if (!isObjLike || !isObject) {
		return false;
	}

	const proto = Object.getPrototypeOf(value);

	return typeof proto === "object" && proto.constructor === Object.prototype.constructor;
}

function isPrimitive(value: unknown): boolean {
	return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
}

function isZeroValuePrimitive(value: Primitive): boolean {
	return value === false || value === 0 || value === "";
}

function flattenRequestPayload<T extends RequestPayload>(requestPayload: T, path = ""): FlattenedRequestPayload {
	return Object.keys(requestPayload).reduce((acc: FlattenedRequestPayload, key: string): FlattenedRequestPayload => {
		const value = requestPayload[key];
		const newPath = path ? [path, key].join(".") : key;

		const isNonEmptyPrimitiveArray = Array.isArray(value) && value.every((v) => isPrimitive(v)) && value.length > 0;
		const isNonZeroValuePrimitive = isPrimitive(value) && !isZeroValuePrimitive(value as Primitive);

		if (isPlainObject(value)) {
			// Recursively flatten objects
			const nested = flattenRequestPayload(value as RequestPayload, newPath);
			Object.assign(acc, nested); // Merge nested results into accumulator
		} else if (isNonZeroValuePrimitive || isNonEmptyPrimitiveArray) {
			// Add non-zero primitives or non-empty primitive arrays
			acc[newPath] = value as Primitive | Primitive[];
		}

		return acc;
	}, {} as FlattenedRequestPayload);
}
export function renderURLSearchParams(requestPayload: any, urlPathParams: string[] = []): string {
	const flattenedRequestPayload = flattenRequestPayload(requestPayload);

	const urlSearchParams = Object.keys(flattenedRequestPayload).reduce((acc: string[][], key: string): string[][] => {
		// key should not be present in the url path as a parameter
		const value = flattenedRequestPayload[key];
		if (!urlPathParams.includes(key)) {
			if (Array.isArray(value)) {
				value.forEach((m) => acc.push([key, m.toString()]));
			} else {
				acc.push([key, value.toString()]);
			}
		}
		return acc;
	}, [] as string[][]);

	return new URLSearchParams(urlSearchParams).toString();
}
