var mongoose = require('mongoose');

var activitySchema = mongoose.Schema({
    userId: String,
    body: String,
    date: {type: Date, default: Date.now()}
});

var Activity = mongoose.model('Activity', activitySchema);