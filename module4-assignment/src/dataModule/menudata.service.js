(function () {
'use strict';

angular.module('Data')
.service('MenuDataService ', MenuDataService );


  MenuDataService .$inject = ['$q', '$timeout','$http']
function MenuDataService($q, $timeout, $http) {
  var service = this;
  
    service.getAllCategories = function(){
      var deferred = $q.defer();
      var reqObj = {"method":"GET", "url" :"https://davids-restaurant.herokuapp.com/categories.json"};

      $http(reqObj).then (
          function success(response) {
              deferred.resolve(response.data);
          },function error(error) {
              deferred.reject(error);
          });
      return deferred.promise;

    }

    service.getItemsForCategory = function(categoryShortName){
      debugger;
      var deferred = $q.defer();
      var reqObj = {"method":"GET", "url" :"https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName};

      $http(reqObj).then (
          function success(response) {
            deferred.resolve(response.data.menu_items);
          },function error(error) {
            deferred.reject(error);
          });
      return deferred.promise;
    }
}

})();
