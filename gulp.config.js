
var srcServer = 'server/',
    srcPublic = 'client/',
	clientAppPath = srcPublic + 'public/app/';

var config = {
	serverSourcePaths : [
		srcServer + '**/*.ts',
		'!'+srcPublic+'**/*.ts'
	],
	clientSourcePaths : [
	    clientAppPath + '**/*.ts'
	],

	mainServerFile : srcServer + 'app.js',
	mainClientFile : srcPublic + 'startup.js',

	srcPublic : srcPublic,
	srcServer : srcServer,
	clientAppPath : clientAppPath,
	destServer: srcServer,

	browserSync: [
		'client/public/**/*.*'
	]
	
};

module.exports = config;