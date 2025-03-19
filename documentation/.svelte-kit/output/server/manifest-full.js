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
		client: {start:"_app/immutable/entry/start.C8_V4e5g.js",app:"_app/immutable/entry/app.BMuZViZp.js",imports:["_app/immutable/entry/start.C8_V4e5g.js","_app/immutable/chunks/DVAugNrE.js","_app/immutable/chunks/BMX_5P67.js","_app/immutable/chunks/D268svKc.js","_app/immutable/entry/app.BMuZViZp.js","_app/immutable/chunks/BMX_5P67.js","_app/immutable/chunks/fN37ziEy.js","_app/immutable/chunks/-ImmKWWL.js","_app/immutable/chunks/B_7Boklb.js","_app/immutable/chunks/D268svKc.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
