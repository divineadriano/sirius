const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


var app = express();


app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', function(req, res) {
	res.render('pages/subscribe');
});

app.get('/subscribe', function(req, res) {
	res.render('pages/subscribe');
});

app.get('/sirius', function(req, res) {
	res.render('pages/sirius');
});

app.get('/SDK', function(req, res) {
	res.render('pages/SDK');
});

app.get('/docs', function(req, res) {
	res.render('pages/docs');
});

app.get('/bounty', function(req, res) {
	res.render('pages/bounty');
});

//kyc
app.get('/node-blockchain', function(req, res) {
	res.render('pages/node-blockchain');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))