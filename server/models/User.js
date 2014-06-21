var mongoose = require('mongoose'),
    encryption = require('../utilities/encryption');

var post = mongoose.Schema({
    date: {type: Date, default: Date.now()},
    body: {type: String}
});

var userSchema = mongoose.Schema({
    username: {type: String, require: '{PATH} is required' , unique: true},
    firstName: {type: String, require: '{PATH} is required'},
    lastName: {type: String, require: '{PATH} is required'},
    profilePic: {type: String, default: 'imgs/default.jpg'},
    activity: {type: [post], default: [{body: 'LinkMe is an awesome site!!'}]},
    salt: String,
    hashPass: String,
    roles: [String]
});

userSchema.method({
    authenticate: function(password){
        if(encryption.generateHashedPassword(this.salt, password) === this.hashPass){
            return true;
        }
        else {
            return false;
        }
    }
})

var User = mongoose.model('User', userSchema);

module.exports.seedInitialUsers = function(){
    User.find({}).exec(function (err, collection) {
        if (err) {
            console.log('Cannot find users: ' + err);
            return;
        }

        if (collection.length == 0) {
            var salt;
            var hashedPwd;

            salt = encryption.generateSalt();
            hashedPwd = encryption.generateHashedPassword(salt, 'Teodor');
            User.create({username: 'DareDev1l', firstName: 'Teodor', lastName: 'Hanev',salt:salt, hashPass: hashedPwd, roles: ['admin'] });

            salt = encryption.generateSalt();
            hashedPwd = encryption.generateHashedPassword(salt, 'Radoslav');
            User.create({username: 'Rado.IT', firstName: 'Radoslav', lastName: 'Radkov',salt:salt, hashPass: hashedPwd, roles:['standard'] });

            salt = encryption.generateSalt();
            hashedPwd = encryption.generateHashedPassword(salt, 'Krasi');
            User.create({username: 'Gabana', firstName: 'Krasi', lastName: 'Getoff',salt:salt, hashPass: hashedPwd });

            console.log('Users added to database...');
        }
    });
}