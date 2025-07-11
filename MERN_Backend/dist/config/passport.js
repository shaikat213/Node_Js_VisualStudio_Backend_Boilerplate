"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const user_service_1 = require("../services/user.service");
const service = new user_service_1.UserService();
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    callbackURL: "/users/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    let user = await service.findByEmail(profile.emails[0].value);
    if (!user) {
        user = await service.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id
        });
    }
    done(null, user);
}));
passport_1.default.serializeUser((user, done) => done(null, user.id));
passport_1.default.deserializeUser(async (id, done) => {
    const user = await service.getById(id);
    done(null, user);
});
