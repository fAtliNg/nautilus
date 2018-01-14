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

    render() {
        const {players, pending} = this.props;
        return (
            <Pending pending={pending}>
                <Grid container>
                    {players.map(player =>
                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                            <CardPlayer key={player.id} data={player}/>
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