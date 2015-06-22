var Playlist = React.createClass({

	getInitialState: function(){
		return{
			playlistCollection: []
			
		}
	},
	componentDidMount: function(){
		var url = window.location.href;
  		var query = url.split('/').pop();
		$.get('/moods/'+query, function(models){
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

	  						<div  key={model.id} className="grid-holder">
	  						<div className="img-grid-wrapper">
			  				<div className="mona-box2">
			  				<a className="playlist-users" href={"#userplaylist/"+ model.title }><img src="" width="100" height="100"/></a>
			  					<a href={"#profile/" + model.user}>
			  						<div>{model.user}</div>
			  					</a>
			  					<a href={"#userplaylist/"+ model.title } >
			  						<div  >
			  							<span>{model.title}</span>
			  						</div>
			  					</a>
			  				
			  				</div>
			  				</div>
			  				</div>
  						);
	  				}
				

  		})

    return (
      <div>
      	<div className="login-header">
      		<h1>Playlist Channel</h1>
      	</div>
      	{playlistCategories}
      </div>
    );
  },
  nav: function(e){
  

  }
});