var Moods = React.createClass({
	
	render: function(){
	var url = window.location.href;
  	slug = url.split('/').pop();

	var moodElements = this.props.moods.map(function(model){
			return( <li key={model.id}>
						<a href={model.get('name')}</a>
					</li>)
		});
		return(
			<h1>Moods {slug}</h1>
		);
	}
})