import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

const BottomContextMenu = styled('div')(({ theme, options }) => ({
    display: options.show?"block":"none",
    position: "fixed",
    zIndex: 1000001,
    width: 240,
    right: options.right,
    bottom: options.bottom,
    float: "left",
    border: "2px",
    borderColor: "black",
    backgroundColor: "gray"
    // alignItems: 'center',
    // justifyContent: 'flex-left',
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
}));

const BottomMenu = (props) => {

    const theme = useTheme();

    // const [show, setShow] = React.useState(props.show);ehlau

    const menuClicked = (e) => {
        console.log("some menu selected !!!");
        props.toggleBottomMenuShow();
    }

    return(
        <BottomContextMenu 
            onClick={ menuClicked } 
            options={{ show: props.show, right: props.right, bottom: props.bottom }}
            onMouseOut={ menuClicked }
        >
            <List component="nav">
                <ListItemButton component={RouterLink} to="/themeSelection">
                    Change theme
                </ListItemButton>
                <ListItemButton component={RouterLink} to="/themeSelection">
                    Manage theme
                </ListItemButton>
            </List>
            <Divider />
            <List component="nav">
                <ListItemButton component={RouterLink} to="/monitoring">
                    Monitoring
                </ListItemButton>
            </List>
            <Divider />
            <List component="nav">
                <ListItemButton component={RouterLink} to="/monitoring">
                    Set message filtering
                </ListItemButton>
            </List>
        </BottomContextMenu>

        // <div style={{ display: props.show?"block":"none", position: "fixed", zIndex: 10000, left: 56, bottom: 200, float: "left" }} onClick={ menuClicked }>
        //     Some menu should be shown here !!!
        // </div>
    );
}

export default BottomMenu;
