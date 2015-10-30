var destServer = 'server/';
	
var srcServer = 'server/',
    srcPublic = 'client/',
	 clientApp = srcPublic + 'app/';

var config = {
	tsCompiler : { module: 'commonjs'},
	tsServerSrc : [
		srcServer + '**/*.ts',
		'!'+srcPublic+'**/*.ts'
	],
	jsServerSrc : [
		srcServer + '**/*.js',
		'!'+srcPublic+'**/*.js'
	],
	tsPublicSrc : [
	    clientApp + '**/*.ts'
	],
	tsGameSrc : [
	    clientApp + 'game/**/*.ts',
		'!'+clientApp + 'typings**/*.ts',
		'!'+clientApp + 'game/tests/**/*.ts'
	],
	publicJsInject : [
		 clientApp + '**/*.js'
	],
	mainFile : destServer + 'app.js',
	destServer : destServer,
	srcPublic : srcPublic,
	srcServer : srcServer,
	clientApp : clientApp,
	gameTestsSrc: clientApp+ 'game/tests/**/*.ts',
	
	browserSync: [
		'client/**/*.*'
	]
	
};

module.exports = config;