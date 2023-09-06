import React from 'react';
import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane';

const LayoutType1 = (props) => {
    return (
        // TO-DO: need to assign theme
        <div style={{ width: "100%", marginLeft: "10px", marginTop: "15px", arginRight: "auto" }} >
            { props.children }
        </div>
    );
}

export default LayoutType1;
