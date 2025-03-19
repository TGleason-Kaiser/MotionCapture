import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BKWv-jW4.js","_app/immutable/chunks/ziCHoG4H.js","_app/immutable/chunks/DyA4cjp6.js","_app/immutable/chunks/BjbmTVJ9.js","_app/immutable/chunks/DvkxVwct.js","_app/immutable/chunks/CRxJor0g.js"];
export const stylesheets = ["_app/immutable/assets/0.D_TY-g-A.css"];
export const fonts = [];
