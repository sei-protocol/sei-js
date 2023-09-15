export type Extension = { id?: string; path: string; provider: 'compass' | 'fin' };

export const COMPASS_LATEST_RELEASE: Extension = { provider: 'compass', path: './compass.crx' };
export const FIN_LATEST_RELEASE: Extension = { provider: 'fin', path: './fin.crx' };
