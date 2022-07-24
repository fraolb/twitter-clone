import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';


import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Button } from '@mui/material';

const side =[
    {
        id:1,
        img : TwitterIcon,
        text : "Twitter"
    },
    {
        id:2,
        img : HomeIcon,
        text :"Home"
    },

    {
        id:3,
        img : TagIcon,
        text : "Explore"
    },
    {
        id:4,
        img : NotificationsNoneIcon,
        text : "Notification"
    },
    {
        id:5,
        img : MailOutlineIcon,
        text : "Messages"
    },
    {
        id:6,
        img :PermIdentityIcon,
        text : "Profile"
    },
    {
        id:7,
        img : MoreHorizIcon,
        text : "More"
    }
];
const simp =[
    {
        id:1, textt:"hello"
    },
    {
        id:2,textt:"hi"
    }
];

const Sidebar = () => {
  return (
    <div className='sidebar'>
        {/* Twitter icon */}
        <TwitterIcon className='sidebar__twitterIcon'/>

        {/* SidebarOption */}
        {/* {
            side.map((val)=>{
                return (
                    <SidebarOption key={val.id} pic={val.img} textt={val.text}/>
                )
            })
        } */}

       <SidebarOption Icon={HomeIcon} text="Home"/>
       <SidebarOption Icon={TagIcon} text="Explore"/>
       <SidebarOption Icon={NotificationsNoneIcon} text="Notification"/>
       <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
       <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
       <SidebarOption Icon={MoreHorizIcon} text="More"/>

        {/* Button -> Tweet */}
        <Button variant="outlined" className="sidebar--Tweet" fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar