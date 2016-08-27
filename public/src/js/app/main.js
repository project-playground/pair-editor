define(['app/helloworld', 'app/template', 'app/goldenlayout', 'jquery'], function(hello, template, golden, $, golden) {
    console.log('main loaded');
    hello.narrator();
    hello.greeting();
    hello.msg();
     
    template.handlebarsTemplate({name:"Handlebars"});

    console.log('Hello jquery ' + $().jquery);

});
