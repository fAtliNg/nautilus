import React, {Component} from 'react';
import {connect} from 'react-redux';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles.css";

import {fetchVideosData, clearVideosData} from '../../actions/actions';

class GalleryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFullscreenButton: true,
            showGalleryFullscreenButton: true,
            showPlayButton: true,
            showGalleryPlayButton: true,
            showVideo: {},
        };
    }

    componentWillMount() {
        this.props.fetchVideosData(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearVideosData();
    }

    onSlide(index) {
        this.resetVideo();
    }

    resetVideo() {
        this.setState({showVideo: {}});

        if (this.state.showPlayButton) {
            this.setState({showGalleryPlayButton: true});
        }

        if (this.state.showFullscreenButton) {
            this.setState({showGalleryFullscreenButton: true});
        }
    }

    toggleShowVideo(url) {
        this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
        this.setState({
            showVideo: this.state.showVideo
        });

        if (this.state.showVideo[url]) {
            if (this.state.showPlayButton) {
                this.setState({showGalleryPlayButton: false});
            }

            if (this.state.showFullscreenButton) {
                this.setState({showGalleryFullscreenButton: false});
            }
        }
    }

    renderVideo = item => {
        return <div className='image-gallery-image'>
            {
                this.state.showVideo[item.embedUrl] ?
                    <div className='video-wrapper'>
                        <a
                            className='close-video'
                            onClick={() => {
                                this.toggleShowVideo(item.embedUrl)
                            }}
                        >
                        </a>
                        <iframe
                            src={item.embedUrl}
                            frameBorder='0'
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                    :
                    <a onClick={() => {
                        this.toggleShowVideo(item.embedUrl)
                    }}>
                        <div className='play-button'></div>
                        <img src={item.original}/>
                        {
                            item.description &&
                            <span
                                className='image-gallery-description'
                                style={{right: '0', left: 'initial'}}
                            >
                                {item.description}
                            </span>
                        }
                    </a>
            }
        </div>;
    }

    render() {
        const {videos} = this.props;
        return (
            <div className="app">
            <ImageGallery
                items={videos}
                disableSwipe={true}
                showBullets={false}
                showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
                showPlayButton={false}
                showThumbnails={true}
                showIndex={false}
                showNav={true}
                onSlide={this.onSlide.bind(this)}
                renderItem={this.renderVideo.bind(this)}
            />
            </div>
        );
    }
}

export default connect(
    state => ({
        videos: state.videoPage.videos
    }),
    dispatch => ({
        fetchVideosData: () => dispatch(fetchVideosData()),
        clearVideosData: () => dispatch(clearVideosData())
    })
)(GalleryPage);