var mongoose = require('mongoose'),
    user = require('../models/User'),
    activity = require('../models/Activity'),
    course = require('../models/Course');

module.exports = function(config) {

    mongoose.connect(config.db);

    var db = mongoose.connection;

    db.on('open', function (err) {
        if (err) {
            console.log('Database could not be opened' + err);
            return;
        }

        console.log('Database up and running...');

    })

    db.on('error', function (err) {
        console.log('Database error' + err);
    })

    user.seedInitialUsers();
    course.seedInitialCourses();
};
