var mongoose=require('mongoose');
var User= mongoose.model('User');
var Bucket=mongoose.model('Bucket');

module.exports=(function(){
	return{
		addBucket:function(req,res){
			    var newBucket= new Bucket(req.body);
				User.findOne({_id:req.body.user},function(err,user){
					if(err) console.log(err)
					else{
						newBucket.user=user._id;
						newBucket.save(function(err){
							if(err) console.log(err)
							else{
								user.buckets.push(newBucket);
								user.save(function(err){
									if(err) console.log(err)
									else{
										console.log('saved user');
									}
								})
							}
						})
					}
				})
				if(req.body.taggedUser && req.body.taggedUser!==req.body.user){
					User.findOne({_id:req.body.taggedUser._id},function(err,taggedUser){
						if(err) console.log(err)
						else{
							newBucket.taggedUser=taggedUser._id;
							newBucket.save(function(err){
								if(err) console.log(err)
								else{
									taggedUser.buckets.push(newBucket);
									taggedUser.save(function(err){
										if(err) console.log(err)
										else{
											console.log('saved tagged user');
											res.json({status:true})
										}
									})
								}
							})
						}
						
					})
				}
			},

			getBuckets:function(req,res){
				Bucket.find({})
				.populate('user')
				.exec(function(err,result){
					if(err) console.log(err)
					else{
						res.json(result);
					}
 				}) 
			},

			changeStatus: function(req,res){
				res.json(req.params);
				// Bucket.findOne({_id:req.params.bId},function(err,bucket){
				// 	if(err) console.log(err)
				// 	else{
				// 		if(bucket.status==='pending'){
				// 			bucket.status='done';
				// 		}
				// 		else if(bucket.status==='done'){
				// 			bucket.status='pending';
				// 		}
				// 		bucket.save(function(err){
				// 			if(err) console.log(err)
				// 			else{
				// 				User.findOne({_id:req.params.uId},function(err,user){
				// 					user.buckets[bucket._id].status=bucket.status;
				// 					user.save(function(err){
				// 						if(err) console.log(err)
				// 						else{
				// 							res.json({status:true});
				// 						}
				// 					})
				// 				})
				// 			}
				// 		})
				// 	}

				// })
			}
		}
})()