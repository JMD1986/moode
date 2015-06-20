var CommentModel = Backbone.Model.extend({
	defaults:{
		_id: '',
		text: null,
		likes: null
	},
	idAttribute: '_id',
	urlRoot: ''
});