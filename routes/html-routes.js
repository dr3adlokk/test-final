// Requiring path to so we can use relative routes to our HTML files
const express = require('express')
const hbs = require('express-handlebars')
const path = require("path");
var router = express.Router()
// var app = express()
// var adad = require('../views/login.hbs')
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");


    router.get("/signup", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "/login"));
    });

    router.get("/login", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("../views/members.hbs");
        }
        res.sendFile(path.join(__dirname, "/signup"));
    });

        router.get("/members", isAuthenticated, function (req, res) {
            res.sendFile(path.join(__dirname, "members"));
        });

  module.exports = router
    // app.get("../views/home.hbs", (req, res, next) => {
    //   res.render("home", {
    //     showTitle: true, 
    //     helpers: {
    //       foo: function () {
    //         return "foo.";
    //       }
    //     }
    //   });
    // })

    // app.get("../views/about.hbs", (req, res)=> {
    //   res.render("about")
    // })
    // app.get("../views/media.hbs", (req, res) => {
    //   res.render("media")
    // })
    // app.get("../views/merch.hbs", (req, res) => {
    //   res.render("merch")

    // }) 
    // app.get("../views/tour.hbs", (req, res) => {
    //   res.render("tour")
    // })
    // app.get("../views/contact.hbs", (req, res) => {
    //   res.render("contact")
    // }) 
    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
//     app.get("../views/home.hbs", isAuthenticated, function (req, res) {
//         res.sendFile(path.join(__dirname, "../public/assets/Cheshire_Kat - Blackmill - Let It Be (feat Veela).mp3"));
//     });

// };
// file pathto test song js
// "../public/assets/Cheshire_Kat - Blackmill - Let It Be (feat Veela).mp3"

// var db = require("../models");
// Routes
// // =============================================================
// module.exports = function (app) {
//   // home
//   app.get('/', (req, res, next) => {
//     res.render('home', {
//       showTitle: true,
//       helpers: {
//         foo: function () {
//           return 'foo.';
//         }
//       }
//     });
//   })
//   // about
//   app.get('/about', (req, res) => {
//     res.render('about')
//   })

//   // media
//   app.get('/media', (req, res) => {
//     res.render('media')
//   })

//   //merch
//   app.get('/merch', (req, res) => {
//     res.render('merch')
//   })
//   //tour
//   app.get('/tour', (req, res) => {
//     res.render('tour')
//   })
//   // contact
//   app.get('/contact', (req, res) => {
//     res.render('contact')
//   })
// };







// // Requiring path to so we can use relative routes to our HTML files
// var path = require("path");

// // Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated");

// module.exports = function(app) {

//   app.get("/", function(req, res) {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("../views/home.hbs");
//     }
//     res.sendFile(path.join(__dirname, "../public/signup.html"));
//   });

//   app.get("/login", function(req, res) {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/login.html"));
//   });

//   // Here we've add our isAuthenticated middleware to this route.
//   // If a user who is not logged in tries to access this route they will be redirected to the signup page
//   app.get("/members", isAuthenticated, function(req, res) {
//     res.sendFile(path.join(__dirname, "../views/home.hbs"));
//   });

// };
