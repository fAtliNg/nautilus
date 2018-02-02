import React from 'react'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import styles from './styles'

class AboutInfo extends React.Component {
  render () {
    const {text, classes} = this.props
    return (
      <Paper className={classes.textPaper}>
        <div className={classes.subheading}>
          {text.length > 1 && text}
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(AboutInfo)
