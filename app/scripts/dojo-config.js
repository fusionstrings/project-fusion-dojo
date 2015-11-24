let dojoConfig = {
    async: true,
    isDebug: true,
    baseUrl: '/',
    packages: [
        { name: "dojo", location: "bower_components/dojo" },
        { name: "dstore", location: "bower_components/dstore" },
        { name: "dmodel", location: "bower_components/dmodel" },
        { name: "fetch", location: "bower_components/fetch" },
        { name: "babel-polyfill", location: "scripts/babel-polyfill" },
        { name: "fuse", location: "scripts/fuse"}
    ],
    api: '/rest',
    deps: [ 'fuse', 'fetch/fetch', 'babel-polyfill/polyfill' ],
    callback: (fuse) => {
        fuse.default();
    }
}