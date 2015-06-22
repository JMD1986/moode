var UserPlaylist = React.createClass({
	getInitialState: function(){
		return{
			playlistCollection: []
		}
	},
	componentDidMount: function(){
		$.get('/playlists', function(models){
				if(this.isMounted()){
					this.setState({
						playlistCollection: models
					});			
				}
		}.bind(this));
	},
	render: function (){
  			var url = window.location.href;
  			var query = url.split('/').pop();

		playlists = this.state.playlistCollection.map(function(model){

			if(query === model.title){
				return(
					<div className="soundcloud-playlist" key={model.id}><iframe id="sc-widget" src={'https://w.soundcloud.com/player/?url='+model.url+'&visual=false&color=C63D0F'} width="100%" height="465" scrolling="no" frameBorder="no"></iframe></div>
					)
			}
		});
			
		return(
			<div>
				<div className="login-header" >
					<h1>User Playlist</h1>
				</div>
				
				<div className="playlist-holder">
				{playlists}	
				</div>

				
			</div>
		);
	}

})