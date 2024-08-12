// Define the type for the actions.json file at the root of a domain
export interface SeiActionsJSON {
	rules: Array<{
		pathPattern: string;
		apiPath: string;
	}>;
}

// Define the type for the GET response for a given action
export interface GetSeiActionResponse {
	icon: string;
	label: string;
	title: string;
	description: string;
	links: {
		actions: SeiActionConfig[];
	};
}

// Define the type for individual actions
export interface SeiActionConfig {
	label: string;
	href: string;
	parameters?: Array<{
		name: string;
		label: string;
	}>;
}

// Define the type for the POST requests to a given action
export interface PostSeiActionRequest {
	sender: string;
	[key: string]: unknown;
}

// Define the type for the POST response for a given action
export interface PostSeiActionResponse {
	transaction: unknown;
	message?: string;
}
