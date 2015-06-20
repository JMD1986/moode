var UserPlaylist = React.createClass({
	getInitialState: function(){
		return{
			playlistCollection: []
		}
	},
	componentDidMount: function(){
		$.get('http://localhost:3000/playlists', function(models){
				if(this.isMounted()){
					this.setState({
						playlistCollection: models
					});			
				}
		}.bind(this));
	},
	render: function (){
		// var url = window.location.href;
  // 		slug = url.split('/').pop();
		playlists = this.state.playlistCollection.map(function(model){
			return(
				<div key={model.id}><iframe id="sc-widget" src={'https://w.soundcloud.com/player/?url='+model.url} width="400" height="465" scrolling="no" frameBorder="no"></iframe></div>
				)
		});

		return(
			<div>
			<div></div>
			<h1>User Playlist</h1>

				{playlists}	
				
			</div>
		);
	}

})