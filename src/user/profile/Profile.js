import React, { Component } from 'react';
import './Profile.css';
import { getData } from '../../util/APIUtils';

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
       
    }
    render() {
        return (
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                       
                        <div className="profile-name">
                           <h2>{this.props.currentUser.name}</h2>
                           <p className="profile-email">{this.props.currentUser.email}</p>
                         <img src={this.props.currentUser.imageUrl} alt="Simply Easy Learning" >
                         </img>

                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Profile