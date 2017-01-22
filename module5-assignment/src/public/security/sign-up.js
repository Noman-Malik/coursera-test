/**
 * Created by noman on 1/21/2017.
 */
(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', 'SignupService'];
    function SignUpController(MenuService, SignupService) {
        var $ctrl = this;
        var signupService = SignupService;
        $ctrl.resultMessage = "";

        $ctrl.signUpUser = function(signUpObj){
            MenuService.getMenuItemDetail(signUpObj.menuNumber).then(function(data) {
                signupService.signUpObj = signUpObj;
                signupService.itemJson = data;
                $ctrl.resultMessage = "Your information has been saved.";
            },function(error){
                $ctrl.resultMessage = "No such menu number exists"; 
            });

        }
    }

})();