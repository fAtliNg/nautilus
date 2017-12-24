import React from 'react'
import Grid from 'material-ui/Grid';
import Header from '../Header/Header';
import Widgets from '../Widgets/Widgets';

export default props => (
    <div style={{marginLeft: 200, marginRight: 200}}>
        <Grid container>
            <Grid item xs={12}>
                <Header/>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={8}>
                <div className={"app"}>
                    {props.children}
                </div>
            </Grid>
            <Grid item xs={4}>
                <Widgets/>
            </Grid>
        </Grid>
    </div>
);
