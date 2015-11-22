let dojoConfig = {
    async: true,
    isDebug: true,
    baseUrl: '/',
    packages: [
        { name: "dojo", location: "bower_components/dojo" },
        { name: "dstore", location: "bower_components/dstore" },
        { name: "dmodel", location: "bower_components/dmodel" },
        { name: "fetch", location: "bower_components/fetch" },
        { name: "fuse", location: "scripts/fuse"}
    ],
    api: '/rest',
    deps: [ 'fuse' ],
    callback: fuse => {
        fuse.init();
    }
}