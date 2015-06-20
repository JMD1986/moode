var Login = React.createClass({
  render: function () {
    return (
      <div>
    	<form onSubmit={this.formSubmitted}>

        <div className="container">
        <div className="main-header">
          <h2>Moode</h2>
        </div>
    		<h1 className="log">Login</h1>

      <button>Sign Up</button>
    		<h1>Login</h1>
    		<label>Username</label><br/>
    		<input ref="user" type="text" placeholder="Enter username..."/><br/>
    		<label>Password</label><br/>
    		<input ref="password" type="password" placeholder="Enter password"/><br/>
    		<button>Submit</button>
        </div>
    	</form>
      </div>
    );
  },
  formSubmitted: function (e){
  	e.preventDefault();
    var app = new App();
  	console.log('user '+this.refs.user.getDOMNode().value);
  	console.log('pass '+this.refs.password.getDOMNode.value)
  	var login = new LoginModel({
  		user: this.refs.user.getDOMNode().value,
  		password: this.refs.password.getDOMNode.value
  	});

    app.navigate('#moods/1', {trigger:true});
  	// if(login.isValid()){
  	// 	console.log(login.validationError);
   //      // 
  	// }
  	// else{
  	// 	console.log(login.validationError);
    
  	// }
  }
});
