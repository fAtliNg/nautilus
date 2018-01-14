import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {Link} from 'react-router-dom'
import Card, {CardMedia, CardContent} from 'material-ui/Card';
import styles from './styles';

class GalleryPreview extends Component {
    render() {
        const {classes, data, path} = this.props;
        return (
            <Link to={`/${path}/${data.id}`} style={{textDecoration: 'none'}}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={data.previewImage}
                        title={data.name}
                    />
                    <CardContent>
                        <div className={classes.title}>
                            {data.name}
                        </div>
                        <div className={classes.subheading}>
                            {data.description}
                        </div>
                    </CardContent>
                </Card>
            </Link>
        );
    }
}

GalleryPreview.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired
};

export default withStyles(styles)(GalleryPreview);