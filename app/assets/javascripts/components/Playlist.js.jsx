var Playlist = React.createClass({

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
  	render: function () {
  			var url = window.location.href;
  			var query = url.split('/').pop();
  		
  			playlistCategories = this.state.playlistCollection.map(function(model){
  					
  						var string = model.mood_id +'';
	  					
	  				if(string === query)
	  				{
	  					console.log('match');
	  					return(
			  				<div className="mona-box" key={model.id}>
			  				<a href={"#userplaylist/"+ model.title }><img src="model.url" width="100" height="100"/></a>
			  					<a href={"#userplaylist/"+ model.title } >
			  						<div  >
			  							<span>{model.title}</span>
			  						</div>
			  					</a>
			  					<a href={"#profile/" + model.user}>
			  						<div>{model.user}</div>
			  					</a>
			  				</div>
  						);
	  				}
				

  		})

    return (
      <div>
      	<h1>Playlist Channel</h1>
      	{playlistCategories}
      </div>
    );
  },
  nav: function(e){
  

  }
});