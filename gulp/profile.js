'use strict';

var profile = {

    basePath: '../',
    releaseDir: '../dist',
    releaseName: 'dist',
    action: 'release',

    mini: true,
    layerOptimize: 'uglify',
    optimize: 'uglify',
    cssOptimize: 'comments',
    selectorEngine: 'lite',

	// Since we're using dojoConfig.map to patch dojo/_base/declare, we must build anonymous modules
	insertAbsMids: 0,

    staticHasFeatures: {
        'dojo-guarantee-console': false,
    },

    packages: [
        
        // dojo
        {name: 'dojo', location: 'bower_components/dojo'},
        {name: 'dojox', location: 'bower_components/dojox'},
        {name: 'dijit', location: 'bower_components/dijit'},

        // dgrid
        {name: 'dgrid', location: 'bower_components/dgrid'},
        {name: 'dstore', location: 'bower_components/dstore'},
        {name: 'put-selector', location: 'bower_components/put-selector'},
        {name: 'xstyle', location: 'bower_components/xstyle'},

        // bundle
        //{name: 'bundle', location: '../src/bundle/'},
        {name: "fuse-portlet", location: "app/amd/fuse-portlet"},
    ],

    layers: {
        'dojo/dojo': {
            include: [
                'dojo/dojo',
                'dojo/i18n',
                'dojo/_base/config',
                'dojo/_base/declare',
                'dstore/Memory',
                'dmodel/Model',
                'fuse-portlet/main',
            ],
            customBase: true,
            boot: true,
        },
        

		'fuse-portlet/main': {
			include: []
		}
    },

};

