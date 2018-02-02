import React, {Component} from 'react'
import {connect} from 'react-redux'
import Grid from 'material-ui/Grid'
import EventFull from '../../components/EventFull/EventFull'
import EventShort from '../../components/EventShort/EventShort'
import ScoresTable from '../../components/ScoresTable/ScoresTable'
import VkGroup from '../../components/VkGroup/VkGroup'
import Pending from '../../components/Pending/Pending'

import {
    fetchCommonScoresTableData,
    clearCommonScoresTableData,
    fetchEventsData,
    clearEventsData,
    fetchVkData,
    clearVkData
} from '../../actions/actions'

class Widgets extends Component {
  componentWillMount () {
    this.props.fetchCommonScoresTableData()
    this.props.fetchEventsData()
    this.props.fetchVkData()
  }

  componentWillUnmount () {
    this.props.clearCommonScoresTableData()
    this.props.clearEventsData()
    this.props.clearVkData()
  }

  render () {
    const {scoresTable, events, vk} = this.props
    return (
      <Grid container>
        <Grid item xs={12}>
          <Pending pending={events.pending}>
            <EventFull
              data={events.fullEvent}
                        />
          </Pending>
        </Grid>
        <Pending pending={events.pending}>
          {events.shortEvents.map(event =>
            <Grid item xs={12}>
              <EventShort
                data={event}
                            />
            </Grid>
                    )}
        </Pending>
        <Pending pending={scoresTable.pending}>
          <Grid item xs={12}>
            {scoresTable.data.length > 0 &&
            <ScoresTable data={scoresTable.data} />
                        }
          </Grid>
        </Pending>
        <Pending pending={vk.pending}>
          <Grid item xs={12}>
            <VkGroup data={vk} />
          </Grid>
        </Pending>
      </Grid>
    )
  }
}

export default connect(
    state => ({
      scoresTable: state.scoresTable,
      events: state.events,
      vk: state.vk
    }),
    dispatch => ({
      fetchCommonScoresTableData: () => dispatch(fetchCommonScoresTableData()),
      clearCommonScoresTableData: () => dispatch(clearCommonScoresTableData()),
      fetchEventsData: () => dispatch(fetchEventsData()),
      clearEventsData: () => dispatch(clearEventsData()),
      fetchVkData: () => dispatch(fetchVkData()),
      clearVkData: () => dispatch(clearVkData())
    })
)(Widgets)
