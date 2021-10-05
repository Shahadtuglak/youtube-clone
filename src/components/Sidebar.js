import React from 'react';
import SidebarRow from './SidebarRow';

import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistryIcon from "@material-ui/icons/History";
import OnDemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";



function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Explore"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions"/>
            <hr/>


            <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow Icon={HistryIcon}title="History"/>
            <SidebarRow Icon={OnDemandVideoIcon}title="Your videos"/>
            <SidebarRow Icon={WatchLaterIcon}title="Watch later"/>
            <SidebarRow Icon={ThumUpAltOutlinedIcon}title="Liked videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon}title=" Show more"/>
            <hr/>
            
        </div>
    )
}
export default Sidebar;
