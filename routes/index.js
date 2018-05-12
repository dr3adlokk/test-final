var express = require('express');
var router = express.Router();
var path = require("path");
/* GET home page. */

var isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = function(app) {
  router.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    app.sendFile(path.join(__dirname, "../views/signup.hbs"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../views/login.hbs"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../views/members.hbs"));
  });

//   app.get("/about", (req, res) => {
//     res.render("about");
//   });

//   // media
//   router.get("/media", (req, res) => {
//     res.render("media");
//   });

//   //merch
//   app.get("/merch", (req, res) => {
//     res.render("merch");
//   });
//   //tour
//   app.get("/tour", (req, res) => {
//     res.render("tour");
//   });
//   // contact
//   app.get("/contact", (req, res) => {
//     res.render("contact");
//   });
// };
// };  
// module.exports = function(app) {
//   app.get("/", function(req, res) {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/members");
//     }
//     app.sendFile(path.join(__dirname, "../views/signup.hbs"));
//   });

//   app.get("/login", function(req, res) {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../views/login.hbs"));
//   });

//   // Here we've add our isAuthenticated middleware to this route.
//   // If a user who is not logged in tries to access this route they will be redirected to the signup page
//   app.get("/members", isAuthenticated, function(req, res) {
//     res.sendFile(path.join(__dirname, "../views/members.hbs"));
//   });
// };  



