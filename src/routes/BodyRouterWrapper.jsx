import React from 'react';

import BodyLayoutType1 from './layouts/BodyLayoutType1';
import BodyLayoutType2 from './layouts/BodyLayoutType2';
import BodyLayoutType3 from './layouts/BodyLayoutType3';

const BodyRouteWrapper = (props) => {
    
    const presenter = props.presenter;
    let layout = undefined;
    switch(props.layout) {
        case "layout-1":
            layout = <BodyLayoutType1 {...props}> { presenter } </BodyLayoutType1>
            break;
        case "layout-2":
            layout = <BodyLayoutType2 {...props}> { presenter } </BodyLayoutType2>
            break;
        case "laytou-3":
            layout = <BodyLayoutType3 {...props}> { presenter } </BodyLayoutType3>
            break;
        default: 
            // nothing
    }

    return (
        <div>
            { layout }
        </div>
    )
}

export default BodyRouteWrapper;
