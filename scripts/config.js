requirejs.config({
    baseUrl: './scripts',
    paths: {
        jquery: 'jquery',
        underscore: 'underscore-min'
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