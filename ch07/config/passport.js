var passport = require('passport'),
    mongoose = require('mongoose');
module.exports = function() {
  var User = mongoose.model('User');

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // _id만 얻고 다른정보는 얻고 싶지 않을때 쓰는 방법
  passport.deserializeUser(function(id, done) {
    User.findOne({
      _id: id
    }, '-password -salt', function(err, user) {
      done(err, user);
    });
  });
  require('./strategies/local.js')();
  require('./strategies/facebook.js')();
};
