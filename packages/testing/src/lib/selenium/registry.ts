export type Extension = { id?: string; path: string; provider: 'compass' | 'fin'; name: 'Compass' | 'Fin' };

export const COMPASS_LATEST_RELEASE: Extension = { provider: 'compass', path: './compass.crx', name: 'Compass' };
export const FIN_LATEST_RELEASE: Extension = { provider: 'fin', path: './fin.crx', name: 'Fin' };
