// (function() {
//   angular.module('ngBlog')
//          .controller('UserController', UserController);
//
//   UserController.$inject = ['$scope', 'UserService'];
//
//   function UserController($scope, UserService){
//     UserService.getAllUsers()
//                .then(function(response){
//                  console.log(response);
//                });
//
//     var userObj = {
//       firstName: 'Lil',
//       lastName: 'Jon',
//       age: 41,
//       email: 'myemail@email.gov'
//     };
//     UserService.createUser(userObj)
//                 .then(function(response){
//                   console.log(response);
//                 });
//
//   }
// }());
