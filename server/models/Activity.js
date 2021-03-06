var mongoose = require('mongoose');

var activitySchema = mongoose.Schema({
    profilePic: {type: String},
    firstName: {type: String, default: 'FirstName'},
    lastName: {type: String, default: 'LastName'},
    body: String,
    links: {type: Number, default : 0},
    date: {type: Date, default: Date.now()}
});

var Activity = mongoose.model('Activity', activitySchema);