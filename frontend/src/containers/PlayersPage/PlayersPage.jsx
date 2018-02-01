import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from 'material-ui/Grid';
import CardPlayer from '../../components/CardPlayer/CardPlayer';
import Pending from '../../components/Pending/Pending';

import {fetchPlayersPageData, clearPlayersPageData} from '../../actions/actions';

class PlayersPage extends Component {
    componentWillMount() {
        this.props.fetchPlayersPageData();
    }

    componentWillUnmount() {
        this.props.clearPlayersPageData();
    }

    getPlayers = () => {
        const {players} = this.props;
        const roles = {
            'вратарь': 4,
            'защитник': 3,
            'полузащитник': 2,
            'нападающий': 1,
            'универсал': 0
        };
        return players.sort((l, r) => {
            let result = 0;
            if (roles[l.role] > roles[r.role]) result = -1;
            if (roles[l.role] < roles[r.role]) result = 1;
            if (roles[l.role] === roles[r.role]) {
                if (l.number > r.number) return 1;
                if (l.number < r.number) return -1;
            }
            return result;
        });
    };

    render() {
        const {pending} = this.props;
        return (
            <Pending pending={pending}>
                <Grid container>
                    {this.getPlayers()
                        .map(player =>
                            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key={player.number}>
                                <CardPlayer data={player}/>
                            </Grid>
                    )}
                </Grid>
            </Pending>
        );
    }
}

export default connect(
    state => ({
        players: state.playersPage.players,
        pending: state.playersPage.pending
    }),
    dispatch => ({
        fetchPlayersPageData: () => dispatch(fetchPlayersPageData()),
        clearPlayersPageData: () => dispatch(clearPlayersPageData())
    })
)(PlayersPage);