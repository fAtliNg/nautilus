import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom'
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    media: {
        height: 200
    }
});

class GalleryPreview extends Component {
    render() {
        const {classes, data} = this.props;
        return (
            <Link to={`/photo/${data.id}`} style={{ textDecoration: 'none' }}>
            <Card>
                <CardMedia
                    className={classes.media}
                    image={data.previewImage}
                    title={data.name}
                />
                <CardContent>
                    <Typography type="headline" component="h2">
                        {data.name}
                    </Typography>
                    <Typography component="p">
                        {data.description}
                    </Typography>
                </CardContent>
            </Card>
            </Link>
        );
    }
}

GalleryPreview.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
};

export default withStyles(styles)(GalleryPreview);