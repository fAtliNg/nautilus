import React from 'react'
// import Navigation from '../Navigation/Navigation';

export default props => (
    <div>
        {/*<Navigation/>*/}
        <div className={"app"} style={{marginLeft: 200, right: 0}}>
            {props.children}
        </div>
    </div>
);
