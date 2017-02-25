var mongoose=require('mongoose');
var User= mongoose.model('User');

module.exports=(function(){
	return {
		login: function(req,res){
			User.findOne({name:req.body.name},function(err,user){
				if(err) console.log(err)
				else{
					if(!user){
						var newUser= new User(req.body);
						newUser.save(function(err){
							if(err) console.log(save);
							else{
								req.session.user=newUser;
								req.session.save();
								console.log('saved first');
								res.json({status:true});
							}
						})
					}
					else{
						req.session.user=user;
						req.session.save();
						console.log('saved second');
						res.json({status:true});
					}
				}
			})
		},
		checkUser:function(req,res){
			if(!req.session || !req.session.user ){
				res.json(null)
			}
			else{
				res.json(req.session.user);
			}
		},
		logout:function(req,res){
			req.session.destroy();
			res.redirect('/');
		}
	}
})()