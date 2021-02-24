var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//var sessionn = require('express-session');
//var passport = require('./config/passport');
var app = express();
require('dotenv').config({ path: "variables.env" });

//DB setting
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

//mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;
db.once('open', function () {
	console.log('DB connected');
});
db.on('error', function (err) {
	console.log('DB ERROR : ', err);
});

// Other setting
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Routes
app.use('/', require('./routes/home'));
app.use('/posts', require('./routes/posts'));
app.use('/users', require('./routes/users'));

//// Session
//app.use(session({ secret: 'MySecret', resave: true, saveUninitialized: true }));

//// passport
//app.use(passport.initialize());
//app.use(passport.session());

//// Custom Middlewares
//app.use(function (req, res, next) {
//	res.locals.isAuthenticated = req.isAuthenticated();
//	res.locals.currentUser = req.user;
//	next();
//});

// Port setting
var port = 3000;
app.listen(port, function () {
	console.log('server on! http://localhost:' + port);
});