var UserModel = Backbone.Model.extend({
	defaults:{
		_id: '',
		email: null,
		password_digest: null,
		created_At: null,
		updated_At: null
	},
	idAttribute: '_id'
});