import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from 'material-ui/Grid';
import EventFull from '../../components/EventFull/EventFull';
import EventShort from '../../components/EventShort/EventShort';
import ScoresTable from '../../components/ScoresTable/ScoresTable';
import VkGroup from '../../components/VkGroup/VkGroup';

import {fetchCommonScoresTableData, clearCommonScoresTableData} from '../../actions/actions';

class Widgets extends Component {
    componentWillMount() {
        this.props.fetchCommonScoresTableData();
    }

    componentWillUnmount() {
        this.props.clearCommonScoresTableData();
    }

    render() {
        const {scoresTable} = this.props;
        return (
            <Grid container>
                <Grid item xs={12}>
                    <EventFull/>
                </Grid>
                <Grid item xs={12}>
                    <EventShort/>
                </Grid>
                <Grid item xs={12}>
                    <EventShort/>
                </Grid>
                {scoresTable.data.length > 0 &&
                    <Grid item xs={12}>
                        <ScoresTable data={scoresTable.data}/>
                    </Grid>
                }
                <Grid item xs={12}>
                    <VkGroup/>
                </Grid>
            </Grid>
        );
    }
}

export default connect(
    state => ({
        scoresTable: state.scoresTable
    }),
    dispatch => ({
        fetchCommonScoresTableData: () => dispatch(fetchCommonScoresTableData()),
        clearCommonScoresTableData: () => dispatch(clearCommonScoresTableData())
    })
)(Widgets);