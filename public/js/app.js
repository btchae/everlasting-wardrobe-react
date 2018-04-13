//Component Mapping
//Top Component-->Header/Footer/Content
///Content-->HomePage/SignIn/SingUp/HowItWorks
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//HowItWorks can definitely be much DRYer. WIll figure that out later. Read up on conditional rendering

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
		if (this.state.display === 'home') {
			return(
				<div>
					<NavBar changeDisplay={this.changeDisplay}/>
					<HomePage/>
				</div>
			)
		} else if (this.state.display === 'howitworks') {
			return(
				<div>
					<NavBar changeDisplay={this.changeDisplay}/>
					<HowItWorks/>
				</div>
			)
		} else if (this.state.display === 'signin') {
			return(
				<div>
					<NavBar changeDisplay={this.changeDisplay}/>
					<SignIn/>
				</div>
			)
		} else if (this.state.display === 'signup') {
			return(
				<div>
					<NavBar changeDisplay={this.changeDisplay}/>
					<SignUp/>
				</div>
			)
		}
	}
})

// =========================
// NavBar Component
// =========================
var NavBar = React.createClass ({
	handleClick: function(e) {
		console.log(typeof e.target);
		console.log(e.target);
		console.log('this is classname ' + e.target.className);
		this.props.changeDisplay(e.target.className);
	},
	render: function() {
		return(
			<ul>
				<li 
					className='home'
					onClick={this.handleClick}
					>Home</li>
				<li
					className='howitworks'
					onClick={this.handleClick}
					>How it Works</li>
				<li
					className='signup'
					onClick={this.handleClick}
					>Sign Up</li>
				<li
					className='signin'
					onClick={this.handleClick}
					>Sign In</li>
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
		return(
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
    		)
	}
})
// =========================
// Sign Up
// =========================
var SignUp = React.createClass({
	render: function() {
		return(
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
		)
	}
})
// =========================
// How It Works
// =========================
var HowItWorks = React.createClass({
	getInitialState: function() {
		return {
			additionalContent: ''
		}
	},
	handleClick: function(e) {
		console.log('this is classname ' + e.target.className);
		this.setState({additionalContent: e.target.className});
	},
	render: function() {
		if (this.state.additionalContent === '') {
			return(
				<div>
					<h1>How Does It Work?</h1>
					<ul>
						<li>Let's Get Started</li>
						<li className='expressyourself'
							onClick={this.handleClick}
							>Express Yourself</li>
						<li>Strut Your Stuff</li>
						<li>Send It Back</li>
					</ul>
				</div>
			)
		} else if (this.state.additionalContent === 'expressyourself') {
			return (
				<ExpressYourself/>
			)
		}
	}
})
// =========================
// Express Yourself
// =========================
var ExpressYourself = React.createClass({
	getInitialState: function() {
		return {
			subContent: ''
		}
	},
	handleClick: function(e) {
		console.log('this is classname ' + e.target.className);
		this.setState({subContent: e.target.className})
	},
	render: function() {
		if (this.state.subContent === '') {
			return(
				<div>
					<h1>How Does It Work?</h1>
					<ul>
						<li>Let's Get Started</li>
						<li>Express Yourself
							<ul>
								<li className='jazz'
									onClick={this.handleClick}
									>Jazz</li>
								<li className='techno'
									onClick={this.handleClick}>Techno</li>
								<li className='indie'
									onClick={this.handleClick}
									>Indie</li>
								<li className='lullaby'
									onClick={this.handleClick}
									>Lullaby</li>
							<li className='pop'
									onClick={this.handleClick}
									>Pop</li>
							</ul>
						</li>
						<br/>
						<li>Strut Your Stuff</li>
						<li>Send It Back</li>
					</ul>
				</div>
			)
		} else if (this.state.subContent === 'jazz') {
			return(
				<JazzContent/>
			)
		}
	}
})
// =========================
// Jazz Content
// =========================
var JazzContent = React.createClass({
	render: function() {
		return(
			<div>
				<h1>Jazz</h1>
				<ul>
					<li>Content/Image goes here</li>
					<li>Content/Image goes here</li>
					<li>Content/Image goes here</li>
					<li>Content/Image goes here</li>
					<li>Content/Image goes here</li>
					<li>Content/Image goes here</li>
					<li>Content/Image goes here</li>
					<li>Content/Image goes here</li>
				</ul>
			</div>
		)
	}
})
// =========================
//  REACT DOM
// =========================
ReactDOM.render(
	<TopComponent />, 
document.getElementById("container"));