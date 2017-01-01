var Module2_Assignment = angular.module('ShoppingListCheckOff', []);

Module2_Assignment.service('ShoppingListCheckOffService', function() {

    this.boughtList = [];

    this.addBoughtItem = function(item){
        this.boughtList.push(item);
    }
});

Module2_Assignment.controller('ToBuyController', ['$scope','ShoppingListCheckOffService', function($scope, ShoppingListCheckOffService) {

  $scope.buyedList = [{ name: "cookies", quantity: 10 },{ name: "snack", quantity: 10 },{ name: "rocket", quantity: 10 },
  { name: "football", quantity: 10 },{ name: "balls", quantity: 10 }];

  $scope.name = '';
  $scope.quantity = '';

  $scope.addBuyedItem = function(){
    if(!$scope.name || !$scope.quantity)
      return;
    var item = {'name':$scope.name,'quantity':$scope.quantity};
    $scope.buyedList.push(item);
  }

  $scope.removeBuyedItem = function(itemIndex){
    var deletedObjList = $scope.buyedList.splice(itemIndex,1);
    return deletedObjList[0];
  }

  $scope.addBoughtItem = function(itemIndex){
    var boughtItem = $scope.removeBuyedItem(itemIndex);
    ShoppingListCheckOffService.addBoughtItem(boughtItem);
  }
}]);

Module2_Assignment.controller('AlreadyBoughtController', ['$scope','ShoppingListCheckOffService', function($scope, ShoppingListCheckOffService) {
  $scope.shoppingService = ShoppingListCheckOffService;
  $scope.deleteBoughtItem = function(boughtItemIndex){
    $scope.shoppingService.boughtList.splice(boughtItemIndex,1);
  }
}]);
