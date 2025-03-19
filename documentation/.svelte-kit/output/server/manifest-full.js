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
		client: {start:"_app/immutable/entry/start.yH-BfMLt.js",app:"_app/immutable/entry/app.C0lid-NF.js",imports:["_app/immutable/entry/start.yH-BfMLt.js","_app/immutable/chunks/Dex7m1R4.js","_app/immutable/chunks/K854fIq8.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Qvh8RLHC.js","_app/immutable/entry/app.C0lid-NF.js","_app/immutable/chunks/K854fIq8.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/GGHT0-qi.js","_app/immutable/chunks/CPP4BZUb.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/Bszv2B-T.js","_app/immutable/chunks/CzpCXS5V.js","_app/immutable/chunks/Qvh8RLHC.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/404",
				pattern: /^\/404\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
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
