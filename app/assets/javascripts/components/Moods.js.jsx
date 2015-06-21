
var Moods = React.createClass({

	getInitialState: function() {
          return {
            moodHolder: []  
          };
        },
    componentDidMount: function() {
      $.get( "/moods", function(models ) {
					if(this.isMounted()) {
							this.setState({
                   moodHolder: models
						  });
					}
  			}.bind(this));

    },

	render: function(){

  		moodlist =  this.state.moodHolder.map(function(model){
        return(
          <a key={model.id} href={'#playlist/'+ model.id} className="mona-box">
              <div >
                  <div >
                      {model.mood}
                  </div>
              </div>
          </a>
        );
  		})
  	 	return(
            <div>
                <h1>How are you feeling?</h1>
      	 				<div >
      	 					{moodlist}
      	 				</div>
            </div>
  	 	)
  },
  onClick: function(e){
    e.preventDefault();
    var query = e.target.innerText
    // app.navigate('#moods/' +query, {trigger: true});
  },

})

