
var LoginModel = Backbone.Model.extend({
	defaults: {
		username: null,
		password: null,
		email: null
	},
	validate: function(model){
		if(model.username === null){
			return 'username empty '
		 }
		 else if(model.password === null){
		 	return 'password empty '
		 }
		 else{
		 	return 'Success'
		 }
	}
});
