var Login = React.createClass({
  componentDidMount: function() {
    // window.addEventListener('load', this.fadeIn);
    // window.addEventListener("hashchange", this.fadeIn);
  },
  componentWillUnmount: function() {
    // window.removeEventListener('load', this.fadeIn);
    //  window.removeEventListener("hashchange", this.fadeIn);
  },
  render: function () {
    var divStyle ={
      display: 'none'
    }
    return (

      <div>
      <div className="login-header">
      <h1>Moode</h1>
      </div>
    	<form onSubmit={this.formSubmitted}>

      <div >
    	<form onSubmit={this.formSubmitted} ref="test" >


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

      <button  >Sign Up</button>
    		<h1 >Login</h1>
    		<label>Username</label><br/>
    		<input ref="user" type="text" placeholder="Enter username..."/><br/>
    		<label>Password</label><br/>
    		<input ref="password" type="password" placeholder="Enter password"/><br/>

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
  		name: this.refs.user.getDOMNode().value,
  		password: this.refs.password.getDOMNode().value

  	});

    if(login.isValid()){
      console.log(login.validationError);
      $.post('/login', 
        {
          name: login.get('name'), 
          password: login.get('password')
      });
      // app.navigate('#moods/categories', {trigger: true});
    }
    else{
      $.get('/logn', function(error){
         console.log(error);
         });
      
       console.log(login.validationError);
    }

  },
  fadeIn: function(e){
    e.preventDefault();
      $(this.refs.test.getDOMNode()).fadeIn('10000');
  }
});
