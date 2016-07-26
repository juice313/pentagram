"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var LoginForm = require('./LoginForm');


var Login = React.createClass({
	render: function() {
		//noinspection JSDuplicatedDeclaration
        var styles = {
        backgroundImage: "none",
		fontSize: 15,
        width: "290px",
        height: "330px",
        color: "#ffffff"
        };

		return (

            <center>
            <div className="Login Form" style={styles}>

				<LoginForm />
			</div>
             </center>
		);
	}
});



module.exports = Login;