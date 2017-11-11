import React, { Component } from 'react';

import {
    ProfileContainer,
    UserName,
    ProfilePic,
    ProfileDetails,
} from './styles';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
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
    }

    render() {
        const {
            profile
        } = this.state;
        return (
            <ProfileContainer>
                <UserName>{profile.name}</UserName>
                <ProfilePic src={profile.avatar_url} alt={profile.login} width="220px" height="220px" />
                <ProfileDetails>
                    {
                        profile.location &&
                            <p><b>{profile.location}</b></p>
                    }
                    {
                        profile.company &&
                            <p>{profile.company}</p>
                    }
                    {
                        profile.email &&
                            <p>{profile.email}</p>
                    }
                    {
                        profile.bio &&
                            <p>{profile.bio}</p>
                    }
                    {
                        (profile.followers > 0) &&
                            <p><b>{profile.followers}</b> followers</p>
                    }
                    {
                        (profile.following > 0) &&
                            <p><b>{profile.following}</b> following</p>
                    }
                </ProfileDetails>
            </ProfileContainer>
        );
    }
}

export default Profile;
