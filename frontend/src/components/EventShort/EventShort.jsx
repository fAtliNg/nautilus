import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';

class EventShort extends Component {
    render() {
        const { data } = this.props;
        return (
            <Card>
                <CardContent>
                    {data.time} - {data.home} - {data.score} - {data.away} - {data.date}
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