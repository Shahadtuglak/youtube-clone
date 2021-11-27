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
                <img class="header-avatar" src="https://media-exp1.licdn.com/dms/image/D4E35AQH016P7TfZ7_A/profile-framedphoto-shrink_400_400/0/1630352114599?e=1638079200&v=beta&t=BJjN1B93VqFoKzmXxe592dTzyBKPsVK8n6Dfr6M2uXY"
            </div>
           
            
        </div>
    )
}

export default Header;
