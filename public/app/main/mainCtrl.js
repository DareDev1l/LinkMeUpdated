
app.controller('MainCtrl', function($scope, CourseResource){
    $scope.courses = CourseResource.query();
})