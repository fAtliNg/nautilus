import React from 'react'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import styles from './styles'

class AboutInfo extends React.Component {
  render () {
    const {text, classes} = this.props
    return (
      <Paper className={classes.textPaper}>
        {text.length && text.split('<br>').map(t => <div className={classes.subheading}>{t}</div>)}
      </Paper>
    )
  }
}

export default withStyles(styles)(AboutInfo)
