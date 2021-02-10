var mysql = require('mysql');
var connection = mysql.createConnection({
	host: '127.0.0.1',
	port: '3306',
	user: 'root',
	password: '123456',
	database: 'o2'
});

connection.connect();

/*var sql = 'SELECT id, title FROM topic';
connection.query(sql, function (err, rows, fields) {
	if (err) {
		console.log(err);
	} else {
		for (var i = 0; i < rows.length; i++){
			console.log(rows[i].title);
		}
	}
});*/


/* var sql = 'INSERT INTO topic (title, description, author) VALUES(?, ?, ?) ';
var params = ['Supervisor', 'Watcher', 'JJ'];
connection.query(sql, params, function (err, rows, fields) {
	if (err) {
		console.log(err);
	} else {
		console.log(rows.insertID);
	}
});*/

/*var sql = 'UPDATE topic SET title=?, author=? WHERE id=?';
var params = ['NodeJS', 'Moon', 3];
connection.query(sql, params, function (err, rows, fields) {
	if (err) {
		console.log(err);
	} else {
		console.log(rows);
	}
});*/

var sql = 'DELETE FROM topic WHERE id=?';
var params = [1];
connection.query(sql, params, function (err, rows, fields) {
	if (err) {
		console.log(err);
	} else {
		console.log(rows);
	}
});
connection.end();