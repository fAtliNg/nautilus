import React, {Component} from 'react';
import {connect} from 'react-redux';
import Pending from '../../components/Pending/Pending';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import {fetchPhotosData, clearPhotosData} from '../../actions/actions';

class GalleryPage extends Component {
    componentWillMount() {
        this.props.fetchPhotosData(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearPhotosData();
    }

    render() {
        const {photos} = this.props;
        return (
            <Pending pending={photos.pending}>
                <ImageGallery items={photos}/>
            </Pending>
        );
    }
}

export default connect(
    state => ({
        photos: state.photoPage.photos
    }),
    dispatch => ({
        fetchPhotosData: id => dispatch(fetchPhotosData(id)),
        clearPhotosData: () => dispatch(clearPhotosData())
    })
)(GalleryPage);