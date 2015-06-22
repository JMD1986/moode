var Signup = React.createClass({

  render: function () {
    return (
      <div>
      <div className="login-header .col12">
      <h1>Sign up!</h1>
      </div>
      <form onSubmit={this.formSubmitted}>

        

        <fieldset className="account-info .col12">
          <label className="firstname">Name</label><br/>
          <input ref="name" type="text" placeholder="Enter first name.."/>
          <label className="firstname">Email</label><br/>
        </fieldset>


          

        <fieldset className="account-info .col12">
          <input  ref="email" type="text" placeholder="Enter email.."/><br/>
          <label className="firstname">Username</label><br/>
          <input ref="user" type="text" placeholder="Enter username.."/><br/>
          <label>Password</label>
        </fieldset>
        
      
        <input ref="pass"type="password" placeholder="Enter password.."/>
        <label>Confirm Password</label>
        <input ref="pass2"type="password" placeholder="Confirm password.."/>
      
     

        <button>Submit</button>

     
      
      </form>
      </div>

    );

  },
  formSubmitted: function(e){
    e.preventDefault();
       var signup = new SignUpModel({
          name: this.refs.user.getDOMNode().value,
          password: this.refs.pass.getDOMNode().value,
          password2: this.refs.pass2.getDOMNode().value,
          name: this.refs.name.getDOMNode().value,
          email: this.refs.email.getDOMNode().value
    });
       console.log('test' +signup.get('name'))
  
      if(signup.isValid()){
          console.log(signup.validationError);
         $.post('/users', 
            { name: signup.get('name'), 
              email: signup.get('email'), 
              password: signup.get('password'),
              password_confirmation: signup.get('password')
            });
           app.navigate('#moods/categories', {trigger: true});
      //     $.post('/login', 
      //       {
      //         name: signup.get('name'), 
      //         password: signup.get('password')
      //       });
       }
      else{
         console.log(signup.validationError);
          // $.post('/user', 
          //   { name: signup.get('name'), 
          //     email: signup.get('email'), 
          //     password: signup.get('password'),
          //     password_confirmation: signup.get('password'),
          //   });
      }
    }

});