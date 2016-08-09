requirejs.config({
    baseUrl: 'js',
    paths: {
        app: 'app',
        lib: 'lib',
        jquery: 'http://code.jquery.com/jquery-1.11.2.min',
        underscore: 'lib/underscore',
        handlebars: 'lib/handlebars'
    },
    shim: {
        handlebars: {
            exports: 'handlebars'
        }
    }
});
 
// Start loading the main app file.
requirejs(['app/main']);
