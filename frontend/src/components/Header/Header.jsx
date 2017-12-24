import React, {Component} from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Navigation from '../Navigation/Navigation';

class Header extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardContent>
                        <Navigation/>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Header;