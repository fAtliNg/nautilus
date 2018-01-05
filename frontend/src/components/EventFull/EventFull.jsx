import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import {withStyles} from "material-ui/styles/index";

const styles = theme => ({
    avatar: {
        width:60,
        height:60,
        paddingRight:10,
        paddingLeft:10,
    },
    grid: {
        padding:10,
    },
    score: {
    }

});

class EventFull extends Component {
    render() {
        const { classes, data } = this.props;
        return (
            <Card>
                <CardContent>
                    <Grid container spacing={8}>
                    <Grid container justify={'space-between'}>
                    <Typography type={"subheading"}>
                        {data.time}
                    </Typography>
                    <Typography type={"subheading"}>
                        {data.date}
                    </Typography>
                    </Grid>

                    <Grid container justify={'center'} className={classes.grid}>
                        <Typography type={"subheading"}>
                            РГУПС, 5-я лига
                        </Typography>
                    </Grid>

                    <Grid container justify={'center'} className={classes.grid}>
                        <Avatar alt="Наутилус"
                                src="https://pp.userapi.com/c837425/v837425654/4959c/4nWFZ1fwAGw.jpg"
                                className={classes.avatar}
                        />
                        <Typography type={"display2"} className={classes.score}>
                          {data.score}
                        </Typography>
                        <Avatar alt="Соперник"
                                src="https://pp.userapi.com/c824410/v824410000/7048c/EUN7T5ZJHAA.jpg"
                                className={classes.avatar}
                        />
                    </Grid>
                        <Grid container justify={'center'} className={classes.grid}>
                            <Typography type={"title"}>
                                {data.home}     -     {data.away}
                            </Typography>


                        </Grid>
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