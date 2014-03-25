define(['app/app'], function (app) {

	app.directive("tree", function($compile) {
	return {
		restrict: "E",
		scope: {comment: '='},
		templateUrl: 'ng-templates/comment.html',
		compile: function(tElement, tAttr) {
			var contents = tElement.contents().remove();
			var compiledContents;
			return function(scope, iElement, iAttr) {
				if(!compiledContents) {
					compiledContents = $compile(contents);
				}
				compiledContents(scope, function(clone, scope) {
					iElement.append(clone);
				});
			};
		}
	};
});
});
