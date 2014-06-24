app.controller('LinkerCtrl', function($scope, UsersResource, identity, auth, ActivityResource){
    $scope.users = UsersResource.query();
    $scope.activity = ActivityResource.query();
    $scope.identity = identity;
    $scope.$watch('linker', function(newPage){
        $scope.watchPage = newPage;
        //or any other code here
    });

    $scope.addpost = function(activity){
        auth.addpost(activity).then(function(){
            notifier.success('Successful added post!');
            $location.path('/linker');
        })
    }
});