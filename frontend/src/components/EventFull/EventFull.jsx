import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

class EventFull extends Component {
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
                            <br/>РГУПС, 5-я лига
                        </Typography>
                    </Grid>
                        <Grid container justify={'center'}>
                            <Typography type={"title"}>
                                <br/>
                            {data.home}  {data.score}  {data.away}
                            </Typography>
                        </Grid>
                    </Grid>
            </CardContent>
            </Card>
        );
    }
}

EventFull.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
};

export default EventFull;