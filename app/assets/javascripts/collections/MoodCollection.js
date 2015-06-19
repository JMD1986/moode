var MoodCollection = Backbone.Collection.extend({
	model: MoodModel,
	url: 'http://localhost:3000/moods'
})