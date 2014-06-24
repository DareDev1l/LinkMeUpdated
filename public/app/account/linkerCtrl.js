app.controller('LinkerCtrl', function($scope,$location, UsersResource, identity, auth, ActivityResource){
    $scope.users = UsersResource.query();
    $scope.activity = ActivityResource.query();
    $scope.identity = identity;

    $scope.addpost = function(activity){
        auth.addpost(activity).then(function(){
            console.log('Success');
            location.reload(true);
        })
    }
});