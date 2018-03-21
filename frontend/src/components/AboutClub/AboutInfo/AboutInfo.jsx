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
        {text.length && text.split('<br>').map(t => <div className={classes.subheading}>{t}</div>)}
        <div className={classes.title}>
          Контакты
        </div>
        <List>
            <ListItem>
                <div className={classes.subheading}>
                    Электронная почта: denisenkodns@gmail.com
                </div>
            </ListItem>
        </List>
      </Paper>
    )
  }
}

export default withStyles(styles)(AboutInfo)
