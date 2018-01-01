import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from 'material-ui/Grid';
import CardPlayer from '../../components/CardPlayer/CardPlayer';

import {fetchPlayersPageData, clearPlayersPageData} from '../../actions/actions';

class PlayersPage extends Component {
    componentWillMount() {
        this.props.fetchPlayersPageData();
    }

    componentWillUnmount() {
        this.props.clearPlayersPageData();
    }

    render() {
        const {players} = this.props;
        return (
            <Grid container>
                {players.map(player =>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <CardPlayer key={player.id} data={player}/>
                    </Grid>
                )}
            </Grid>
        );
    }
}

export default connect(
    state => ({
        players: state.playersPage.players
    }),
    dispatch => ({
        fetchPlayersPageData: () => dispatch(fetchPlayersPageData()),
        clearPlayersPageData: () => dispatch(clearPlayersPageData())
    })
)(PlayersPage);