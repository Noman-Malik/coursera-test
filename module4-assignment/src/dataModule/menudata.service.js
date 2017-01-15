(function () {
'use strict';

angular.module('Data')
.service('MenuDataService ', MenuDataService );


  MenuDataService .$inject = ['$q', '$timeout','$http']
function MenuDataService($q, $timeout, $http) {
  var service = this;

  // List of shopping items
  var items = [];

  // Pre-populate a no cookie list
  items.push({
    name: "Sugar",
    quantity: "2 bags",
    description: "Sugar used for baking delicious umm... baked goods."
  });
  items.push({
    name: "flour",
    quantity: "1 bags",
    description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
  });
  items.push({
    name: "Chocolate Chips",
    quantity: "3 bags",
    description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
  });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getItems = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(items);
    }, 800);

    return deferred.promise;
  };

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
