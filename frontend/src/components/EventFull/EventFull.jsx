import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, {CardContent} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import {withStyles} from "material-ui/styles/index";

const styles = theme => ({
    avatar: {
        width: "100%",
        height: "100%"
    },
    grid: {
        // padding: 10,
    },
    score: {}
});

class EventFull extends Component {
    render() {
        const {classes, data} = this.props;
        return (
            <Card>
                <CardContent>
                    <Grid container justify={"space-between"}>
                        <Typography type={"subheading"}>
                            {data.time}
                        </Typography>
                        <Typography type={"subheading"}>
                            {data.date}
                        </Typography>
                    </Grid>
                    <Grid container justify={"center"} className={classes.grid}>
                        <Typography type={"subheading"}>
                            {data.place}
                        </Typography>
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
                            <Typography type={"display2"} className={classes.score}>
                                {data.score}
                            </Typography></Grid>
                        <Grid item xs={4}>
                            <Avatar
                                alt={data.away}
                                src={data.emblemaway}
                                className={classes.avatar}
                            />
                        </Grid>
                    </Grid>
                    <Grid container justify={"center"} className={classes.grid}>
                        <Typography type={"title"} align={"center"}>
                            {data.home} - {data.away}
                        </Typography>
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