var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');	//file system
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.locals.pretty = true;
app.set('views', '../views_file');
app.set('view engine', 'jade');
app.get('/topic/new', function (req, res) {
	fs.readdir('../data', function (err, files) {
		if (err) {
			console.log(err);
			res.status(50).send('Internal Server Error');
		}
		res.render('new', { topics: files });
	});
});			//new.jade

app.get(['/topic', '/topic/:id'], function (req, res) {
	fs.readdir('../data', function (err, files) {
		if (err) {
			console.log(err);
			res.status(50).send('Internal Server Error');
		}
		var id = req.params.id;

		if (id) {
			// topic/:id
			fs.readFile('../data/' + id, 'utf8', function (err, data) {
				if (err) {
					console.log(err);
					res.status(500).send('Internal Server Error');
				}
				res.render('view', { topics: files, title: id, description: data });
			})
		}
		else {
				// /topic
				res.render('view', { topics: files, title: 'welcome', description:'Hello JS' });
			}
	})
});
app.post('/topic', function (req, res) {
	var title = req.body.title;
	var description = req.body.description;
	fs.writeFile('../data/' + title, description, function (err) {
		if (err) {
			console.log(err);
			res.status(500).send('Internal Server Error');
		}
		res.redirect('/topic/'+title);
	});
});

app.listen(3000, function () {
	console.log('Connected, 3000 port!');
});
