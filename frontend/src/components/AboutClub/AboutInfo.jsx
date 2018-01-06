import React from 'react';
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    textPaper: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        // marginTop: theme.spacing.unit * 3,
    }),
});

class AboutInfo extends React.Component {
    render() {
        const {text, classes} = this.props;
        return (
        <Paper className={classes.textPaper}>
            {text.length>1 && text}
        </Paper>
        );
    }
}



export default withStyles(styles)(AboutInfo);