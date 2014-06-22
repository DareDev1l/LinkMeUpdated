app.controller('LinkerCtrl', function($scope, UsersResource, identity, auth){
    $scope.users = UsersResource.query();
    $scope.identity = identity;

    $scope.post = function(user){
        auth.post(user).then(function(){
            $scope.activity = user.activity;
        })
    }
});