var auth = require('./auth'),
    controllers = require('../controllers');


module.exports = function(app){

    app.get('/api/users', auth.isAuthenticated, controllers.users.getAllUsers);
    app.get('/api/users/:id', controllers.users.getUserById);
    app.post('/api/users', controllers.users.createUser);
    app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);

    app.get('/api/post', auth.isAuthenticated, controllers.activity.getAllPosts);
    app.post('/api/post', controllers.activity.createPost);

    app.get('/api/courses', controllers.courses.getAllCourses);
    app.get('/api/courses/:id', controllers.courses.getCourseById);

    app.get('/partials/:partialArea/:partialName', function(req,res){
        res.render('../../public/app/'+ req.params.partialArea+ '/' + req.params.partialName)
    })

    app.put('/collections/:collectionName/:id', function(req, res, next) {
        req.collection.updateById(req.params.id, {$set:req.body}, {safe:true, multi:false}, function(e, result){
            if (e) return next(e)
            res.send((result===1)?{msg:'success'}:{msg:'error'})
        })
    })

    app.post('/login', auth.login);

    app.post('/logout', auth.logout);



    app.get('/api/*', function(req,res) {
        res.status(404);
        res.end();
    })

    app.get('*', function(req,res){
        res.render('index', {currentUser: req.user});
    });
};