import React, { Component } from 'react';
import './Login.css';
import { GOOGLE_AUTH_URL,FACEBOOK_AUTH_URL, ACCESS_TOKEN } from '../../constants';

import { Link, Redirect } from 'react-router-dom'
import googleLogo from '../../img/google-logo.png';
import fbLogo from '../../img/fb-logo.png';
import Alert from 'react-s-alert';
 
 
import { getCurrentUser, getData,logOutUser,getPlayerPicture } from '../../util/APIUtils';

class Login extends Component {
    componentDidMount() {
       
        // getCurrentUser()
        // getData()
        // console.log(getData().then(response=>{console.log(response)}))
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if(this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }
    
    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">Login for Football league</h1>
                    <SocialLogin />
                </div>
            </div>
        );
    }
}

class SocialLogin extends Component {
    render() {
        return (
            
            <div className="social-login">
                <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook" /> Log in with Facebook</a>

            </div>
        );
    }
}

 
export default Login
