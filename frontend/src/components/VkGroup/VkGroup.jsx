import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Card, {CardContent, CardHeader} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Tooltip from 'material-ui/Tooltip';

const styles = theme => ({
    button: {
        width: "100%"
    },
    link: {
        textDecoration: "none"
    },
    paper: {
        textAlign: 'center'
    },
    avatar: {
        width: 40,
        height: 40
    },
    tooltipBottom: {
        top: 8
    }
});

class VkGroup extends Component {
    render() {
        const {classes, data} = this.props;
        return (
            <Card>
                <a href={data.data.groupUrl} target="_blank" className={classes.link}>
                    <CardHeader
                        style={{paddingBottom: 8}}
                        avatar={
                            <Avatar aria-label="Recipe">
                                <img
                                    className={classes.avatar}
                                    src={data.data.avatar}
                                    alt="avatar"
                                />
                            </Avatar>
                        }
                        title={data.data.title}
                        subheader={data.data.subheader}
                    />
                </a>
                <Divider/>
                <CardContent>
                    <Grid container>
                        {data.data.subscribers &&
                        data.data.subscribers.map(subscriber =>
                            <Grid key={subscriber.id} item xs={3} className={classes.paper}>
                                <a href={subscriber.url} target="_blank">
                                    <Tooltip title={subscriber.name} placement="bottom" className={classes.tooltipBottom}>
                                        <Avatar className={classes.avatar}>
                                            <img
                                                src={subscriber.avatar}
                                                alt="avatar"
                                            />
                                        </Avatar>
                                    </Tooltip>
                                </a>
                            </Grid>
                        )}
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <a href={data.data.subscribeUrl}
                               target="_blank" className={classes.link}>
                                <Button raised color="primary" className={classes.button}>
                                    Подписаться на новости
                                </Button>
                            </a>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

VkGroup.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
};

export default withStyles(styles)(VkGroup);