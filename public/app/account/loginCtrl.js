app.controller('LoginCtrl', function($scope, $location, $http, notifier, identity, auth){
    $scope.identity = identity;

    $scope.login = function(user){
        auth.login(user).then(function(success){
            if(success){
                notifier.success('Successful login!');
                $location.path('/');
            }
            else {
                notifier.error('Invalid combination');
            }
        });
    }

    $scope.logout = function() {
        auth.logout().then(function(){
                notifier.success('Successful logout');
                if($scope.user){
                    $scope.user.username = '';
                    $scope.user.password = '';
                }
                $location.path('/');
            })

        }
    }
)