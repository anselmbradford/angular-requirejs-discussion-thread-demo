angular-requirejs-discussion-thread-demo
========================================

This is an example app that demonstrates a front-end build setup using Grunt, Bower, RequireJS, and AngularJS.

## Synopsis

The application feeds in a JSON file that models a threaded discussion. The discussion thread structure is represented as a flat array with an adjacency list. The app converts this to a tree data structure to make it easier to pass off to a recursive template, which generates the thread's comment HTML snippets.

## Installation
***Note: the following requires that nodejs is installed, follow the [node installation instructions](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager) for your system if needed.***

  Use `npm install` to install the required node modules.

  Use `bower install` to install the required bower modules.

  Use `grunt development` to compile a development deploy in the `www` directory.

  Use `grunt preflight` to compile a production deploy in the `www` directory.

## Screenshots

The opening screen, all discussion threads are collapsed.

![opening screen](https://raw.github.com/anselmbradford/angular-requirejs-discussion-thread-demo/master/screenshots/screenshot-1.png)

Clicking on a discussion expands the thread.

![poster screen](https://raw.github.com/anselmbradford/angular-requirejs-discussion-thread-demo/master/screenshots/screenshot-2.png)
