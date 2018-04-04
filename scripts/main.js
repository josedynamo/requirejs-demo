define(['jquery',
    'first-module',
    'another-module'],
    function ($,firstModule, anotherModule) {
        $('#output').html(firstModule+" "+anotherModule);
    });