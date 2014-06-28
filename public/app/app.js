var app = angular.module('app', ['ngResource', 'ngRoute']).value('toastr', toastr);

app.config(function($routeProvider, $locationProvider){
    //$locationProvider.html5Mode(true);

    var routeUserChecks = {
        adminRole: {
                authenticate: function(auth){
                    return auth.isAuthorizedForRole('admin');
                }
            },
        authenticated: {
            authenticate: function(auth){
                return auth.isAuthenticated();
            }
        }
    };

    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/home',
            controller: 'MainCtrl'
        })

        .when('/courses', {
            templateUrl: '/partials/courses/courses-list',
            controller: 'CoursesListCtrl'
        })

        .when('/courses/:id', {
            templateUrl: '/partials/courses/course-details',
            controller: 'CourseDetailsCtrl'
        })

        .when('/users/:id', {
            templateUrl: '/partials/admin/user',
            controller: 'UserDetailsCtrl'
        })

        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'SignUpCtrl'
        })

        .when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'ProfileCtrl',
            resolve: routeUserChecks.authenticated
        })

        .when('/viewprofile', {
            templateUrl: '/partials/account/viewProfile',
            controller: 'ViewProfileCtrl',
            resolve: routeUserChecks.authenticated
        })

        .when('/users', {
            templateUrl: '/partials/admin/users-list',
            controller: 'UserListCtrl',
            resolve: routeUserChecks.authenticated
        })

        .when('/linker', {
            templateUrl: '/partials/account/linker',
            controller: 'LinkerCtrl',
            resolve: routeUserChecks.authenticated
        })
        .when('/support', {
            templateUrl: '/partials/account/support',
            controller: 'SupportCtrl',
            resolve: routeUserChecks.authenticated
        })
        .when('/chat', {
            templateUrl: '/partials/account/chat',
            controller: 'ChatCtrl',
            resolve: routeUserChecks.authenticated
        })
});

app.run(function($rootScope, $location){
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
        if (rejection === 'Not authorized') {
            $location.path('/');
        }
    })
})

