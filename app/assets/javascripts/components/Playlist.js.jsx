var Playlist = React.createClass({
<<<<<<< HEAD

  render: function () {
  	var url = window.location.href;
  	slug = url.split('/').pop();


=======
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
  	render: function () {
  			var url = window.location.href;
  			query = url.split('/').pop();
  			console.log(query);
  			playlistCategories = this.state.playlistCollection.map(function(model){
  			return(
  				<div className="mona-box" key={model.id} >
  				<a href={"#userplaylist/"+ model.title }><img src="http://1.bp.blogspot.com/-n4re1AOb5x0/U-WP0ppwr5I/AAAAAAAALhY/QgFS0Bmp6Ug/s1600/cute-wink-smiley.png" width="100" height="100"/></a>
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
  		})
>>>>>>> 2f7d1b47eabf2dfcd25c650b4f63d13afd2545c6
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