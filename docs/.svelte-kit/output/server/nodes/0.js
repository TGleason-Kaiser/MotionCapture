import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DiXNrbrg.js","_app/immutable/chunks/-ImmKWWL.js","_app/immutable/chunks/BMX_5P67.js"];
export const stylesheets = ["_app/immutable/assets/0.hFgQvCOj.css"];
export const fonts = [];
