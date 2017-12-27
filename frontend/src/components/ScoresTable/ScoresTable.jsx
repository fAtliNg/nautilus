import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardContent} from 'material-ui/Card';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    card: {
        minWidth: 250
    },
    tableCell: {
        padding: 0,
        textAlign: 'left'
    },
    tableCellId: {
        padding: 0,
        paddingRight: 16,
        textAlign: 'left'
    },
    tableCellTeam: {
        padding: 0,
        width: '100%',
        textAlign: 'left'
    },
    tableCellGames: {
        padding: 16,
        paddingRight: 0,
        textAlign: 'left'
    }
});

class ScoresTable extends Component {
    render() {
        const {classes, data} = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell numeric className={classes.tableCellId}>М</TableCell>
                                <TableCell className={classes.tableCellTeam}>Команда</TableCell>
                                <TableCell numeric className={classes.tableCellGames}>И</TableCell>
                                <TableCell numeric>О</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell className={classes.tableCellId}>{i+1}</TableCell>
                                    <TableCell numeric className={classes.tableCellTeam}>{row.name}</TableCell>
                                    <TableCell numeric className={classes.tableCellGames}>{row.games}</TableCell>
                                    <TableCell numeric>{row.scores}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
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