const path = require('path');
//require mysql in node modules to use it
const mysql = require('mysql');
const http = require('http');
const express = require('express');

const app = express();


const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'GoodEnough467!'
});

app.get('/', function(req, res) {
	connection.query('SELECT * FROM `loginInfo`.users', (err, data) => {
		if(err) throw err;
		console.log('Data received fro Db:');
		console.log(rows);
	});
});

app.listen(3001, () => {
	console.log('server is listening on port 3001');
}
