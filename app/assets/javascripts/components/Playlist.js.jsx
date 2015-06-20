var Playlist = React.createClass({

  render: function () {
  	var url = window.location.href;
  	slug = url.split('/').pop();


    return (
      <div>
      <h1>Playlist {slug}</h1>
      </div>
    );
  }
});