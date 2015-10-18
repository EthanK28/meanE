module.exports = {
    // Development configuration options
    db: 'mongodb://localhost/mean-book',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: '1665795600322548',
        clientSecret: 'cab94c8559f6a0a3fa98951ac5f5a2ad',
        callbackURL: 'http:://localhost:3000/oauth/facebook/callback'
    }
};
