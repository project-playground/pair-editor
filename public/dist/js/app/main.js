define(function(e){var a=e("app/helloworld");a.narrator(),a.greeting(),a.msg(),e(["app/template"],function(e){e.underscoreTemplate("underscore"),e.handlebarsTemplate({name:"Handlebars"})})});