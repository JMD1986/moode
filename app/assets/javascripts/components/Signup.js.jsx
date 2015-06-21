var Signup = React.createClass({

  render: function () {
    return (
      <form onSubmit={this.formSubmitted}>
        <h1>Sign Up</h1>
        <label className="firstname" >Name</label><br/>
        <input ref="name" type="text" placeholder="Enter first name.."/><br/>
        <label>Email</label><br/>
        <input  ref="email" type="text" placeholder="Enter email.."/><br/>
        <label>Username</label><br/>
        <input ref="user" type="text" placeholder="Enter username.."/><br/>
        <label>Password</label><br/>
        <input ref="pass"type="password" placeholder="Enter password.."/><br/>
        <label>Confirm Password</label><br/>
        <input ref="pass2"type="password" placeholder="Confirm password.."/><br/>

        <button>Submit</button>
      </form>
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

  
      if(signup.isValid()){
          console.log(signup.validationError);
         $.post('/users', 
            { name: signup.get('name'), 
              email: signup.get('email'), 
              password: signup.get('password'),
              password_confirmation: signup.get('password'),
            });
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