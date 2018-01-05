import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from 'material-ui/Grid';
import EventFull from '../../components/EventFull/EventFull';
import EventShort from '../../components/EventShort/EventShort';
import ScoresTable from '../../components/ScoresTable/ScoresTable';
import VkGroup from '../../components/VkGroup/VkGroup';

import {fetchCommonScoresTableData,
    clearCommonScoresTableData,
    // fetchEventsData,
    // fetchEventFull,
    fetchEvents,
    clearEventsData,
    fetchVkData,
    clearVkData
} from '../../actions/actions';

class Widgets extends Component {
    componentWillMount() {
        this.props.fetchCommonScoresTableData();
        // this.props.fetchEventsData();
        // this.props.fetchEventFull();
        this.props.fetchEvents();
        this.props.fetchVkData();
    }

    componentWillUnmount() {
        this.props.clearCommonScoresTableData();
        this.props.clearEventsData();
        this.props.clearVkData();
    }

    render() {
        const {scoresTable, events, vk, eventFull} = this.props;
        return (
            <Grid container>
                <Grid item xs={12}>
                    <EventFull
                        data={eventFull.data}
                    />
                </Grid>
                {events.data.length > 1 &&
                    <Grid item xs={12}>
                        <EventShort
                            data={events.data[1]}
                        />
                    </Grid>
                }
                {events.data.length > 2 &&
                    <Grid item xs={12}>
                        <EventShort
                            data={events.data[2]}
                        />
                    </Grid>
                }
                {scoresTable.data.length > 0 &&
                    <Grid item xs={12}>
                        <ScoresTable data={scoresTable.data}/>
                    </Grid>
                }
                <Grid item xs={12}>
                    <VkGroup data={vk}/>
                </Grid>
            </Grid>
        );
    }
}

export default connect(
    state => ({
        scoresTable: state.scoresTable,
        events: state.events,
        eventFull: state.eventFull,
        vk: state.vk
    }),
    dispatch => ({
        fetchCommonScoresTableData: () => dispatch(fetchCommonScoresTableData()),
        clearCommonScoresTableData: () => dispatch(clearCommonScoresTableData()),
        // fetchEventsData: () => dispatch(fetchEventsData()),
        // fetchEventFull: () => dispatch(fetchEventFull()),
        fetchEvents: () => dispatch(fetchEvents()),
        clearEventsData: () => dispatch(clearEventsData()),
        fetchVkData: () => dispatch(fetchVkData()),
        clearVkData: () => dispatch(clearVkData())
    })
)(Widgets);