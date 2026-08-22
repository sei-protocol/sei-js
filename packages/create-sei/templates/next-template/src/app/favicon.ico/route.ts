export function GET(request: Request) {
	return Response.redirect(new URL("/brand/sei-mark.png", request.url), 307);
}
