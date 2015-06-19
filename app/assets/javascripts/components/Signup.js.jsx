var Signup = React.createClass({

  render: function () {
    return (
      <form onSubmit={this.formSubmitted}>
        <h1>Sign Up</h1>
        <label className="firstname" >First Name</label><br/>
        <input type="text" placeholder="Enter first name.."/><br/>
        <label>Last Name</label><br/>
        <input type="text" placeholder="Enter last name.."/><br/>
        <label>Username</label><br/>
        <input type="text" placeholder="Enter username.."/><br/>
        <label>Password</label><br/>
        <input type="password" placeholder="Enter password.."/><br/>
        <label>Email</label><br/>
        <input type="text" placeholder="Enter email.."/><br/>
        <button>Submit</button>
      </form>
    );

  },
  formSubmitted: function(e){
    e.preventDefault();
    
  }
});