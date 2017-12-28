import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from 'material-ui/Grid';
import EventFull from '../../components/EventFull/EventFull';
import EventShort from '../../components/EventShort/EventShort';
import ScoresTable from '../../components/ScoresTable/ScoresTable';
import VkGroup from '../../components/VkGroup/VkGroup';

import {fetchCommonScoresTableData, clearCommonScoresTableData, fetchEventsShortData, clearEventsShortData} from '../../actions/actions';

class Widgets extends Component {
    componentWillMount() {
        this.props.fetchCommonScoresTableData();
        this.props.fetchEventsShortData();
    }

    componentWillUnmount() {
        this.props.clearCommonScoresTableData();
        this.props.clearEventsShortData();
    }

    render() {
        const {scoresTable, eventsShort} = this.props;
        return (
            <Grid container>
                <Grid item xs={12}>
                    <EventFull/>
                </Grid>
                {eventsShort.data.length > 0 &&
                    <Grid item xs={12}>
                        <EventShort
                            data={eventsShort.data[0]}
                        />
                    </Grid>
                }
                {eventsShort.data.length > 1 &&
                    <Grid item xs={12}>
                        <EventShort
                            data={eventsShort.data[1]}
                        />
                    </Grid>
                }
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
        scoresTable: state.scoresTable,
        eventsShort: state.eventsShort
    }),
    dispatch => ({
        fetchCommonScoresTableData: () => dispatch(fetchCommonScoresTableData()),
        clearCommonScoresTableData: () => dispatch(clearCommonScoresTableData()),
        fetchEventsShortData: () => dispatch(fetchEventsShortData()),
        clearEventsShortData: () => dispatch(clearEventsShortData())
    })
)(Widgets);