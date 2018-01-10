import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom'
import {withStyles} from 'material-ui/styles';
import styles from './styles';
import banner from './banner.jpeg';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: window.location.pathname === '/' ? '/news' : window.location.pathname
        }
    }

    onChangePage = url => {
        this.setState({
            activeLink: url
        });
    };

    renderMenuItem = (url, label) => <Link to={url} className={this.props.classes.link}>
        <Button
            className={this.props.classes.menuItem}
            onClick={() => {this.onChangePage(url)}}
        >
            {label}
        </Button>
        {this.state.activeLink === url &&
        <div className={this.props.classes.footerButton}/>
        }
    </Link>;

    render() {
        const {classes} = this.props;
        return (
            <div>
                <img
                    alt="header"
                    src={banner}
                    className={classes.header}
                />
                <AppBar position="static">
                    <Toolbar classes={{root: classes.toolbar}}>
                        {this.renderMenuItem('/news', 'Новости')}
                        {this.renderMenuItem('/players', 'Игроки')}
                        {this.renderMenuItem('/club', 'О клубе')}
                        {this.renderMenuItem('/photo', 'Фото')}
                        {this.renderMenuItem('/video', 'Видео')}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Navigation);