define(['jquery', 'handlebars'], function($, Handlebars) {
 
      var greeting = function(n) {
        var temp = Handlebars.compile('Hello {{name}}');
         $("#handlebarsTemplate").html(temp(n));
      }
      return {
        handlebarsTemplate: greeting
      };
});
