var session=require('../controllers/session.js');
var users=require('../controllers/users.js');
var buckets=require('../controllers/buckets.js');


module.exports=function(app){
	app.post('/login',function(req,res){
		session.login(req,res);
	})
	app.get('/checkUser',function(req,res){
		session.checkUser(req,res);
	})
	app.get('/logout',function(req,res){
		session.logout(req,res);
	})
	app.get('/getUsers',function(req,res){
		users.getUsers(req,res);
	})
	app.post('/addBucket',function(req,res){
		buckets.addBucket(req,res);
	})
	app.get('/bucketslist',function(req,res){
		buckets.getBuckets(req,res);
	})
	app.get('/show/user/:id',function(req,res){
		users.showUser(req,res);
	})
	app.post('/changeStatus/:bId/:uId',function(req,res){
		buckets.changeStatus(req,res);
	})
}
