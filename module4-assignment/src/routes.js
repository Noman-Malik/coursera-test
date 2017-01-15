(function () {
  'use strict';

  angular.module('MenuApp')
      .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'src/menuAppModule/templates/home.template.html'
        })
        .state('categoryList', {
          url: '/category-list',
          templateUrl: 'src/menuAppModule/templates/main-categorylist.template.html',
          controller: 'MainCategoryListController as categoryList',
          resolve: {
            items: ['MenuDataService ', function (MenuDataService ) {
              return MenuDataService.getAllCategories()
            }]
          }
        })

        .state('categoryList.itemsList', {
          url: '/items-list/{category}',
          templateUrl: 'src/menuAppModule/templates/item-detail.template.html',
          controller: "ItemDetailController as itemList",
          resolve: {
            item: ['$stateParams','MenuDataService ', function ($stateParams, MenuDataService ) {
              return MenuDataService.getItemsForCategory($stateParams.category);
            }]
          }
        });
  }
})();
