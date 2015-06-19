var Profile = React.createClass({
    render: function () {
    var url = window.location.href;
  	slug = url.split('/').pop();
        return (
          <div>
            <h1> {slug} Profile </h1>
          </div>
        );
    }
});
