/**
 * Created by noman on 1/21/2017.
 */
(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['SignupService','ApiPath'];
    function MyInfoController( SignupService, ApiPath) {
        var $ctrl = this;
        $ctrl.signupService = SignupService;
        $ctrl.message = "My Info Controler" ;
        $ctrl.basePath = ApiPath;
        
    }

})();