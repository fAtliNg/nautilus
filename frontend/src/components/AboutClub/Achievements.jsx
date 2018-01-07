import React from 'react';
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import List, {
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
} from 'material-ui/List';

const styles = theme => ({
    textPaper: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
});

class Achievements extends React.Component {
    render() {
        const {achievements, classes} = this.props;
        return (
            achievements.length>0 &&
            <Paper className={classes.textPaper}>
                <Typography type="headline" component="h3">
                Достижения:
                </Typography>
                <div>
                    <List>
                    {achievements.map(entry=>(
                        <ListItem><ListItemText secondary={entry.trophy}>
                            </ListItemText></ListItem>
                    ))}
                    </List>
                </div>
            </Paper>
        )
    }
}

export default withStyles(styles)(Achievements);