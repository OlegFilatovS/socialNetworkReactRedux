import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PropTypes from 'prop-types';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts = {props.profilePageState.posts} someString = {props.someString}/>
        </div>
    )

};

Profile.propTypes = {
    someString: PropTypes.string,
    profilePageState: PropTypes.object
};

export default Profile;