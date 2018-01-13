import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import NavItem from './NavItem/NavItem';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import EventIcon from 'material-ui-icons/Event';
import AssessmentIcon from 'material-ui-icons/Assessment';
import VideogameAssetIcon from 'material-ui-icons/VideogameAsset';
import PeopleIcon from 'material-ui-icons/People';
import InfoIcon from 'material-ui-icons/Info';
import PhotoIcon from 'material-ui-icons/Photo';
import VideocamIcon from 'material-ui-icons/Videocam';

// import styles from './styles';

class NavigationMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            activeLink: window.location.pathname === '/' ? '/news' : window.location.pathname
        };
    }

    titles = {
        '/news': 'Новости',
        '/table': 'Таблица',
        '/matches': 'Матчи',
        '/players': 'Игроки',
        '/club': 'О клубе',
        '/photo': 'Фото',
        '/video': 'Видео'
    };

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = url => this.setState({
        open: false,
        activeLink: url
    });

    renderAppBar = () =>
        <AppBar position="static" /*className={this.props.classes.appBar}*/>
            <Toolbar>
                <IconButton /*className={this.props.classes.menuButton}*/ color="contrast" aria-label="Menu"
                            onClick={() => {
                                this.handleToggle()
                            }}>
                    <MenuIcon/>
                </IconButton>
                <Typography type="title" color="inherit" /*className={this.props.classes.flex}*/>
                    {this.titles[this.state.activeLink]}
                </Typography>
                {/*<Button color="contrast">Login</Button>*/}
            </Toolbar>
        </AppBar>;

    render() {
        // const {classes} = this.props;
        return (
            <div>
                {this.renderAppBar()}
                <Drawer
                    // classes={{
                    //     paper: classes.drawer
                    // }}
                    open={this.state.open}
                >
                    {this.renderAppBar()}
                    <NavItem to="/news" handleClose={this.handleClose}>
                        <ListItemIcon>
                            <EventIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="Новости" />
                    </NavItem>
                    <NavItem to="/table" handleClose={this.handleClose}>
                        <ListItemIcon>
                            <AssessmentIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="Таблица" />
                    </NavItem>
                    <NavItem to="/matches" handleClose={this.handleClose}>
                        <ListItemIcon>
                            <VideogameAssetIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="Матчи" />
                    </NavItem>
                    <NavItem to="/players" handleClose={this.handleClose}>
                        <ListItemIcon>
                            <PeopleIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="Игроки" />
                    </NavItem>
                    <NavItem to="/club" handleClose={this.handleClose}>
                        <ListItemIcon>
                            <InfoIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="О клубе" />
                    </NavItem>
                    <NavItem to="/photo" handleClose={this.handleClose}>
                        <ListItemIcon>
                            <PhotoIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="Фото" />
                    </NavItem>
                    <NavItem to="/video" handleClose={this.handleClose}>
                        <ListItemIcon>
                            <VideocamIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="Видео" />
                    </NavItem>
                </Drawer>
            </div>
        );
    }
}

// NavigationMobile.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(NavigationMobile);
export default NavigationMobile;