
var Moods = React.createClass({

	getInitialState: function() {
          return {
            moodHolder: []  
          };
        },
    componentDidMount: function() {
      $.get( "http://localhost:3000/moods", function(models ) {
					if(this.isMounted()) {
							this.setState({
                   moodHolder: models
						  });
					}
  			}.bind(this));

    },

	render: function(){

<<<<<<< HEAD
	
		return(
			<h1>Moods {slug}</h1>
		);
	}
})
=======
  		moodlist =  this.state.moodHolder.map(function(model){
        return(
          <a key={model.id} href={'#playlist/'+ model.mood} className="mona-box">
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
>>>>>>> 2f7d1b47eabf2dfcd25c650b4f63d13afd2545c6
