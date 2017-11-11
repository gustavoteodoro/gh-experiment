import React, { Component } from 'react';
import UserProfileCard from '../../Modules/UserProfileCard';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            repos: {},
        }
    }

    componentWillMount() {
        const {
            params
        } = this.props.match;

        fetch('http://api.github.com/users/' + params.username)
        .then(results => {
            return results.json()
        }).then(data => {
            let profileData = data;
            this.setState({profile: profileData});
            console.log(profileData);
        })

        fetch('http://api.github.com/users/' + params.username + '/repos')
        .then(results => {
            return results.json()
        }).then(data => {
            let reposData = data;
            this.setState({repos: reposData});
            console.log(reposData);
        })
    }

    render() {
        const {
            profile
        } = this.state;
        return (
            <div>
                <UserProfileCard profile={profile} />
            </div>
        );
    }
}

export default Profile;
