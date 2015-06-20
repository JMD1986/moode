var SignUpModel = Backbone.Model.extend({
	defaults: {
		name: null,
		username: null,
		password: null,
		password2: null,
		email: null
	},
	validate: function(model){
		if(model.name === '' ){
		  console.log('Please enter a first name')
		}
		else if(model.email === ''){
			console.log('Please enter email')
		}
		else if(model.username === '' ){
		  console.log('Please enter username')
		}
		else if(model.password === ''){
		    console.log('Please enter password')
		}
		else if(model.password2 === ''){
			console.log('Please confirm password')
		}
		else{
		  console.log('Success')
		}
	}
})