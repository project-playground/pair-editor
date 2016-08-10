requirejs.config({
    baseUrl: 'js',
    paths: {
        app: 'app',
        lib: 'lib',
        jquery: 'lib/jquery-3.1.0.min',
        underscore: 'lib/underscore-min',
        handlebars: 'lib/handlebars-v4.0.5'
    },
    shim: {
        handlebars: {
            exports: 'handlebars'
        }
    }
});
 
// Start loading the main app file.
requirejs(['app/main']);
