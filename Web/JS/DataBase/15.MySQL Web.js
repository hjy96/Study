var mysql = require('mysql');
var connection = mysql.createConnection({
	host: '127.0.0.1',
	port: '3306',
	user: 'root',
	password: '123456',
	database: 'o2'
});

connection.connect();

var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');	//file system
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.locals.pretty = true;
app.set('views', '../views_mysql');
app.set('view engine', 'jade');


app.get('/topic/add', function (req, res) {
	var sql = 'SELECT id, title FROM topic';
	connection.query(sql, function (err, topics, fields) {
		if (err) {
			console.log(err);
			res.status(500).send('Internal Server Error');
		}
		res.render('add', { topics: topics });
	});
});			//add.jade move to /topic/add 

app.post('/topic/add', function (req, res) {
	var title = req.body.title;
	var description = req.body.description;
	var author = req.body.author;
	var sql = 'INSERT INTO topic (title, description, author) VALUES(?, ?, ?)';
	connection.query(sql, [title, description, author], function (err, result, fields) {
		if (err) {
			console.log(err);
			res.status(500).send('Internal Server Error');
		} else {
			res.redirect('/topic/' + result.insertId);
		}
	});	
});		// print DB infomation at site & INSERT

app.get(['/topic/:id/edit'], function (req, res) {
	var sql = 'SELECT id, title FROM topic';
	connection.query(sql, function (err, topics, fields) {
		var id = req.params.id;		
		if (id) {
			var sql = 'SELECT * FROM topic WHERE id=?';
			connection.query(sql, [id], function (err, topic, fields) {
				if (err) {
					console.log(err);
					res.status(500).send('Internal Server Error');
				} else {
					res.render('edit', { topics: topics, topic: topic[0] });// File system -->> Data Base
				}
			});
		} else {
			console.log('There is no id');
			res.status(500).send('Internal Server Error');
		}
	});
});	

app.post(['/topic/:id/edit'], function (req, res) {
	var title = req.body.title;
	var description = req.body.description;
	var author = req.body.author;
	var id = req.params.id;
	var sql = 'UPDATE topic SET title=?, description=?, author=? WHERE id=?';
	connection.query(sql, [title, description, author, id], function (err, result, fields) {
		if (err) {
			console.log(err);
			res.status(500).send('Internal Server Error');
		} else {
			res.redirect('/topic/'+id);
		}
	});
});	//UPDATE router

app.get('/topic/:id/delete', function (req, res) {
	var sql = 'SELETE id, title FROM topic';
	var id = req.params.id;
	connection.query(sql, function (err, topics, fields) {
		var sql = 'SELECT * FROM topic WHERE id=?';
		connection.query(sql, [id], function (err, topic) {
			if (err) {
				console.log(err);
				res.status(500).send('Internal Server Error');
			} else {
				if (topic.length === 0) {
					console.log('There is no record.');
					res.status(500).send('Internal Server Error');
				} else {
					res.render('delete', { topics: topics, topic:topic[0] });
				}
			}
		});
	});
});

app.post('/topic/:id/delete', function (req, res) {
	var id = req.params.id;
	var sql = 'DELETE FROM topic WHERE id=?';
	connection.query(sql, [id], function (err, result) {
		res.redirect('/topic/');
	})
})


app.get(['/topic', '/topic/:id'], function (req, res) {
	var sql = 'SELECT id, title FROM topic';
	connection.query(sql, function (err, topics, fields) {
		var id = req.params.id;							
		if (id) {
			var sql = 'SELECT * FROM topic WHERE id=?';
			connection.query(sql, [id], function (err, topic, fields) {
				if (err) {
					console.log(err);
					res.status(500).send('Internal Server Error');
				} else {
					res.render('view_db',{ topics: topics, topic: topic[0] });// File system -->> Data Base
				}
			});
		} else {
			res.render('view_db', { topics: topics });
		}
	});
}); // main page print & DB rows print



app.listen(3000, function () {
	console.log('Connected, 3000 port!');
});