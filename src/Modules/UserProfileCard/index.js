import React, { Component } from 'react';

import {
    ProfileCardContainer,
    UserName,
    ProfilePic,
    ProfileDetails,
} from './styles';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {
            profile
        } = this.props;
        return (
            <ProfileCardContainer>
                <ProfilePic src={profile.avatar_url} alt={profile.login} width="220px" height="220px" />
                <UserName>{profile.name}</UserName>
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
            </ProfileCardContainer>
        );
    }
}

export default Profile;
