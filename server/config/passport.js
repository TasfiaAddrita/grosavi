const User = require("../models/User");
const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;

passport.use(User.createStrategy()); // set up strategy via passport-local-mongoose
passport.serializeUser(User.serializeUser()); // invoke authentication, serialize user instance, and store it in session via cookie
passport.deserializeUser(User.deserializeUser()); // invoke subsequent request to deserialize instance and provide unique cookie identifier as "credential"


// auth.js code

// router.post("/signup", passport.authenticate("local-signup", {
//   successRedirect: "/api",
//   failureRedirect: "/api/fail",
//   failureFlash: true
// }));

// router.post("/login", passport.authenticate("local", {
//     successRedirect: "/api",
//     failureRedirect: "/login",
//     failureFlash: true
//   })
// )

// router.post("/login", (req, res, next) => {
//   passport.authenticate("local", (err, user, info) => {
//     if (err) {
//       return next(err);
//     }
//     if (!user) {
//       console.log(info)
//       return res.redirect("/login?=info" + info);
//     }
//     req.logIn(user, function (err) {
//       if (err) {
//         return next(err);
//       }
//       console.log("User logged in!");
//       return res.redirect("/");
//     });
//   })(req, res, next);
// })

// Credit to Stamos from Stack Overflow
// https://stackoverflow.com/a/47457234/12049271
// passport.use("local-signup", new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
  //   usernameField: "email",
  //   passwordField: "password",
  //   passReqToCallback: true // allows us to pass back the entire request to the callback
  // }, 
  // function(req, email, password, done) {
    // check if user exists in db
    // User.findOne({ 'email':  email }, function(err, user) {
    //   if (err)
    //     return done(err);

    //   if (user) {
    //     return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
    //   } 
    //   else {
    //     const newUser = new User(req.body);
    //     // console.log(newUser)
    //     // let newUser = new User();
    //     // newUser.email = email;
    //     newUser.password = newUser.generateHash(password);
    //     newUser.save(function(err) {
    //       if (err)
    //         throw err;
    //       return done(null, newUser);
    //     });
    //   }
    // })
//     newUser = new User({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email
//     });
//     // newUser.username = newUser.email
//     User.register(newUser, password, function (err) {
//       if (err) {
//         console.log("Error occured while registering new user.", err);
//         return done(err);
//       }
//       console.log("User registered!")
//       // res.redirect("/");
//       return done(newUser);
//     })
//   })
// );

// passport.use("local-login", new LocalStrategy({
//   usernameField: 'email',
//   passwordField: 'password',
//   passReqToCallback: true
//   },
//   function(req, email, password, done) {

//   }
// ))