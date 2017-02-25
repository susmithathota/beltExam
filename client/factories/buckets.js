app.factory('bucketsFactory',function($http,$location){
	var factory={};
	factory.addBucket=function(bucket){
		$http.post('/addBucket',bucket).then(function(output){
			$location.url('/dashboard');
		})
	}
	factory.getBuckets=function(cb){
		$http.get('/bucketslist',function(output){
			cb(output.data);
		})
	}

	factory.changeStatus=function(bId,uId,cb){
		$http.post('/changeStatus/'+ bId+ '/'+uId).then(function(output){
			cb(output.data);
		})
	}
	return factory;
})