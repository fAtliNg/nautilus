import React, {Component} from 'react';
import {connect} from 'react-redux';
import ScoresTable from '../../components/ScoresTable/ScoresTable';

import {fetchCommonScoresTableData, clearCommonScoresTableData} from '../../actions/actions';

class ScoresTablePage extends Component {
    componentWillMount() {
        this.props.fetchCommonScoresTableData();
    }

    componentWillUnmount() {
        this.props.clearCommonScoresTableData();
    }

    render() {
        const {scoresTable} = this.props;
        return <ScoresTable data={scoresTable.data}/>;
    }
}

export default connect(
    state => ({
        scoresTable: state.scoresTable
    }),
    dispatch => ({
        fetchCommonScoresTableData: () => dispatch(fetchCommonScoresTableData()),
        clearCommonScoresTableData: () => dispatch(clearCommonScoresTableData()),
    })
)(ScoresTablePage);