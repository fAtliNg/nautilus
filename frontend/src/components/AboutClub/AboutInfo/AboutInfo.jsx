import React from 'react'
import Paper from 'material-ui/Paper'
import List, {
    ListItem
} from 'material-ui/List'
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
        <div className={classes.title}>
          Контакты
        </div>
        <List>
            <ListItem>
              Электронная почта: denisenkodns@gmail.com
            </ListItem>
        </List>
      </Paper>
    )
  }
}

export default withStyles(styles)(AboutInfo)
