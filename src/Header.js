import React from 'react'
import "./header.css"
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';


function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="headerIcon" />
            </IconButton>
            <div className="header-logo">
                <img className="header-logo-left" src="https://cdn.cdnlogo.com/logos/t/29/tinder.svg"alt=""></img>
                <img className="header-logo-right" src="https://cdn.cdnlogo.com/logos/t/41/tinder.svg" alt=""></img>
            </div>
            <IconButton>
                <ForumIcon fontSize="large" className="header-messsage"/>
            </IconButton>
        </div>
    )
}

export default Header;