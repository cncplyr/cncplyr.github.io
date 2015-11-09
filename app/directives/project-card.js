'use strict';

myApp.directive('projectCard', [
  function() {
    return {
      restrict: 'E',
      scope: {
        // Contents
        title: '@',
        description: '@',

        // Image
        imgSrc: '@',
        imgTitle: '@',

        // Links
        playLink: '@',
        githubLink: '@'
      },
      templateUrl: 'partials/directives/project-card.html'
    };
  }
]);
