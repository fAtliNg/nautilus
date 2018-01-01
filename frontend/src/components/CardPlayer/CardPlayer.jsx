import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardContent, CardMedia} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    card: {
        display: 'flex',
    },
    cover: {
        height: "100%",
    }
});

class CardPlayer extends Component {
    render() {
        const {classes, data} = this.props;
        return (
            <Card className={classes.card}>
                <Grid container justify="center">
                    <Grid item xs={5}>
                    <CardMedia
                        className={classes.cover}
                        image={data.photo}
                        title={data.fullName}
                    />
                    </Grid>
                    <Grid item xs={7}>
                    <CardContent>
                        <Typography type="headline">
                            {data.fullName}
                        </Typography>
                        <Typography type="subheading" color="secondary">
                            Возраст: {data.age}
                        </Typography>
                        <Typography type="subheading" color="secondary">
                            Номер: {data.number}
                        </Typography>
                        <Typography type="subheading" color="secondary">
                            Игровая позиция: {data.role}
                        </Typography>
                        <Typography type="subheading" color="secondary">
                            Желтые карточки: {data.yellowCards}
                        </Typography>
                        <Typography type="subheading" color="secondary">
                            Красные карточки: {data.redCards}
                        </Typography>
                    </CardContent>
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