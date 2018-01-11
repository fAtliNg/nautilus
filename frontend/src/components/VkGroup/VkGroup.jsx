import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Card, {CardContent, CardHeader} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Tooltip from 'material-ui/Tooltip';
import styles from './styles';

class VkGroup extends Component {
    getRendomSubscribers = (subscribers, count) => {
        if (!subscribers) return [];
        let result = subscribers.sort(() => (0.5-Math.random())).slice(0, count);
        return result;
    };

    render() {
        const {classes, data} = this.props;
        const subscribers = this.getRendomSubscribers(data.data.subscribers, 12);
        const subscribersCount = data.data.subscribers ? data.data.subscribers.length : 0;
        return (
            <Card className={classes.card}>
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
                        title={<div className={classes.title}>{data.data.title}</div>}
                        subheader={<div className={classes.subheading}>{`${subscribersCount} подписчиков`}</div>}
                    />
                </a>
                <Divider className={classes.divider}/>
                <CardContent>
                    <Grid container>
                        {subscribers &&
                        subscribers.map(subscriber =>
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
                                <Button className={classes.button}>
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