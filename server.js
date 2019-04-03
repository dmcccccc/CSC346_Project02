"use strict";

// use module
(function() {
	// require express
	const express = require("express");
	const app = express();
	
	// require fs
	const fs = require("fs");
	
	// require body-parser
	const bodyParser = require("body-parser");
	const jsonParser = bodyParser.json();
	
	// require mysql
	const mysql = require("mysql");

	var con = mysql.createConnection({
		host: "csc346-proj2-mysql.cwe4i3ncevoq.us-east-1.rds.amazonaws.com",
		user: "yanglu1213",
		password: "csc346proj2",
		database: "innodb"
	});

	// check connection
	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
	});


	// set custom parameter
	app.use(function(req, res, next) { 
		res.header("Access-Control-Allow-Origin", "*"); 
		res.header("Access-Control-Allow-Headers",
					"Origin, X-Requested-With, Content-Type, Accept");
		next();
	});
	
	// set public access
//	app.use(express.static("public"));
	
	// post request post will store comments into a file called 
	// messages.txt and reply that if it is stored successfully
	app.post('/', jsonParser, function(req, res) { 
		res.header("Access-Control-Allow-Origin", "*");
		// write the name and comment to message.txt
		res.send("TODO: implement post");
	});

	app.use(express.static("."));

	// get request get will read all comments from a file called 
	// messages.txt and sent it back to the client
	app.get('/', function(req, res){ 
		res.header("Access-Control-Allow-Origin", "*");
		const command = req.query.command;
		// Only 1 case exist right now
		switch(command){
			// get all comment and sent it back as JSON
			case "query": {
				const username = req.query.username;
				const password = req.query.password;
				const query = 'SELECT * FROM user WHERE username = \'' + username + '\'';
				console.log("query = " + query);
				con.query(query, function (err, result, fields) {
					if (err) throw err;
					console.log(result);
					console.log(result[0].pw.length);
					console.log(password.length);
					if (result[0].pw == password){
						res.send("success");
					} else {
						res.send("fail");
					}
				});
				break;
			}
			default: {
				res.sendFile("./login.html", {root: __dirname});
				break;
			}
		}
	});

	module.exports = con;

	app.listen(3000);
})();
