app.controller('UserDetailsCtrl', function($scope, $routeParams, UsersResource){
    $scope.user = UsersResource.get({id: $routeParams.id});
});