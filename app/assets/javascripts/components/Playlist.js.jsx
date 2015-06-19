var Playlist = React.createClass({

  render: function () {
  	var url = window.location.href;
  	slug = url.split('/').pop();

 //  	var playlistElements = this.props.playlists.map(function(model){
	// 		return( <li key={model.id}>
	// 					<a href={model.get('name')}</a>
	// 				</li>)
	// });
    return (
      <div>
      <h1>Playlist {slug}</h1>
      </div>
    );
  }
});