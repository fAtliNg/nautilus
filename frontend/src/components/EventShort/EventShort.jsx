import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import {withStyles} from "material-ui/styles/index";
import styles from './styles';

class EventShort extends Component {
    render() {
        const { classes, data } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item xs={2}>
                            <div className={classes.subheading}>
                                {data.time}
                            </div>
                        </Grid>
                        <Grid item xs={8} style={{textAlign: "center"}}>
                            <div className={classes.subheading}>
                                {data.home}  {data.score}  {data.away}
                            </div>
                        </Grid>
                        <Grid item xs={2} style={{textAlign: "right"}}>
                            <div className={classes.subheading}>
                                {data.date}
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

EventShort.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventShort);