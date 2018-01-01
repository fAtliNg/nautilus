import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardPlayer from '../../components/CardPlayer/CardPlayer';

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
                <CardPlayer/>
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