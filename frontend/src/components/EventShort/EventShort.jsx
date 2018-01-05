import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

class EventShort extends Component {
    render() {
        const { data } = this.props;
        return (
            <Card>
                <CardContent>
                    <Grid container spacing={8}>
                        <Grid container justify={'space-between'}>
                            <Typography type={"subheading"}>
                                {data.time}
                            </Typography>
                            <Typography type={"subheading"}>
                                {data.date}
                            </Typography>
                        </Grid>
                        <Grid container justify={'center'}>
                            <Typography type={"subheading"}>
                                {data.home}  {data.score}  {data.away}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

EventShort.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
};
export default EventShort;