app.factory('ActivityResource', function($resource){
    var ActivityResource = $resource('/api/post/:id', {id:'@id'}, { update: {method:'PUT', isArray: false}});

    return ActivityResource;
});