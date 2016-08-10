
(function() {
  angular.module('ngBlog')
         .factory('CommentService', CommentService);

  CommentService.$inject = ['$http'];

  function CommentService($http){
    var baseURL = 'https://calm-atoll-49293.herokuapp.com/comments/';
    var service = {
      getAllComents: getAllComents,
      createComment: createComment,
      getOneComment: getOneComment,
      updateComment: updateComment,
      deleteComment: deleteComment
    };
    return service;

    function getAllComments(){
      return $http.get(baseUrl);
    }
    function createComment(commentObj){
      return $http.post(baseUrl, commentObj);
    }
    function getOneComment(commentId){}
    function updateComment(commentId, updateInfo){}
    function deleteComment(commentId){}
  }
}());
