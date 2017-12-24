import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <div margin="10px">
                <Link to='/news'>Новости</Link>
                <Link to='/players'>Игроки</Link>
                <Link to='/club'>О клубе</Link>
                <Link to='/photo'>Фото</Link>
                <Link to='/video'>Видео</Link>
            </div>
        );
    }
}

export default Navigation;