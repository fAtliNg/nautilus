import React, {Component} from 'react'
import {connect} from 'react-redux'
import Grid from 'material-ui/Grid'
import 'react-image-gallery/styles/css/image-gallery.css'
import GalleryPreview from '../../components/GalleryPreview/GalleryPreview'
import Pending from '../../components/Pending/Pending'

import {fetchVideoPageAlbumsData, clearVideoPageAlbumsData} from '../../actions/actions'

class PhotoPage extends Component {
  componentWillMount () {
    this.props.fetchVideoPageAlbumsData()
  }

  componentWillUnmount () {
    this.props.clearVideoPageAlbumsData()
  }

  render () {
    const {albums, pending} = this.props
    return (
      <Pending pending={pending}>
        <Grid container>
          {albums.map(album =>
            <Grid key={album.id} item xs={12} sm={6} md={6} lg={4} xl={4}>
              <GalleryPreview data={album} path='video' />
            </Grid>
                    )}
        </Grid>
      </Pending>
    )
  }
}

export default connect(
    state => ({
      albums: state.videoPage.albums,
      pending: state.videoPage.pending
    }),
    dispatch => ({
      fetchVideoPageAlbumsData: () => dispatch(fetchVideoPageAlbumsData()),
      clearVideoPageAlbumsData: () => dispatch(clearVideoPageAlbumsData())
    })
)(PhotoPage)
