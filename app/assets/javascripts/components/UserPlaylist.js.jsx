var UserPlaylist = React.createClass({

	render: function (){
		var url = window.location.href;
  		slug = url.split('/').pop();
		return(
			<h1>UserPlaylist {slug} Playlist</h1>
		);
	}

})