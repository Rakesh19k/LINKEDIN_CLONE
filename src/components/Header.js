import React from 'react'
import "./CSS/Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Header() {

    const user = useSelector(selectUser)

    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    };

    return (
        <div className="header">
            <div className="header_left">
                <img 
                    src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" 
                    alt=""
                />

                <div className="header_search">
                    <SearchIcon />
                    <input placeholder="Search" />
                </div>
            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption
                    // photoUrl = {user.photoUrl} 
                    avatar={true}
                    title="me"
                    onClick={logoutOfApp} 
                ></HeaderOption>
            </div>

        </div>
    )
}

export default Header
