(function () {
'use strict';

angular.module('MenuApp')
.component('itemsList', {
  templateUrl: 'src/menuAppModule/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
