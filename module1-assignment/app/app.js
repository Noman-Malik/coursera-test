var Module1_Assignment = angular.module('LunchCheck', []);

Module1_Assignment.controller('LunchCheckController', function($scope) {

  $scope.message = '';
  $scope.lunchNameList = '';
  $scope.messageColor = {'color':''};
  $scope.inputTextFieldStyle = {};

  $scope.checkLunchNames = function()
  {
    var lunchNameLength = getLunchNameCount();
    if (lunchNameLength == 0) {
      $scope.message = 'Please enter data first ';
      $scope.messageColor = {'color':'red'};
    }
    else if ( lunchNameLength <= 3 ) {
      $scope.message = 'Enjoy!';
      $scope.messageColor = {'color':'green'};
    }
    else{
      $scope.message = 'Too much!';
      $scope.messageColor = {'color':'green'};
    }
    $scope.inputTextFieldStyle = {'border':'2px solid '+$scope.messageColor.color};
  }

  function getLunchNameCount()
  {
    var count = 0;
    var lunchList = $scope.lunchNameList.split(',');
    for(var i = 0 ; i < lunchList.length ; i++)
    {
      if(lunchList[i].trim() != '')
      {
        count++;
      }
    }
    return count;
  }
});
