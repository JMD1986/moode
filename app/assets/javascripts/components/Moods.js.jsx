var Moods = React.createClass({
	
	render: function(){
	var url = window.location.href;
  	slug = url.split('/').pop();

	
		return(
			<h1>Moods {slug}</h1>
		);
	}
})