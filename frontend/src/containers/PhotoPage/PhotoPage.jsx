import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from 'material-ui/Grid';
import "react-image-gallery/styles/css/image-gallery.css";
import GalleryPreview from '../../components/GalleryPreview/GalleryPreview'

import {fetchPhotoPageAlbumsData, clearPhotoPageAlbumsData} from '../../actions/actions';

class PhotoPage extends Component {
    componentWillMount() {
        this.props.fetchPhotoPageAlbumsData();
    }

    componentWillUnmount() {
        this.props.clearPhotoPageAlbumsData();
    }

    render() {
        const {albums} = this.props;
        return (
            <Grid container>
                {albums.map(album =>
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                        <GalleryPreview key={album.id} data={album}/>
                    </Grid>
                )}
            </Grid>
        );
    }
}

export default connect(
    state => ({
        albums: state.photoPage.albums
    }),
    dispatch => ({
        fetchPhotoPageAlbumsData: () => dispatch(fetchPhotoPageAlbumsData()),
        clearPhotoPageAlbumsData: () => dispatch(clearPhotoPageAlbumsData())
    })
)(PhotoPage);