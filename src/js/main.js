requirejs.config(
{
		baseUrl: 'js',

		paths:
		{
				require: 'vendor/bower_components/requirejs/require',
				domReady: 'vendor/bower_components/requirejs-domready/domReady',
				modernizr: 'vendor/bower_components/modernizr/modernizr',
				jquery: 'vendor/bower_components/jquery/dist/jquery-min',
				angular: 'vendor/bower_components/angular/angular.min'
		},

		shim:
		{
			modernizr:
			{
			exports : 'Modernizr'
				},
				jquery:
				{
						exports : "jQuery"
				},
				angular: {
						exports: 'angular'
				}
		}
});

require(["modernizr",'angular', 'app/app','app/controllers/discussionController', 'app/directives/treeDirective'],
	function(Modernizr,angular,app,controller)
{
	'use strict';
	angular.bootstrap(document.getElementById("content"), ['wikimedia-discuss']);
});