define(['app/helloworld', 'app/template', 'jquery'], function(hello, template, $) {
    console.log('main loaded');
    hello.narrator();
    hello.greeting();
    hello.msg();
     
    template.underscoreTemplate("underscore");
    template.handlebarsTemplate({name:"Handlebars"});

    console.log('Hello jquery ' + $().jquery);

});
