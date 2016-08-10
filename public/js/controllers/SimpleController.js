
(function(){
  angular.module('ngBlog')
         .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope', 'UserService', 'CommentService'];

  function SimpleController($scope, UserService, CommentService){
    $scope.message = 'Hey! Angular Works!';



    // CommentService.getAllComments()
    //               .then(function(response){
    //                 console.log(response);
    //               });
    // var commentObj = {
    //   author: '57a92af30bdf701100b451be',
    //   body: 'stuff and things and stuff',
    //   post: '57a3c62fdd2539ea73cfb547'
    // };
    // CommentService.createComment(commentObj)
    //               .then(function(response){
    //                 console.log(response);
    //               });
    // var commentId = '57abb256cda1221100f4b48c';
    //
    // CommentService.getOneComment(commentId)
    //               .then(function(response){
    //                 console.log(response);
    //               });
    // var updateInfo = {
    //   author: '57a92af30bdf701100b451be',
    //   body: 'less stuuf and more things',
    //   post: '57a3c62fdd2539ea73cfb547'
    // };
    // CommentService.updateComment(commentId, updateInfo)
    //               .then(function(response){
    //                 console.log(response);
    //               });
    // CommentService.deleteComment(commentId)
    //               .then(function(response){
    //                 console.log(response);
    //               });

    // UserService.getAllUsers()
    //            .then(function(response){
    //              console.log(response);
    //            });
    //
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
    //
    // var userId = '57a52637ae789bb497b45afc';
    // UserService.getOneUser(userId)
    //            .then(function(response){
    //              console.log(response);
    //            });
    //
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
    //
    // UserService.deleteUser(userId)
    //            .then(function(response){
    //              console.log(response);
    //            });
  }
})();
