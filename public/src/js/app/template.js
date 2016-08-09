define(['jquery', 'underscore', 'handlebars'], function($, _, Handlebars) {
 
      var greeting = function(n) {
        var temp = _.template("Hello <%= name %>");
        $("#underscroeTemplate").html(temp({name: n}));
      };
 
      var greeting2 = function(n) {
        var temp = Handlebars.compile('Hello {{name}}');
         $("#handlebarsTemplate").html(temp(n));
      }
      return {
        underscoreTemplate: greeting,
        handlebarsTemplate: greeting2
      };
});
