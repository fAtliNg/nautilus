import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardHeader, CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import styles from './styles';
import ReadMore from './ReadMore';

class Entry extends React.Component {
    state = {expanded: false};

    handleReadMore = () => {
        this.setState({expanded: true});
    };

    renderSummary = summary => {
        const MAX_LENGTH_SUMMARY = 100;
        let result = summary;
        if (summary.length > MAX_LENGTH_SUMMARY && !this.state.expanded) {
            result = <div>
                {summary.substring(0, MAX_LENGTH_SUMMARY) + '...'}
                <ReadMore onClick={this.handleReadMore}/>
            </div>
        }
        return result;
    };

    render() {
        const {classes, image, summary, article, date} = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        title={<div className={classes.header}>{date}</div>}
                    />
                    <CardContent className={classes.content}>
                        <Typography component="p" className={classes.content}>
                            <div className={classes.img}>
                                <img
                                    src={image}
                                    style={{
                                        width: "100%"
                                    }}
                                    alt="image"
                                />
                            </div>
                            {this.renderSummary(summary)}
                        </Typography>
                    </CardContent>
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