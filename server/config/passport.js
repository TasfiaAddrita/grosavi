const User = require("../models/User");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser(User.serializeUser()); // invoke authentication, serialize user instance, and store it in session via cookie
passport.deserializeUser(User.deserializeUser()); // invoke subsequent request to deserialize instance and provide unique cookie identifier as "credential"

passport.use('local-signup', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
  }, 
  function(req, email, password, done) {
    User.findOne({ 'email':  email }, function(err, user) {
      if (err)
        return done(err);

      if (user) {
        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
      } 
      else {
        const newUser = new User(req.body);
        // console.log(newUser)
        // let newUser = new User();
        // newUser.email = email;
        newUser.password = newUser.generateHash(password);
        newUser.save(function(err) {
          if (err)
            throw err;
          return done(null, newUser);
        });
      }
    })
  })
);