app.controller('sessionController',function(sessionFactory, $routeParams){
	var self=this;
	self.login=function(){
		self.errors=[];
		if(!self.logReg || !self.logReg.name){
			self.errors.push('Please enter name');
		}
		else if(self.logReg.name.length<3){
			self.errors.push('name should be atleast 3 chars');
		}
		else{
			sessionFactory.login(self.logReg);
		}
		
	}
	sessionFactory.checkUser(function(data){
		if(data){
			self.cur_user=data;
		}
	})
	function getUsers(){
		sessionFactory.getUsers(function(data){
			self.usersList=data;
		})
	}
	getUsers();

	if($routeParams.id){
		sessionFactory.showUser($routeParams.id,function(data){
			self.showUser=data;
		})
	}

})