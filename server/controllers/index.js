var usersController = require('../controllers/usersController'),
    activityController = require('../controllers/activityController'),
    coursesController = require('../controllers/coursesController');

module.exports = {
    users: usersController,
    courses: coursesController,
    activity: activityController
}