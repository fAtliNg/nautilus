import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from 'material-ui/Grid';
import EventFull from '../../components/EventFull/EventFull';
import EventShort from '../../components/EventShort/EventShort';
import Pending from '../../components/Pending/Pending';

import {fetchEventsData, clearEventsData} from '../../actions/actions';

class MatchesPage extends Component {
    componentWillMount() {
        this.props.fetchEventsData();
    }

    componentWillUnmount() {
        this.props.clearEventsData();
    }

    render() {
        const {events} = this.props;
        return (
            <Pending pending={events.pending}>
                <Grid container justify="center">
                    <Grid item xs={12}>
                    <EventFull data={events.fullEvent}/>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    {events.shortEvents.map((event, i) =>
                        <Grid item xs={12} key={i}>
                            <EventShort data={event}/>
                        </Grid>
                    )}
                </Grid>
            </Pending>
        )
    }
}

export default connect(
    state => ({
        events: state.events
    }),
    dispatch => ({
        fetchEventsData: () => dispatch(fetchEventsData()),
        clearEventsData: () => dispatch(clearEventsData()),
    })
)(MatchesPage);