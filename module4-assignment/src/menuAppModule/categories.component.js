(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuAppModule/templates/category.template.html',
  bindings: {
    items: '<'
  }
});

})();
