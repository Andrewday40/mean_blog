
(function() {
  angular.model('ngBlog')
         .factory('CommentService', CommentService);

  CommentService.$inject = ['$http'];

  function CommentService($http){
    var baseURL = 'https://calm-atoll-49293.herokuapp.com/comments/';
    var service = {
      getOneComment: getOneComment,
      createComment: createComment,
      updateComment: updateComment,
      deleteComment: deleteComment
    };
    return service;

    function getOneComment(){}
    function createComment(){}
    function updateComment(){}
    function deleteComment(){}
  }
}());
