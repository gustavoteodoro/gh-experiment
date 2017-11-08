import React, { Component } from 'react';

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

        return (
            <div className="profile">
                <h1>{this.state.profile.login}</h1>
                <img src={this.state.profile.avatar_url} />
                <p>{this.state.profile.location}</p>
            </div>
        );
    }
}

export default Profile;
