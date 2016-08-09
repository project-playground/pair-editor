define(['jquery'], function () {
    var hello = {
        narrator: function() {
            console.log('A new requirejs user says: ');
            $('#my-msg').append('A new requirejs user says:');
        }
    };
 
    hello.greeting = function () {
            console.log('Hello World!');
            $('#my-msg').append('Hello World!');
    };
 
    (function () {
        this.msg = function() {
            console.log('This is my first practice of using requirejs!');
            $('#my-msg').append('This is my first practice of using requirejs!');
        };
    }).apply(hello);
 
    return hello;
});
