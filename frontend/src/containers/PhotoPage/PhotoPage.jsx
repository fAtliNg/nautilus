import React, {Component} from 'react';
import {connect} from 'react-redux';

// import {fetchHomePageData, clearHomePageData} from '../../actions/actions';

class PhotoPage extends Component {
    componentWillMount() {
        // this.props.fetchHomePageData();
    }

    componentWillUnmount() {
        // this.props.clearHomePageData();
    }

    render() {
        return (
            <div>
                Photo page
            </div>
        );
    }
}

export default connect(
    state => ({
    }),
    dispatch => ({
    })
)(PhotoPage);