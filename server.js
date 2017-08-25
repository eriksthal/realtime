// =======================
// get the packages we need ============
// =======================
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var morgan      = require('morgan');
var User   = require('./models/user');

var config = require('./config'); // get our config file

//Routes
var routes = require('./routes/routes');

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

app.get('/setup', function(req, res) {

    // create a sample user
    var nick = new User({
      email: 'erik.sthal@gmail.com',
      password: '1234'
    });

    // save the sample user
    nick.save(function(err) {
      if (err) throw err;

      console.log('User saved successfully');
      res.json({ success: true });
    });
  });

// apply the routes to our application with the prefix /api
app.use('/api', routes);

// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);