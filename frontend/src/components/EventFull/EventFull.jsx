import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, {CardContent} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import {withStyles} from "material-ui/styles/index";
import styles from './styles';

class EventFull extends Component {
    render() {
        const {classes, data} = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Grid container justify={"space-between"}>
                        <div className={classes.subheading}>
                            {data.time}
                        </div>
                        <div className={classes.subheading}>
                            {data.date}
                        </div>
                    </Grid>
                    <Grid container justify={"center"} className={classes.grid}>
                        <div className={classes.subheading}>
                            {data.place}
                        </div>
                    </Grid>
                    <Grid container justify={"center"} alignItems={"center"} className={classes.grid}>
                        <Grid item xs={4}>
                            <Avatar
                                alt={data.home}
                                src={data.emblemhome}
                                className={classes.avatar}
                            />
                        </Grid>
                        <Grid item align="center" xs={4}>
                            <div className={classes.display2}>
                                {data.score}
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <Avatar
                                alt={data.away}
                                src={data.emblemaway}
                                className={classes.avatar}
                            />
                        </Grid>
                    </Grid>
                    <Grid container justify={"center"} className={classes.grid}>
                        <div className={classes.title}>
                            {data.home} - {data.away}
                        </div>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

EventFull.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventFull);