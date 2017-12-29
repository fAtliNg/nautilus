import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {MenuItem} from 'material-ui';

class NavItem extends Component {
    static propTypes = {
        to: PropTypes.string.isRequired,
        handleClose: PropTypes.func.isRequired
    };

    render() {
        const {handleClose, to, children} = this.props;
        return <Link to={to}>
            <MenuItem onTouchTap={() => {handleClose(to)}}>
                {children}
            </MenuItem>
        </Link>;
    }
}

export default NavItem;