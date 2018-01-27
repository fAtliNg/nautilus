import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardHeader, CardContent, CardActions} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import styles from './styles';

const MAX_LENGTH_SUMMARY = 100;

class EntryNew extends React.Component {
    render() {
        const {classes, image, summary, article, date} = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        title={<div className={classes.header}>{date}</div>}
                    />
                    <CardContent className={classes.content}>
                        <div className={classes.img}>
                            <img
                                src={image}
                                style={{
                                    width: "100%",
                                    height: "auto"
                                }}
                                alt="image"
                            />
                        </div>
                        <Typography component="p" className={classes.content}>
                            {summary.length > MAX_LENGTH_SUMMARY ? summary.substring(0, MAX_LENGTH_SUMMARY) + '...' : summary}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

EntryNew.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string, // заголовок
    image: PropTypes.string, // путь к изображению
    summary: PropTypes.string, // краткое описание
    article: PropTypes.array, // полное описание
    date: PropTypes.string // дата
};

export default withStyles(styles)(EntryNew);