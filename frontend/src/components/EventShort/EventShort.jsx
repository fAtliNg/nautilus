import React, {Component} from 'react';
import Card, { CardContent } from 'material-ui/Card';

class EventShort extends Component {
    componentWillMount() {
        console.log('EventShort');
    }
    render() {
        return (
            <Card>
                <CardContent>
                    EventShort
                </CardContent>
            </Card>
        );
    }
}

export default EventShort;