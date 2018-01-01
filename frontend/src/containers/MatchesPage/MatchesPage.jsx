import React, {Component} from 'react';
import {connect} from 'react-redux';
import EventFull from '../../components/EventFull/EventFull';
import EventShort from '../../components/EventShort/EventShort';

import {fetchEventsShortData, clearEventsShortData} from '../../actions/actions';

class MatchesPage extends Component {
    componentWillMount() {
        this.props.fetchEventsShortData();
    }

    componentWillUnmount() {
        this.props.clearEventsShortData();
    }

    render() {
        const {eventsShort} = this.props;
        return (
            <div>
                <EventFull/>
                {eventsShort.data.map((event, i) => <EventShort key={i} data={event}/>)}
            </div>
        )
    }
}

export default connect(
    state => ({
        eventsShort: state.eventsShort
    }),
    dispatch => ({
        fetchEventsShortData: () => dispatch(fetchEventsShortData()),
        clearEventsShortData: () => dispatch(clearEventsShortData()),
    })
)(MatchesPage);