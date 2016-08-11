(function() {
  angular.module('ngBlog')
         .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', '$location'];

  function NavbarController($scope, $location){
    $scope.isActive = function (viewLocation){
        return viewLocation === $location.path();
    };
}

}());
