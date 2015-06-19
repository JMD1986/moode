var PlaylistModel = Backbone.Model.extend({
	defaults:{
		_id: '',
		user: null,
		title: null,
		mood_id: null,
		created_At: null,
		updated_At: null
	},
	idAttribute: '_id',
	urlRoot: ''
});