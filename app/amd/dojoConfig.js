"use strict";

define([], function () {
        var dojoConfig = {
                async: true,
                baseUrl: '/',
                packages: [{
                        name: "dojo10",
                        location: "bower_components/dojo"
                }, {
                        name: "dijit",
                        location: "bower_components/dijit"
                }, {
                        name: "dojox",
                        location: "bower_components/dojox"
                }, {
                        name: "dgrid",
                        location: "bower_components/dgrid"
                }, {
                        name: "dstore",
                        location: "bower_components/dstore"
                }, {
                        name: "dmodel",
                        location: "bower_components/dmodel"
                }, {
                        name: "xstyle",
                        location: "bower_components/xstyle"
                }, {
                        name: "react",
                        location: "bower_components/react",
                        main: "react-with-addons"
                }, {
                        name: "fuse-portlet",
                        location: "amd/fuse-portlet",
                        packageMap: {
                                dojo: "dojo10"
                        }
                }, {
                        name: "fuse",
                        location: "amd/fuse",
                        packageMap: {
                                dojo: "dojo10"
                        }
                }, {
                        name: "fuse2",
                        location: "amd/fuse2"
                }],
                map: {
                        fuse2: {
                                dojo: "dojo10"
                        }
                },
                deps: ['yo-dojov2'],
                callback: function callback(yoDojov2) {
                        yoDojov2.init();
                }
        };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2pvQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOltdfQ==
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2pvQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
