app.controller('ChatTabCtrl', function($scope, UsersResource){
    $scope.chatUsers = UsersResource.query();
});