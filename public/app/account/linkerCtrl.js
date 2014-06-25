app.controller('LinkerCtrl', function($scope,$location, UsersResource, identity, auth, ActivityResource){
    $scope.users = UsersResource.query();
    $scope.activity = ActivityResource.query();
    $scope.identity = identity;

    $scope.addpost = function(activity){
        auth.addpost(activity).then(function(){
            console.log('Success');
<<<<<<< HEAD
=======
            location.reload(true);
>>>>>>> 15bfa13cd82dd59ed0ede41906c8acd133eb75c8
        })
    }
});