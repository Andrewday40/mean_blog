
(function(){
  angular.module('ngBlog')
         .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope', 'UserService'];

  function SimpleController($scope, UserService){
    $scope.message = 'Hey! Angular Works!';

    // UserService.getAllUsers()
    //            .then(function(response){
    //              console.log(response);
    //            });

    // var userObj = {
    //   firstName: 'Lil',
    //   lastName: 'Jon',
    //   age: 41,
    //   email: 'myemail@email.gov'
    // };
    // UserService.createUser(userObj)
    //            .then(function(response){
    //              console.log(response);
    //             });

    // var userId = '57a52637ae789bb497b45afc';
    // UserService.getOneUser(userId)
    //            .then(function(response){
    //              console.log(response);
    //            });

    // var updateInfo = {
    //   firstName: 'Lil',
    //   lastName: 'Jon',
    //   age: 30,
    //   email: 'myemail@email.com'
    // };
    // UserService.updateUser(userId, updateInfo)
    //            .then(function(response){
    //              console.log(response);
    //            });

    // UserService.deleteUser(userId)
    //            .then(function(response){
    //              console.log(response);
    //            });
  }
})();
