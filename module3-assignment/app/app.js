(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItemsDirective);

function foundItemsDirective() {
  var ddo = {
    templateUrl: 'app/view/foundItems.html',
    scope: {
      items: '<',
      onRemove : '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'foundItemsDirectiveCtrl',
    bindToController: true
  };
  return ddo;
}

function FoundItemsDirectiveController($scope) {

}


NarrowItDownController.$inject = ['MenuSearchService', '$scope'];
function NarrowItDownController(MenuSearchService, $scope) {

  $scope.getMenuItems = function(searchTerm){
    var menuItemResult = MenuSearchService.getMatchedMenuItems(searchTerm)
    menuItemResult.then(function(data){
      $scope.menuItemList = data;
    },function(error){
      $scope.message = 'Nothing found';
    });

  }

  $scope.removeMenuItem = function (itemIndex) {
    $scope.menuItemList.splice(itemIndex, 1);
  };
}

function MenuSearchService($http, $q) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    var deferred = $q.defer();

    var reqObj = {"method":"GET", "url" :"https://davids-restaurant.herokuapp.com/menu_items.json"};

    $http(reqObj).then (
        function success(response) {

          var menuItems =response.data.menu_items;
          var menuFoundItems = [];
          for(var i=0 ; i < menuItems.length ; i++){
            var description = menuItems[i].description;
            if(description.indexOf(searchTerm) != -1){
              menuFoundItems.push(menuItems[i]);
            }
          }
          deferred.resolve(menuFoundItems);
        },function error(error) {
          deferred.reject(error);
        });
    return deferred.promise;
  }
}

})();
