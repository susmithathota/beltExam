app.controller('bucketsController',function(sessionFactory,bucketsFactory){
	var self=this;
	sessionFactory.checkUser(function(data){
		self.cur_user=data;
	});
	self.addBucket=function(){
		self.errors=[];
		if(!self.newBucket || !self.newBucket.title){
			self.errors.push('please add title');
		}
		else if(!self.newBucket || !self.newBucket.description){
			self.errors.push('please add description');
		}
		else{
			self.newBucket.user=self.cur_user._id;
			bucketsFactory.addBucket(self.newBucket);
			
		}
	}
	
	function getBuckets(){
		bucketsFactory.getBuckets(function(data){
			self.bucketsList=data;
		})
	}
	getBuckets();

	self.changeStatus=function(bId,uId){
		bucketsFactory.changeStatus(bId,uId,function(data){
			if(data){
				getBuckets();
			}
		});
	}
})