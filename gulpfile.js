var gulp = require('gulp'),
   ts = require('gulp-typescript'),
   sourcemaps = require('gulp-sourcemaps'),
   clean = require('gulp-clean'),
   changed = require('gulp-changed'),
   concat = require('gulp-concat'),
   wiredep = require('wiredep').stream,
   inject = require('gulp-inject');

var config = require('./gulp.config');

var tsServerProject = ts.createProject({
   declarationFiles: false,
   noExternalResolve: false,
   module: 'commonjs',
   target: 'ES5'
});

var tsPublicProject = ts.createProject({
   declarationFiles: false,
   noExternalResolve: false,
   target: 'ES5'
});


//main task for dev

//main task for deploy to heroku
//gulp.task('heroku-build', ['clean-deploy', 'copy-package', 'compile-all'], postBuild);
gulp.task('heroku-build', ['compile-all'], postBuild);

gulp.task('browser-sync', ['start-server'], browserSyncTask);
gulp.task('browser-sync-only', browserSyncTask);
gulp.task('start-server', ['compile-all'], startServer);

gulp.task('compile-all', ['compile-server', 'compile-public']);
gulp.task('compile-server', compileServer);
gulp.task('compile-public', compilePublic);

gulp.task('watch-all', ['watch-server']);
gulp.task('watch-server', ['compile-server'], watchServer);
gulp.task('watch-public', ['compile-public'], watchPublic);

gulp.task('clean-deploy', cleanDeploy);
gulp.task('clean-js', cleanJs);
gulp.task('copy-package', copyPackage);

gulp.task('bower-inject', bowerInject);
gulp.task('custom-inject', customInject);

gulp.task('heroku-postinstall',['clean-js', 'heroku-build'], herokuPostinstall)

function herokuPostinstall() {
   log('heroku postinstall success!');
}

var browserSync = null;
function browserSyncTask(params) {
   browserSync = require('browser-sync').create();
   browserSync.init(null, {
      proxy: "http://localhost:5000",
      files: config.browserSync,
      browser: "google chrome",
      port: 7000,
   });
   
   gulp.watch([config.srcPublic+'/**/*.js', config.srcServer+'/views/**/*.vash', config.srcPublic+'/**/*.css', '!'+config.srcPublic+'client.njsproj']).on('change', function(){
      log('reload must be');
      browserSync.reload();
   });
}

function compileServer(params) {
   
   var tsResult = gulp.src(config.tsServerSrc)
      .pipe(sourcemaps.init())
      .pipe(ts(tsServerProject));

   return tsResult.js
      .pipe(sourcemaps.write('./source-maps'))
      .pipe(gulp.dest(config.destServer));
      
}

function compilePublic(params) {
   var tsResult = gulp.src(config.tsPublicSrc)
      .pipe(sourcemaps.init())
      .pipe(ts(tsPublicProject));

   return tsResult.js
      .pipe(concat('public.js'))
      .pipe(sourcemaps.write('../source-maps'))
      .pipe(gulp.dest(config.clientApp));
}


function watchServer(params) {
   gulp.watch(config.tsServerSrc, ['compile-server']);
}

function watchPublic(params) {
   gulp.watch(config.tsPublicSrc, ['compile-public']);
}

function startServer(cb) {

   var started = false;
   var nodemon = require('gulp-nodemon');

   return nodemon({
      script: config.mainFile,
      ignore: ["client/**"],
      ext: 'js',
   }).on('restart', function () {

   }).on('start', function () {
      if (!started) {
         cb();
         started = true;
      }
   });

}

function copyPackage(params) {
   return gulp.src(['package.json', 'Procfile']).pipe(gulp.dest('./deploy'));
}

function cleanDeploy() {
   return gulp.src('./deploy', { read: false })
      .pipe(clean());
}

function postBuild(params) {
//    var files = [
//       './src/**/*.js',
//       './src/**/*.json',
//       './src/**/*.png',
//       './src/**/*.css',
//       './src/**/*.vash',
//       './src/**/*.wav',
//       './src/**/*.mp3'
//    ];
// 
//    return gulp.src(files)
//       .pipe(gulp.dest('./deploy'));
}


function cleanJs(params) {
   var paths = [
      config.srcServer + '**/*.js'
   ];
   return gulp.src(paths, { read: true })
      .pipe(clean());
}

function bowerInject() {
   return gulp.src(config.tsServerSrc + 'views/layout.vash')
      .pipe(wiredep())
      .pipe(gulp.dest(config.destServer + 'views/'));
}

function customInject(params) {
   var target = gulp.src(config.srcServer + 'views/layout.vash');
   // It's not necessary to read the files (will speed up things), we're only after their paths: 
   var sources = gulp.src(config.publicJsInject);

   return target.pipe(inject(sources))
      .pipe(gulp.dest(config.destServer + 'views/'));
}



function log(message, object) {
   if(object){
      console.log(message, object);
   }
   else{
      console.log(message);
   }
   
}