import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {MenuItem} from 'material-ui';
import Divider from 'material-ui/Divider';
import KeyboardArrowRightIcon from 'material-ui-icons/KeyboardArrowRight';

class NavItem extends Component {
    static propTypes = {
        to: PropTypes.string.isRequired,
        handleClose: PropTypes.func.isRequired
    };

    render() {
        const {handleClose, to, children} = this.props;
        return <Link to={to}>
            <MenuItem>
                {children}
                <KeyboardArrowRightIcon/>
            </MenuItem>
            <Divider/>
        </Link>;
    }
}

export default NavItem;