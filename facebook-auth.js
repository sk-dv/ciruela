import passport from 'passport'
import { Strategy } from 'passport-facebook'

const options = {
    clientID: process.env.APP_ID,
    clientSecret: process.env.APP_SECRET,
    callbackURL: "http://localhost:8585/auth/callback"
}

const verify = (accessToken, refreshToken, profile, cb) => {
    User.findOrCreate({ facebookId: profile.id }, (err, user) => {
        return cb(err, user);
    });
}

passport.use(new Strategy(options, verify));