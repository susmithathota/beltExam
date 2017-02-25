var mongoose=require('mongoose');
var User= mongoose.model('User');

module.exports=(function(){
	return{
		getUsers:function(req,res){
			User.find({})
			.populate('buckets')
			.exec(function(err,result){
				if(err) console.log(err)
				else{
					res.json(result);
				}
			})
		},
		showUser:function(req,res){
			User.findOne({_id:req.params.id})
			.populate('buckets')
			.exec(function(err,result){
				if(err) console.log(err)
				else{
					res.json(result);
				}
			})
		},
		getCurUser:function(req,res){
			User.findOne({_id:req.params.id})
			.populate('buckets')
			.exec(function(err,result){
				if(err) console.log(err)
				else{
					res.json(result);
				}
			})
		}
	}
})()