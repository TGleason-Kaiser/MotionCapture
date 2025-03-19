export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.Bs8TQBGM.js",app:"_app/immutable/entry/app.DbxPvOop.js",imports:["_app/immutable/entry/start.Bs8TQBGM.js","_app/immutable/chunks/DG1B-2qO.js","_app/immutable/chunks/DyA4cjp6.js","_app/immutable/chunks/BICk_aao.js","_app/immutable/chunks/e3VQDKoR.js","_app/immutable/entry/app.DbxPvOop.js","_app/immutable/chunks/DyA4cjp6.js","_app/immutable/chunks/NwG7ijYp.js","_app/immutable/chunks/ziCHoG4H.js","_app/immutable/chunks/DyIR8JCh.js","_app/immutable/chunks/CRxJor0g.js","_app/immutable/chunks/e3VQDKoR.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
