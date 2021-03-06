var passport = require('passport'),
                url = require('url'),
                FacebookStrategy = require('passport-facebook').Strategy,
                config = require('../config'),
                users = require('../../app/controllers/users.server.controller');

module.exports = function() {
    passport.use(new FacebookStrategy({

    },
    function(req, accessToken, refreshToken, profile, done) {
            var providerData = profile._json;
            providerData.accessToken = accessToken;
            providerData.refreshToken = refreshToken;

            var providerUserProfile = {
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                fullName: profile.emails[0].value,
                username: profile.username,
                provider: 'facebook',
                providerId: profile.id,
                providerData: providerData
            };

            users.saveOAuthUserProfile (req, providerUserProfile, done);
    }));
};
