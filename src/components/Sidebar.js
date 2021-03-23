import { Avatar } from '@material-ui/core'
import React from 'react'
import "./CSS/Sidebar.css"
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


function Sidebar() {

    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );



    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img
                    src="https://media-exp1.licdn.com/dms/image/C4D16AQHPXII7yUEcHQ/profile-displaybackgroundimage-shrink_350_1400/0/1609417807722?e=1621468800&v=beta&t=rS_G2DbP4lvkEVcrXDMx0k0oXwfxcIGeuBYDtAN0C-E"
                    alt=""
                />
                <Avatar src={user.photoUrl} className="sidebar_avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>Python | JavaScript | HTML | CSS | Bootstrap | ReactJs(Hooks)</h4>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar_statNumber">2,355</p>
                </div>

                <div className="sidebar_stat">
                    <p>Views of your post</p>
                    <p className="sidebar_statNumber">2,332</p>
                </div>
            </div>

            <div className="sidebar_tools">
                <p>Access exlusive tools & insights</p>
                <span>Try Premium Free For 1 Month</span>
            </div>

            <div className="sidebar_item">
                <BookmarkIcon className="bookmarkicon" />
                <h4>My items</h4>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div> 
        </div>
    )
}

export default Sidebar
