import React, { Component } from 'react';
import {
    Route,
    withRouter,
    Link,
} from 'react-router-dom';
import UserProfileCard from '../../Modules/UserProfileCard';
import ProfileRepos from '../../Modules/ProfileRepos';

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
        })
    }

    render() {
        const {
            profile,
            repos
        } = this.state;

        const {
            params
        } = this.props.match;

        return (
            <div>
                <UserProfileCard profile={profile} />
                <ul>
                    <li><Link to={'/user/' + params.username + '/repos/' + 'stars'}>Stars</Link></li>
                    <li><Link to={'/user/' + params.username + '/repos/' + 'forks'}>Forks</Link></li>
                    <li><Link to={'/user/' + params.username + '/repos/' + 'updated'}>Updated</Link></li>
                </ul>
                <Route path="/user/:username/repos/:order" component={ProfileRepos}/>
            </div>
        );
    }
}

export default withRouter(Profile);
