var Activity = require('mongoose').model('Activity');

module.exports = {
    createPost: function (req, res, next) {
        var newPostData = req.body;
        Activity.create(newPostData, function (err, post) {
            if (err) {
                console.log('Failed to add new post: ' + err);
                return;
            }
        });
    },
    getAllPosts: function (req, res) {
        Activity.find({}).exec(function (err, collection) {
            if (err) {
                console.log('Posts could not be loaded: ' + err);
            }

            res.send(collection);
        })
    }
}