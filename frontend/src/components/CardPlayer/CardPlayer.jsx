import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import styles from './styles';

class CardPlayer extends Component {
    render() {
        const {classes, data} = this.props;
        return (
            <Card className={classes.card}>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container direction={"row"}>
                            <Grid item xs={4}>
                                <img
                                    className={classes.photo}
                                    src={data.photo}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <div className={classes.number}>
                                            <div className={classes.title}>
                                                {data.number}
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item style={{padding: 0, paddingLeft: 8}}>
                                        <div className={classes.title}>
                                            {data.fullName}
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{paddingLeft: 16, paddingTop: 0}}>
                        <Grid container direction={"row"} className={classes.info}>
                            <Grid item xs={6} style={{padding: 0}}>
                                <div className={classes.subheading}>
                                    Номер: {data.number}
                                </div>
                            </Grid>
                            <Grid item xs={6} style={{padding: 0}}>
                                <div className={classes.subheading}>
                                    Желтые: {data.yellowCards}
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container direction={"row"} className={classes.info}>
                            <Grid item xs={6} style={{padding: 0}}>
                                <div className={classes.subheading}>
                                    Красные: {data.redCards}
                                </div>
                            </Grid>
                            <Grid item xs={6} style={{padding: 0}}>
                                <div className={classes.subheading}>
                                    Игр: 3
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container direction={"row"} className={classes.info}>
                            <Grid item xs={6} style={{padding: 0}}>
                                <div className={classes.subheading}>
                                    Голов: 5
                                </div>
                            </Grid>
                            <Grid item xs={6} style={{padding: 0, paddingBottom: 8}}>
                                <div className={classes.subheading}>
                                    Передачи: 0
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        );
    }
}

CardPlayer.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
};

export default withStyles(styles)(CardPlayer);