var Login = React.createClass({
  render: function () {
    return (
      <div>
      <div className="login-header">
      <h1>Moode</h1>
      </div>
    	<form onSubmit={this.formSubmitted}>

        <div className="container-main">
        <div className="main-header">
        
          <h2>Login</h2>
       
        </div>
        
    		<h1 className="log">Login</h1>

      <button>Sign Up</button>
    		
        <fieldset className="account-info">
    		<label>Username</label>
    		<input ref="user" type="text" placeholder="Enter username..."/>
    		<label>Password</label>
        </fieldset>
        <fieldset className="account-info">
    		<input ref="password" type="password" placeholder="Enter password"/>
        <label>Password Confirmation</label>
        <input ref="password2" type="password" placeholder="Enter password"/>
    		<button>Submit</button>
        </fieldset>
        </div>
    	</form>
      </div>

    );
  },
  formSubmitted: function (e){
  	e.preventDefault();
    var app = new App();
  	// console.log('user '+this.refs.user.getDOMNode().value);
  	// console.log('pass '+this.refs.password.getDOMNode.value)
  	
    var login = new LoginModel({
  		username: this.refs.user.getDOMNode().value,
  		password: this.refs.password.getDOMNode().value,
      password2: this.refs.password2.getDOMNode().value
  	});

    if(login.isValid()){
      console.log(login.validationError);
      // $.post('/users/new', { username: login.get('username'), password: login.get('password'), password: login.get('password')  });
      app.navigate('#moods/categories', {trigger: true});
    }
    else{
       console.log(login.validationError);
    }
    
  	 }
});
