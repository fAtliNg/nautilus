import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import {CircularProgress} from 'material-ui/Progress';

class Pending extends Component {
    render() {
        const {pending, children} = this.props;
        let result;
        if (pending) {
            result = <Grid container justify="center">
                <Grid item xs={1}>
                    <CircularProgress/>
                </Grid>
            </Grid>
        } else {
            result = children;
        }
        return result;
    }
}

export default Pending;