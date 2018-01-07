import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardContent} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import styles from './styles';

class ScoresTable extends Component {
    renderRow = row => <Grid container className={row.thisIsUs ? this.props.classes.thisIsUs : undefined}>
        <Grid item xs={1}>
            {row.place}
        </Grid>
        <Grid item xs={8}>
            {row.name}
        </Grid>
        <Grid item xs={2}>
            {row.games}
        </Grid>
        <Grid item xs={1}>
            {row.scores}
        </Grid>
    </Grid>;

    render() {
        const {classes, data} = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <div className={classes.header}>
                        {this.renderRow({place: 'М', name: 'Команда', games: 'И', scores: 'О'})}
                    </div>
                    {data.map((row, i) => this.renderRow({...row, place: i + 1}))}
                </CardContent>
            </Card>
        );
    }
}

ScoresTable.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
};

export default withStyles(styles)(ScoresTable);