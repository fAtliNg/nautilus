import React from 'react'
import Paper from 'material-ui/Paper'
import {withStyles} from 'material-ui/styles'
import List, {
    ListItem
} from 'material-ui/List'

import styles from './styles'

class Achievements extends React.Component {
  render () {
    const {achievements, classes} = this.props
    return (
            achievements.length > 0 &&
            <Paper className={classes.textPaper}>
              <div className={classes.title}>
                    Достижения:
                </div>
              <List>
                {achievements.map(entry =>
                  <ListItem>
                    <div className={classes.subheading}>
                      {entry.trophy}
                    </div>
                  </ListItem>
                    )}
              </List>
            </Paper>
    )
  }
}

export default withStyles(styles)(Achievements)
