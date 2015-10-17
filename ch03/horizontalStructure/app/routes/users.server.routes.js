var users = require('../../app/controllers/users.server.controller'),
    passport = require('passport');

module.exports = function(app) {

    app.route('/signup')
        .get(users.renderSignup)
        .post(users.signup);
    app.routes('/signin')
        .get(users.renderSignin)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureReidrect: '/signin',
            failureFalsh: true
        }));

    app.get('/signout', users.signout);
    // app.route('/users')
    //     .post(users.create)
    //     .get(users.list);
    //
    // app.route('/users/:userId')
    //     .get(users.read)
    //     .put(users.update)
    //     .delete(users.delete);
    //
    // app.param('userId', users.userByID);
};
