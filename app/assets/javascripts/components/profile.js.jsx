var Profile = React.createClass({
	getInitialState: function(){
		return{
			userCollection: []
		}
	},
	componentDidMount: function(){
		$.get('/users', function(models){
				if(this.isMounted()){
					this.setState({
						userCollection: models
					});			
				}
		}.bind(this));
	},
    render: function () {  	

	
    		var url = window.location.href;
  			var query = url.split('/').pop();

					console.log(query);
  		
  			userImages = this.state.userCollection.map(function(model){
  				var string = model.name +'';
					
				if(model.name === query)
					{

						console.log(model.imageurl);
						return(
								<div key={model.id}><img src={model.imageurl}/></div>
							)
					}				
	  		}) 
	 	
        return (
          <div>
          <div className="profile-container .col12">

  			<div className="login-header .col12">
    			<h1>Mood Profile</h1>
  			</div>

  			<div className="picture-container">
  				{userImages}
	  			</div>

	  			<div className="bottom-container">
	  			<div className="bottom-left-container">
		  			<article>
		  			<h3>Email: Email@gmail.com</h3>
		  			<h4>User Bio</h4>
		  			<br/>
		  			<p>Authentic messenger bag mlkshk narwhal, banh mi locavore XOXO Schlitz. Pork belly chambray wayfarers health goth gentrify Wes Anderson. Aesthetic fanny pack drinking vinegar kogi, cardigan brunch swag DIY bitters kitsch polaroid Wes Anderson. Readymade Blue Bottle wolf Etsy, chambray lumbersexual organic yr. Paleo messenger bag PBR&B, sustainable chia skateboard fanny pack fashion axe gluten-free bespoke. Flannel kitsch mustache disrupt, keffiyeh Kickstarter PBR&B gentrify tofu you probably haven't 
		  			heard of them High Life. Aesthetic master cleanse try-hard food truck Schlitz.</p><br/>
		  			<p>Salvia gastropub street art, drinking vinegar squid Kickstarter sustainable forage. Locavore ethical 8-bit wayfarers. Chia Blue Bottle Tumblr banh mi, taxidermy narwhal cray. Photo booth small batch DIY skateboard, bitters Helvetica sustainable Banksy. 
		  			Quinoa ethical try-hard Tumblr Bushwick. Gastropub post-ironic cronut Thundercats, street art 3 wolf moon chillwave Truffaut. Asymmetrical hoodie Portland, single-origin coffee cliche tattooed normcore you probably haven't heard of them chambray mumblecore.</p>
		  			</article>
		  		</div>
	  		<aside>
	  		<div className="bottom-right-container">

	  		</div>
	  		</aside>
	 		</div>



		  </div>
		


            
          </div>
        );
    }
});
