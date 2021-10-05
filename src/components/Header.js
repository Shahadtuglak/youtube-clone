import React from 'react';
import "./Header.css";


//Import
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon  from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';



function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <MenuIcon/>
                <img  className="header-logo" src="https://img.icons8.com/fluency/48/000000/youtube-play.png" alt="logo"/>      
            </div>

            <div className="header-search">
                <input type="text" placeholder="Search" />
                <SearchIcon className="header-inputButton"/>

               


            </div>
            <div className="header-right">
                <VideoCallIcon className="header-icon" />
                <AppsIcon className="header-icon"/>
                <NotificationsIcon className="header-icon"/>
                <img class="header-avatar" src="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-1/p320x320/241013356_3124608901104938_4841102880698831209_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Uqev8YdNKzYAX-OWHD1&_nc_ht=scontent-del1-1.xx&oh=ac943ad4140b54cfa18a334021d09472&oe=617AC101" alt="avatar"/>

            </div>
           
            
        </div>
    )
}

export default Header;
