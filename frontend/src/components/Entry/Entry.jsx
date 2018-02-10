import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardHeader, CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'

import styles from './styles'
import ReadMore from './ReadMore'
import ReplaceBbCode from '../Helpers/Helpers'

var moment = require('moment')

class Entry extends React.Component {
  state = {expanded: false};

  handleReadMore = () => {
    this.setState({expanded: true})
  };

  renderText = text => {
    const MAX_LENGTH_SUMMARY = 100
    let result = <ReplaceBbCode text={text} />
    if (ReplaceBbCode.replaceBbCodeWithoutUrl(text).length > MAX_LENGTH_SUMMARY && !this.state.expanded) {
      result = <div>
        {ReplaceBbCode.replaceBbCodeWithoutUrl(text).slice(0, MAX_LENGTH_SUMMARY) + '...'}
        <ReadMore onClick={this.handleReadMore} />
      </div>
    }
    return result
  };

  render () {
    const {classes, image, text, date} = this.props
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            title={<div className={classes.header}>{moment(date).format('DD.MM.YYYY')}</div>}
                    />
          <CardContent className={classes.content}>
            <Typography component='p' className={classes.content}>
              <div className={classes.img}>
                <img
                  src={image}
                  style={{
                    width: '100%'
                  }}
                  alt='image'
                                />
              </div>
              {this.renderText(text)}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

Entry.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string,    // путь к изображению
  text: PropTypes.string,     // краткое описание
  date: PropTypes.object        // дата
}

export default withStyles(styles)(Entry)
