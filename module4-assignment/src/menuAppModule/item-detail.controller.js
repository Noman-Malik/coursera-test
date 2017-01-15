(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['$stateParams', 'item'];
function ItemDetailController($stateParams, item) {
  var itemList = this;
  itemList.menuItemList = item;
 /* var item = items[$stateParams.itemId];
  itemDetail.name = item.name;
  itemDetail.quantity = item.quantity;
  itemDetail.description = item.description;*/
}

})();
