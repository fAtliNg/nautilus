import React, {Component} from 'react';
import {connect} from 'react-redux';
import EventFull from '../../components/EventFull/EventFull';
import EventShort from '../../components/EventShort/EventShort';

import {fetchEventsData, clearEventsData} from '../../actions/actions';

class MatchesPage extends Component {
    componentWillMount() {
        this.props.fetchEventsData();
    }

    componentWillUnmount() {
        this.props.clearEventsData();
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
        fetchEventsData: () => dispatch(fetchEventsData()),
        clearEventsData: () => dispatch(clearEventsData()),
    })
)(MatchesPage);