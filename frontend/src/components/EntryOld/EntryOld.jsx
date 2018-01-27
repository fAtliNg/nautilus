import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import styles from './styles';

const MAX_LENGTH_SUMMARY = 100;

class EntryOld extends React.Component {
    render() {
        const { classes, summary, date } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        subheader={<div className={classes.title}>{date}</div>}
                    />
                    <CardContent className={classes.content}>
                        <div className={classes.subheading}>
                            {summary.length > MAX_LENGTH_SUMMARY ? summary.substring(0, MAX_LENGTH_SUMMARY)+'...' : summary}
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

EntryOld.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string, // заголовок
    image: PropTypes.string, // путь к изображению
    summary: PropTypes.string, // краткое описание
    article: PropTypes.array, // полное описание
    date: PropTypes.string // дата
};

export default withStyles(styles)(EntryOld);