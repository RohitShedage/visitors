angular.module('app.controllers', [])
  
.controller('makeEntryCtrl', ['$scope', '$stateParams', 'VisitorService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, VisitorService) {
    $scope.data = {};
    $scope.data.searchContactNumber = '123';
    $scope.data.visitors = [];
    $scope.search = function () {
        console.log($scope.data.visitors);
        VisitorService.search($scope.data.searchContactNumber).then(function(response) {
            $scope.data.visitors = response;
        });
    };
}])
   
.controller('cartCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('addVisitorCtrl', ['$scope', '$stateParams', '$ionicPopup', 'VisitorService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup, VisitorService) {
    function initializeVisitor() {
        $scope.data = {
            name: '',
            contact: '',
            visitorCount: '0',
            otherVisitors: '',
            vehicleNumber: '',
            inTime: '',
            purpose: '',
            comments: ''
        };
    }
    
    initializeVisitor();
    
    $scope.addVisitor = function() {
      VisitorService.addVisitor($scope.data).then(function() {
          initializeVisitor();
          $ionicPopup.alert({
              title: 'Thank you',
              template: 'Visitor Added Successfully'
          });
      });
    };
    
}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 