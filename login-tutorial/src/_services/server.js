const path = require('path');
//require mysql in node modules to use it
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'GoodEnough467!'
});

//module.exports = function(app, connection) {
//	app.get('/', function(req, res) {
		connection.query('SELECT * FROM `loginInfo`.users', (err, data) => {
			if(err) throw err;
			console.log('Data received fro Db:');
			console.log(rows);
		});
//	});
//}
