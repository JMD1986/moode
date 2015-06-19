var Login = React.createClass({
  render: function () {
    return (
    	<form onSubmit={this.formSubmitted}>
    		<h1>Login</h1>
    		<label>Username</label><br/>
    		<input ref="user" type="text" placeholder="Enter username..."/><br/>
    		<label>Password</label><br/>
    		<input ref="password" type="password" placeholder="Enter password"/><br/>
    		<button>Submit</button>
    	</form>
    );
  },
  formSubmitted: function (e){
  	e.preventDefault();
  	console.log('user '+this.refs.user.getDOMNode().value);
  	console.log('pass '+this.refs.password.getDOMNode.value)
  	var login = new LoginModel({
  		user: this.refs.user.getDOMNode().value,
  		password: this.refs.password.getDOMNode.value
  	});

  	if(!login.isValid()){
  		console.log(login.validationError);
  	}
  	else{
  		console.log(login.validationError);
  	}
  }
});
