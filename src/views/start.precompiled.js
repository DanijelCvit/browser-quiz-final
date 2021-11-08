(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['start'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header><h1>START PAGE HEADER HERE</h1></header>\n<a id=\"nextQuestionButton\" href=\"?page=quiz&question=0\">Start Quiz</a>";
},"useData":true});
})();