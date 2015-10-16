var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
// Mongo Validation
// http://mongoosejs.com/docs/validation.html 참고

// Middleware
// http://mongoosejs.com/docs/middleware.html

// DBRefs
// http://mongoosejs.com/docs/populate.html.

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        index: true,
        match: /.+\@.+\..+/
    },
    website: {
        type: String,
        get: function(url) {
            if(!url) {
                return url;
            } else {
                if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
                    url == 'http://' +url;
                }
                return url;
            }

        }
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        validate: [
            function(password) {
                return password.length >= 6;
            },
            'Password should be longer'
        ]
    },
    role: {
        type: String,
        enum: ['Admin', 'Owner', 'User']
    },
    created: {
        type: Date,
        default: Date.now
    }
});

UserSchema.statics.findOneByUsername = function (username, callback) {
    this.findOne({ username: new RegExp)username, 'i'}), callback);
};

UserSchema.methods.authenticate = function(password) {
  return this.password === password;
};

UserSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName;
}).set(function(fullName){
    var spiltName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

UserSchema.set('toJson', { getters: true, virtuals: true });

// Premiddleware
// UserSchema.pre('save', function(next) {
//
// });

// Postmiddleware

mongoose.model('User', UserSchema);
