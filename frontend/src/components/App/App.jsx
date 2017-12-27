import React from 'react'
import Grid from 'material-ui/Grid';
import Header from '../Header/Header';
import Widgets from '../../containers/Widgets/Widgets';

export default props => (
    <div style={{margin: "auto"}}>
        <Grid container justify="center">
            <Grid item xs={11} sm={10} md={9} lg={8} xl={7}>
                <Header/>
            </Grid>
        </Grid>
        <Grid container justify="center">
            <Grid item xs={8} sm={7} md={6} lg={5} xl={5}>
                <div className={"app"}>
                    {props.children}
                </div>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} xl={2}>
                <Widgets/>
            </Grid>
        </Grid>
    </div>
);
