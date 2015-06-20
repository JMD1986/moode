
var LoginModel = Backbone.Model.extend({
	defaults: {
		username: null,
		password: null,
		password2: null,
		email: null
	},
	validate: function(model){
		if(model.username === '' ){
		  console.log('Please enter username')
		}
		else if(model.password === ''){
		    console.log('Please enter password')
		}
		else if(model.password2 === ''){
			console.log('Please confirmation password')
		}
		else{
		  console.log('Success')
		}
	
	}
});
