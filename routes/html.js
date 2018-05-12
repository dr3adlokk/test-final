// var db = require("../models");
// Routes
// =============================================================
module.exports = function (app) {
  // home
  app.get('/', (req, res, next) => {
    res.render('home', {
      showTitle: true,
      helpers: {
        foo: function () {
          return 'foo.';
        }
      }
    });
  })
  app.get('/signup', (req, res) => {
    res.render('signup')
  })
  app.get('/login', (req, res) =>{
    res.render('login')
  } )
  app.get('/members', (req, res) => {
    res.render('members')
  })
  // about
  app.get('/about', (req, res) => {
    res.render('about')
  })

  // media
  app.get('/media', (req, res) => {
    res.render('media')
  })

  //merch
  app.get('/merch', (req, res) => {
    res.render('merch')
  })
  //tour
  app.get('/tour', (req, res) => {
    res.render('tour')
  })
  // contact
  app.get('/contact', (req, res) => {
    res.render('contact')
  })
};
