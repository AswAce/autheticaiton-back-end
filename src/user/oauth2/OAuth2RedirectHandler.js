import React, { Component } from 'react';
import { ACCESS_TOKEN } from '../../constants';
import { Redirect } from 'react-router-dom'
import { getCurrentUser, getData } from '../../util/APIUtils';

class OAuth2RedirectHandler extends Component {
    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    render() {        
        var token;
        if(document.cookie.length>0){
            var token=document.cookie.split('; ').find(c => c.startsWith('token')).split('=')[1];
             
        }
       
        const error = this.getUrlParameter('error');
        const msg = this.getUrlParameter('msg');
        console.log(error)
        console.log(msg)
       
        // console.log(getData().then(response=>{console.log(response)}))
        // getCurrentUser()

if(token) {
          
            return <Redirect to={{
                pathname: "/profile",
                state: { from: this.props.location }
            }}/>; 
        } else {
            return <Redirect to={{
                pathname: "/login",
                state: { 
                    from: this.props.location,
                    error: error 
                }
            }}/>; 
        }
    }
}

export default OAuth2RedirectHandler;