import React, {Component} from 'react';
import {connect} from 'react-redux';

// import {fetchHomePageData, clearHomePageData} from '../../actions/actions';

class PlayersPage extends Component {
    componentWillMount() {
        // this.props.fetchHomePageData();
    }

    componentWillUnmount() {
        // this.props.clearHomePageData();
    }

    render() {
        return (
            <div>
                Players page
            </div>
        );
    }
}

export default connect(
    state => ({
    }),
    dispatch => ({
    })
)(PlayersPage);