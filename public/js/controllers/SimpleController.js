
(function(){
  angular.module('ngBlog')
         .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope', 'UserService', 'CommentService', 'PostService'];

  function SimpleController($scope, UserService, CommentService, PostService){
    $scope.message = 'Hey! Angular Works!';

    // PostService.getAllPosts()
    //            .then(function(response){
    //              console.log(response);
    //            });
    // var postObj = {
    //   title: 'Not magic',
    //   body: 'What is this magic, and is it truly magic?',
    //   author: '57a92af60bdf701100b451bf'
    // };
    // PostService.createPost(postObj)
    //            .then(function(response){
    //              console.log(response);
    //            });
    // var postId = '57aa6ba1be37441100702071';
    // PostService.getOnePost(postId)
    //            .then(function(response){
    //              console.log(response);
    //            });
    // var updateInfo = {
    //   title: 'testingUpdatepost',
    //   body: 'look ma, no hands',
    //   author: '57aa5cc0edc0cf1100d8940b'
    // };
    // PostService.updatePost(postId, updateInfo)
    //            .then(function(response){
    //              console.log(response);
    //            });
    // PostService.deletePost(postId)
    //            .then(function(response){
    //              console.log(response);
    //            });

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
