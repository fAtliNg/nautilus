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

const styles = {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    drawer: {
        margin: 8
    }
};

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
        <AppBar position="static">
            <Toolbar>
                <IconButton className={this.props.classes.menuButton} color="contrast" aria-label="Menu"
                            onClick={() => {
                                this.handleToggle()
                            }}>
                    <MenuIcon/>
                </IconButton>
                <Typography type="title" color="inherit" className={this.props.classes.flex}>
                    {this.titles[this.state.activeLink]}
                </Typography>
                {/*<Button color="contrast">Login</Button>*/}
            </Toolbar>
        </AppBar>;

    render() {
        const {classes} = this.props;
        return (
            <div>
                {this.renderAppBar()}
                <Drawer
                    classes={{
                        paper: classes.drawer
                    }}
                    docked={false}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    {this.renderAppBar()}
                    <NavItem to="/news" handleClose={this.handleClose}>
                        Новости
                    </NavItem>
                    <NavItem to="/table" handleClose={this.handleClose}>
                        Таблица
                    </NavItem>
                    <NavItem to="/matches" handleClose={this.handleClose}>
                        Матчи
                    </NavItem>
                    <NavItem to="/players" handleClose={this.handleClose}>
                        Игроки
                    </NavItem>
                    <NavItem to="/club" handleClose={this.handleClose}>
                        О клубе
                    </NavItem>
                    <NavItem to="/photo" handleClose={this.handleClose}>
                        Фото
                    </NavItem>
                    <NavItem to="/video" handleClose={this.handleClose}>
                        Видео
                    </NavItem>
                </Drawer>
            </div>
        );
    }
}

NavigationMobile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationMobile);