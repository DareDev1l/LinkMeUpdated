var auth = require('./auth'),
    controllers = require('../controllers');


module.exports = function(app){

    app.get('/api/users', auth.isAuthenticated, controllers.users.getAllUsers);
    app.post('/api/users', controllers.users.createUser);
    app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);

    app.get('/api/courses', controllers.courses.getAllCourses);
    app.get('/api/courses/:id', controllers.courses.getCourseById);

    app.get('/partials/:partialArea/:partialName', function(req,res){
        res.render('../../public/app/'+ req.params.partialArea+ '/' + req.params.partialName)
    })

    app.post('/login', auth.login);

    app.post('/logout', auth.logout);



    app.get('/api/*', function(req,res) {
        res.status(404);
        res.end();
    })

    app.get('*', function(req,res){
        res.render('index', {currentUser: req.user});
    })

    app.get('/create', function(req,res){

        // Generate unique id for the room
        var id = Math.round((Math.random() * 1000000));
        console.log('hey');

        // Redirect to the random room
        res.redirect('/chat/33');
    });
}