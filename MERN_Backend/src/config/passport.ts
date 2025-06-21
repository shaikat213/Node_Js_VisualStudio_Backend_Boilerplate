import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { UserService } from '../services/user.service';

const service = new UserService();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    callbackURL: "/users/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    let user = await service.findByEmail(profile.emails![0].value);
    if (!user) {
        user = await service.create({
            name: profile.displayName,
            email: profile.emails![0].value,
            googleId: profile.id
        });
    }
    done(null, user);
}));

passport.serializeUser((user: any, done) => done(null, user.id));
passport.deserializeUser(async (id: number, done) => {
    const user = await service.getById(id);
    done(null, user);
});
