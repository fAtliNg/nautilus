import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import EventFull from '../EventFull/EventFull';
import EventShort from '../EventShort/EventShort';
import ScoresTable from '../ScoresTable/ScoresTable';
import VkGroup from '../VkGroup/VkGroup';

class Widgets extends Component {
    render() {
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
                <Grid item xs={12}>
                    <ScoresTable/>
                </Grid>
                <Grid item xs={12}>
                    <VkGroup/>
                </Grid>
            </Grid>
        );
    }
}

export default Widgets;