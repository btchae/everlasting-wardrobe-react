// =========================
// Top Component
// =========================
var TopComponent = React.createClass({
	getInitialState: function() {
		var userCheck;
		if(document.cookie) {//Initial State of User Logged In
			userCheck = false;
		} else {
			userCheck = "";
		}
		return{
			username: "",
			authUser: userCheck,
			id: "",
			display: "home"
		};
	},
	changeLogin: function() {
		this.setState({
			authUser: true,
			username: Cookies("username"),
			id: Cookies("id")
		});
	},
	render: function() {
		console.log('rendering');
		console.log(this.state.display);
			return (
				<div>
				<HeaderComponent/>
				<HomePage/>
				<FooterComponent />
				</div>
			)

	}
})
// =========================
// Header Component
// =========================
var HeaderComponent = React.createClass({
	render: function() {
		console.log('header');
		if ('23' === '24') {
			return (
				<div>
				Logged In
				</div>
				)
		} else {
			return(
				<div>
				Not Logged In
				</div>
			)
		}
	}
})
// =========================
// Footer Component
// =========================
var FooterComponent = React.createClass({
	render: function() {
		console.log('footer');
		return (
			<div>
			Footer stuff. This never changes.
			</div>

		)
	}
})
// =========================
// Content Component
// =========================
var contentComponent
// =========================
// Home Page
// =========================
var HomePage = React.createClass({
	render: function() {
		console.log('more rendering');
		return(
			<div>
			<p>Home</p>
			</div>
		)
	}

})
// =========================
// Sign In
// =========================
var SignIn
// =========================
// Sign Up
// =========================
var SignUp
// =========================
// How It Works
// =========================
var HowItWorks

// =========================
//  REACT DOM
// =========================
ReactDOM.render(
	<TopComponent />, 
document.getElementById("container"));