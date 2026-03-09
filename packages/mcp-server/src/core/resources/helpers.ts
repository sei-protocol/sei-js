/**
 * Helper to build a successful resource response
 */
export function resourceResult(uriHref: string, data: unknown) {
  return {
    contents: [
      {
        uri: uriHref,
        text: typeof data === "string" ? data : JSON.stringify(data, null, 2),
      },
    ],
  };
}

/**
 * Helper to build an error resource response
 */
export function resourceError(uriHref: string, label: string, error: unknown) {
  return {
    contents: [
      {
        uri: uriHref,
        text: `Error ${label}: ${error instanceof Error ? error.message : String(error)}`,
      },
    ],
  };
}
