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

    return (

      <div className="Big-Div">
         <div className="login-header .col12">
            <h1>Moode</h1>
            <h2>How are you feeling today?</h2>
          </div>
          <form onSubmit={this.formSubmitted} ref="test">                   

              <div className="main-header">    
                <h2>Login</h2>
              </div>        
              <fieldset className="account-info">
                    
                    <h1 >Login</h1>
                    <label>Username</label><br/>

                 
                   
             
              <fieldset className="account-info">
                    <h1>Login</h1>
                    <label className="username">Username</label><br/>

                    <input ref="user" type="text" placeholder="Enter username..."/><br/>
                    <label className="username">Password</label><br/>
                    <input ref="password" type="password" placeholder="Enter password"/><br/>
                       <button>Submit</button>                      
              </fieldset>
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

      // $.post('/login', 
      //   {
      //     name: login.get('name'), 
      //     password: login.get('password')
      // });
      app.navigate('#moods/categories', {trigger: true});
        // this.refs.error1.getDOMNode().innerHTML = login.validationError;
    }
    else{
          // this.refs.error1.getDOMNode().innerHTML = 'Please enter password';
          alert('test')
       // console.log(login.validationError);
    }

  },
  fadeIn: function(e){
    e.preventDefault();
      $(this.refs.test.getDOMNode()).fadeIn('10000');
  }
});
