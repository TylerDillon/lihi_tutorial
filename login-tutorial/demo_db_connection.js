var mysql = require('mysql')

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "GoodEnough467!"
});

con.connect(function(err) {
	if(err) throw err;
	console.log("Connected!");
});
