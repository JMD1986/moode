var Moods = React.createClass({
	getInitialState: function() {
          return {
            moodHolder: []
          };
  },
  componentWillUnmount: function() {
      // window.removeEventListener("popstate", this.fadeIn);
      // window.removeEventListener('hashchange', this.fadeIn);
     // window.removeEventListener('load', this.fadeIn);
  },
  componentDidMount: function() {
      $.get( "/moods", function(models ) {
					if(this.isMounted()) {
							this.setState({
                   moodHolder: models
						  });
					}
  			}.bind(this));
    // window.addEventListener('hashchange', this.fadeIn);
    //  window.addEventListener("onpushstate", this.fadeIn);
  },
	render: function(){
      var divStyle = {
          display: 'none'
      }
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
            <div  >
                <h1>How are you feeling?</h1>
      	 				<div  ref="moods"  >
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
  fadeIn: function(e){
     $(this.refs.moods.getDOMNode()).fadeIn('15000');
   }

})

