//Component Mapping
//Top Component-->Header/Footer/Content
///Content-->HomePage/SignIn/SingUp/HowItWorks

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
				<ContentComponent/>
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
var ContentComponent = React.createClass({
	getInitialState: function() {
		return {
			display: 'home'
		}
	},
	changeDisplay: function(displaySetting) {
		console.log(displaySetting);
		this.setState({display: displaySetting});
	},

	render: function() {
///content will change
		console.log('rendering content');
		return(
			<NavBar changeDisplay={this.changeDisplay}/>
		)

	}
})

// =========================
// NavBar Component
// =========================
var NavBar = React.createClass ({
	handleClick: function(e) {
		console.log(typeof e.target);
		console.log(e.target);
//		this.props.changeDisplay(displaySetting);
	},
	render: function() {
		return(
			<ul>
				<li 
					className='home'
					onClick={this.handleClick}>Home</li>
				<li>How it Works</li>
				<li>Sign Up</li>
				<li>Sign In</li>
			</ul>
		)

	}
})

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
var SignIn = React.createClass({
	render: function() {
	<div className="login-form" >
        <h3>Please Sign In</h3>
        <form className="log">
          <label htmlFor="username">Username</label>
          <input className="username-login-form" type="text" placeholder="username"/>
          <br/>
          <label htmlFor="password">Password</label>
          <input className="password-login-form" type="password" placeholder="password"/>
          <br/>
          <input className="login-form-submit" type="submit"/>
        </form>
    </div>
	}
})
// =========================
// Sign Up
// =========================
var SignUp = React.createClass({
	render: function() {
		<div className="signup-form" >
				<h3>SignUp Fam!</h3>
				<form className="log">
					<label htmlFor="username">Username</label>
					<input 
						className="username-signup-form" 
						type="text" 
						placeholder="username"
					/>
					<br/>
					<label htmlFor="password">Password</label>
					<input 
						className="password-signup-form"
						type="text" 
						placeholder="password"
					/>
					<br/>
					<input className="signup-form-submit" type="submit"/>
				</form>
			</div>
	}
})
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