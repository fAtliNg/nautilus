import React from 'react'
import Grid from 'material-ui/Grid';
import Header from '../Header/Header';
import Widgets from '../../containers/Widgets/Widgets';

export default props => (
        <Grid container justify="center" style={{width: "100%", margin: 0, minWidth: 510}}>
            <Grid style={{paddingBottom: 16}} container justify="center">
                <Grid item xs={12} sm={12} md={11} lg={9} xl={7}>
                    <Header/>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <Grid item xs={6} sm={7} md={8} lg={6} xl={5}>
                    <div className={"app"}>
                        {props.children}
                    </div>
                </Grid>
                <Grid item xs={6} sm={5} md={3} lg={3} xl={2}>
                    <Widgets/>
                </Grid>
            </Grid>
        </Grid>
);
