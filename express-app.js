var express = require('express');
var app = express();
var pug = require('pug');
var hbs = require('express-handlebars');
app.engine('handlebars', hbs());

var groceries = [
	{
		storeName: 'Acme',
		list: ['strawberries','blueberries','yogurt']
	},{
		storeName: 'Corner Market',
    	list: ['baguette','basil','tomatoes']
    }
];

app.get('/ejs', function(req, res){
	res.render("list.ejs", {groceries:  groceries});
});

app.get('/pug', function(req, res){
	app.set('view engine', 'pug');
	res.render('list', {groceries: groceries});
});

app.get('/hbs', function(req, res){
	app.set('view engine', 'handlebars');
	res.render('list', {groceries:groceries});
});

app.listen(3000, function(){
	console.log('Example app listening');
});