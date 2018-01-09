import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import styles from './styles';

class Entry extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const { classes, title, image, summary, article, date } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                <img
                                    src={"https://pp.userapi.com/c837425/v837425654/4959c/4nWFZ1fwAGw.jpg"}
                                    style={{
                                        width: 40,
                                        height: 40
                                    }}
                                    alt="avatar"
                                />
                            </Avatar>
                        }
                        action={
                            <IconButton color="contrast">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={<div className={classes.header}>{title}</div>}
                        subheader={<div className={classes.subheader}>{date}</div>}
                    />
                    <CardContent className={classes.content}>
                        <Typography component="p" className={classes.content}>
                            <img
                                src={image}
                                style={{
                                    width: "100%"
                                }}
                                alt="image"
                            />
                            {summary}
                        </Typography>
                    </CardContent>
                    <CardActions disableActionSpacing >
                        <IconButton aria-label="Add to favorites" color="contrast">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="Share" color="contrast">
                            <ShareIcon />
                        </IconButton>
                        <div className={classes.flexGrow} />
                        <IconButton
                            color="contrast"
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            {article.map(paragraph => (
                                <Typography key={paragraph} paragraph className={classes.content}>
                                    {paragraph}
                                </Typography>
                            ))}
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        );
    }
}

Entry.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string, // заголовок
    image: PropTypes.string, // путь к изображению
    summary: PropTypes.string, // краткое описание
    article: PropTypes.array, // полное описание
    date: PropTypes.string // дата
};

export default withStyles(styles)(Entry);