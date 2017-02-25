const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const session =require('express-session');

var app=express();

app.use(express.static(path.join(__dirname,'./client')))
app.use(bodyParser.json());

app.use(session({
	secret:'keyboard cat',
	resave:false,
	saveUninitialized:true
}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000,function(){
	console.log('app is running at 8000')
})
