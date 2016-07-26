"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var RegisterForm = React.createClass({
	render: function() {

        return (
			<form>
                <br> </br>
                <center><h1>Register</h1></center>

                <br> </br> <br> </br>
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
                <label htmlFor="E-Mail">E-Mail</label>
                <input type="text"
                       name="E-Mail"
                       className="form-control"
                       placeholder="E-Mail"
                       ref="E-Mail"
                       />



                <Link to = "Login">
                    <input type="button" value = "Login"/>
                    </Link>

                 <Link to = "Register">
                     <label htmlFor="Register">If you don't have account register here</label>
                    </Link>

            </form>

		);
	}
});

module.exports = RegisterForm;
