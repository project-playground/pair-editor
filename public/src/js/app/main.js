define(function (require) {
    var hello = require('app/helloworld');
    hello.narrator();
    hello.greeting();
    hello.msg();
     
    require(['app/template'], function(template) {
        template.underscoreTemplate("underscore");
        template.handlebarsTemplate({name:"Handlebars"});
    });
});
