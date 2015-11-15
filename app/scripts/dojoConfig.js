var dojoConfig = {
            async: true,
            baseUrl: '/',
            packages: [                
                //{ name: "dojo17", location: "//ajax.googleapis.com/ajax/libs/dojo/1.7.0" },
                { name: "dojo10", location: "bower_components/dojo" },
                { name: "dijit", location: "bower_components/dijit" },
                { name: "dojox", location: "bower_components/dojox" },
                { name: "dgrid", location: "bower_components/dgrid" },
                { name: "dstore", location: "bower_components/dstore" },
                { name: "dmodel", location: "bower_components/dmodel" },
                { name: "xstyle", location: "bower_components/xstyle" },
                { name: "react", location: "bower_components/react", main: "react-with-addons" },
                { name: "fuse-portlet", location: "amd/fuse-portlet", packageMap: {dojo:"dojo10"}},
                { name: "fuse", location: "amd/fuse", packageMap: {dojo:"dojo10"}},
                { name: "fuse2", location: "amd/fuse2"}
                //{ name: "react-dom", location: "bower_components/react", main: "react-dom"}
                ],
            map: {
                fuse2: {
                    dojo: "dojo10"
                }
            }
        };