import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom'
import {withStyles} from 'material-ui/styles';

const styles = {
    toolbar: {
        minHeight: 0,
        backgroundColor: "#042554"
    }
};

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

    renderMenuItem = (url, label) => <Link to={url} style={{textDecoration: "none"}}>
        <Button
            color={"contrast"}
            onClick={() => {this.onChangePage(url)}}
        >
            {label}
        </Button>
        {this.state.activeLink === url &&
        <div style={{height: 4, backgroundColor: "#ffffff"}}/>
        }
    </Link>;

    render() {
        const {classes} = this.props;
        return (
            <div>
                <img style={{width: "100%"}} src="https://sun1-1.userapi.com/c639317/v639317161/5c8c5/ViE8kREWpkg.jpg"/>
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