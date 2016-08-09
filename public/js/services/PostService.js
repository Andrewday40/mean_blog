
(function() {
  angular.model('ngBlog')
         .factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http){
    var baseURL = 'https://calm-atoll-49293.herokuapp.com/posts/';
    var service = {
      getAllPosts: getAllPosts,
      createPost: createPost,
      getOnePost: getOnePost,
      updatePost: updatePost,
      deletePost: deletePost
    };
    return service;

    function getAllPosts(){}
    function createPost(){}
    function getOnePost(){}
    function updatePost(){}
    function deletePost(){}
  }
}());
