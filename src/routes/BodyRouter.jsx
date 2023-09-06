import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { configureRoutes } from '../pages';
import BodyRouterWrapper from './BodyRouterWrapper';

class BodyRouter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            presenterMap: configureRoutes(this.props)
        }
    }
 
    render () {
        return (
            // TO-DO: div style의 theme 반영 필요
            <div style={{ height: '100%', width: "100%" }}>
                <Routes>
                    {
                        this.state.presenterMap.map((route, index)=>{
                            return (
                                <Route
                                    key={ index }
                                    path={ route.key }
                                    element={ <BodyRouterWrapper path={ route.key } presenter={ route.presenter } layout={ route.layout } { ...this.props }/> }
                                    { ...this.props }
                                />
                            )
                        })
                    }
                </Routes>

            </div>
        );
    }
}

export default BodyRouter;
