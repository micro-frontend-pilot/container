import React from "react"

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import Tooltip from '@mui/material/Tooltip';

import BottomMenu from "./bottom/BottomMenu";

const Copyright = React.lazy(()=> import("common/Copyright"));

const styles = {
    footer: {
        width: '100%',
        // height: '50px',
        // lineHeight: '50px',
        // textAlign: 'center',
        background: '#ddd',
        display: 'flex',
        padding: '0px'
    },
    footerCopy: {
        // float: 'left',
        color: '#333',
        fontSize: '10px',
        width: "100%",
        // display: "flex",
        textAlign: 'justify',
    },
}

export default function Footer() {

    const [bottomMenuShow, setBottomMenuShow] = React.useState(false);

    const toggleBottomMenuShow = () => {
        console.log("Clicked on bottom menu ~~~");
        setBottomMenuShow(!bottomMenuShow);
    }
    
    const handlePersonSecurityPolicy = () => {
        
        console.log("~~~")
    }

    return (
        <div style={ styles.footer }>
            <div style={{ width: "10%" }}>
            </div>
            <div style={ styles.footerCopy }>
                <Copyright 
                    style={{ padding: 2 }} 
                    companyName="Samsung SDS"
                    companyWebSite="http://www.sds.samsung.com"
                    personSecurityText="개인정보 처리방침"
                    onPersonSecurityPolicy={ handlePersonSecurityPolicy }
                />
            </div>
            <div style={{ width: "10%", textAlign: 'right' }}>
                {/* <Box style={{ padding: 2, paddingTop: 0 }}> */}
                <Box style={{ padding: 2, paddingTop: 0 }}>
                    <Tooltip title="Admin" placement="top">
                        <IconButton onClick={ toggleBottomMenuShow }>
                            <SettingsIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </div>
            <BottomMenu 
                show={ bottomMenuShow } 
                toggleBottomMenuShow={ toggleBottomMenuShow } 
                right={ 0 } 
                bottom={ 37 }
            />
        </div>
    )
}
