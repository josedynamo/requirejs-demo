requirejs.config({
    baseUrl: './scripts',
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore-min'
    },
    bundles: {
        'message' : ['first-module', 'another-module'] ,
        },
    shim: {
        'underscore': {
            exports: '_'
        }
    }
});