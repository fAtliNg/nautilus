import React, {Component} from 'react';
import {connect} from 'react-redux';

// import {fetchHomePageData, clearHomePageData} from '../../actions/actions';

class AboutClubPage extends Component {
    componentWillMount() {
        // this.props.fetchHomePageData();
    }

    componentWillUnmount() {
        // this.props.clearHomePageData();
    }

    render() {
        return (
            <div>
                About club page
            </div>
        );
    }
}

export default connect(
    state => ({
    }),
    dispatch => ({
    })
)(AboutClubPage);