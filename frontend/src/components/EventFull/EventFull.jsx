import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';

class EventFull extends Component {
    render() {
        const { data } = this.props;
        return (
            <Card>
                <CardContent style={{height: 100}}>
                    {data.time} - {data.home} - {data.score} - {data.away} - {data.date}
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