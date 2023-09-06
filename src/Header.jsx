import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import React from 'react';
import DrawerMenu from './drawer/DrawerMenu';

const HeadAppBar = React.lazy(()=> import("common/HeadAppBar"));

const Header = (props) => {

    const doSearch = (keyword)=>{
        console.log("doSerch==>" + keyword);
    }

    const handleNewEmailsShow = (userId) => {
        console.log("userId==>" + userId);
    }

    const handleNewNotificationsShow = (userId) => {
        console.log("userId==>" + userId);
    }

    const handleMyProfileShow = (userId) => {
        console.log("userId==>" + userId);
    }

    const handleMyAccountInfoShow = (userId) => {
        console.log("userId==>" + userId);
    }

    return (
        <>
            <HeadAppBar 
                title="Pilot System"
                doSearchCallback={ doSearch }
                searchLabel="Search..."
                searchActionIcon={<ManageSearchIcon key="" sx={{ color: "#FFFFFF" }}/>}
                userId="ispark"
                onNewEmailsShowReq={handleNewEmailsShow}
                onNewNotificationsShowReq={ handleNewNotificationsShow }
                onMyProfileShowReq={ handleMyProfileShow }
                onMyAccountInfoShowReq={ handleMyAccountInfoShow }
                toggleDrawer={ props.toggleDrawer }
            />
            <DrawerMenu 
                open={ props.drawerOpen } 
                toggleDrawer={ props.toggleDrawer } 
                width={ 350 } { ...props } 
            />
        </>
    )
}

export default Header;
