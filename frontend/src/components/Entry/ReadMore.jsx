import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import styles from './styles'

class ReadMore extends React.Component {
  render () {
    const {classes, onClick} = this.props
    return (
      <div onClick={onClick} className={classes.subheader} style={{cursor: 'pointer'}}>
                показать полностью
            </div>
    )
  }
}

ReadMore.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func
}

export default withStyles(styles)(ReadMore)
