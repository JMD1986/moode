
var LoginModel = Backbone.Model.extend({
	defaults: {
		name: null,
		password: null,
	},
	validate: function(model){
		if(model.name === '' ){
		  console.log('Please enter username')
		}
		else if(model.password === ''){
		    console.log('Please enter password')
		}
		else{
		  console.log('Success')
		}
	
	}
});
