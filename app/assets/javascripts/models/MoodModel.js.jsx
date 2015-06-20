var MoodModel = Backbone.Model.extend({
	defaults: {
		mood: null,
		_id:''
	},
	idAttribute: '_id',
	urlRoot: 'http://localhost:3000/moods'
})