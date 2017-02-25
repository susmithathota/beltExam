app.factory('sessionFactory',function($location,$http){
	var factory={};
	factory.login=function(user){
		$http.post('/login',user).then(function(output){
			if(output){
				$location.url('/dashboard');
			}
		})	
	}
	factory.checkUser=function(cb){
		$http.get('/checkUser').then(function(output){
			if(!output.data){
				$location.url('/login');
			}
			else{
				cb(output.data);
			}
		})
	}
	factory.getUsers=function(cb){
		$http.get('/getUsers').then(function(output){
			cb(output.data);
		})
	}
	factory.showUser=function(id,cb){
		$http.get('/show/user/'+id).then(function(output){
			cb(output.data);
		})
	}
	// factory.getCurUser=function(id,cb){
	// 	$http.get('/getCurUser/'+id).then(function(output){
	// 		cb(output.data);
	// 	})
	// }
	return factory;
})