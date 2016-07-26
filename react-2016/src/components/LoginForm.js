"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var LoginForm = React.createClass({
	render: function() {
        document.body.style.backgroundImage = "url('images/Penguins.jpg')";
        document.body.style.backgroundPosition = "center center";
        return (
                <form>
                        <br></br>
                        <center><h1>Login</h1></center>

                        <br></br> <br></br>
                        <label htmlFor="Username">Username:</label>
                        <input type="text" name="Username"
                        className="form-control"
                        placeholder="Username"
                        ref="Username"
                        />
                        <br />

                        <label htmlFor="Password">Password:</label>
                        <input type="password"
                        name="Password"
                        className="form-control"
                        placeholder="Password"
                        ref="password"
                        />
                        <br />
                        
                        <input type="submit" value="Login" className="btn btn-default" />


                        <Link to = "Register">
                        <label htmlFor="Register">If you don't have account register here</label>
                        </Link>
                </form>
            
		);
	}
});

module.exports = LoginForm;