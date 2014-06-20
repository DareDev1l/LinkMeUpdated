app.controller('LinkerCtrl', function($scope, UsersResource, identity){
    $scope.users = UsersResource.query();
    $scope.identity = identity;
})