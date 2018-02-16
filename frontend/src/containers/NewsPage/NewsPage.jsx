import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Entry from '../../components/Entry/Entry'
import Button from 'material-ui/Button'
import FirstPage from 'material-ui-icons/FirstPage'
import LastPage from 'material-ui-icons/LastPage'
import {withStyles} from 'material-ui/styles'
import styles from './styles'
import Pagination from 'rc-pagination'
import theme from '../../themes/theme'

import { fetchNewsPageEntriesData, clearNewsPageEntriesData } from '../../actions/actions'

class NewsPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  componentWillMount () {
    this.props.fetchNewsPageEntriesData()
  }

  componentWillUnmount () {
    this.props.clearNewsPageEntriesData()
  }

  renderItemPagination = (current, type) => {
    const {classes} = this.props;
    let result;
    if (type === 'page') {
      result = <Button raised
                       style={{
                         margin: 4,
                         minWidth: 0,
                         color: this.state.currentPage === current ? theme.palette.backgroundColorComponent : theme.palette.textColor,
                         backgroundColor: this.state.currentPage === current ? theme.palette.textColor : theme.palette.backgroundColorComponent
                       }}
      >{current}</Button>
    } else if (type === 'prev') {
      result = <FirstPage className={classes.previousClassName}/>
    } else if (type === 'next') {
      result = <LastPage className={classes.nextClassName}/>
    } else if (type === 'jump-prev') {
      result == '...'
    } else if (type === 'jump-next') {
      result == '...'
    }
    return result;
  };

  onChangePage = (current, pageSize) => {
    this.props.fetchNewsPageEntriesData(pageSize, (current-1)*pageSize)
    this.setState({currentPage: current})
  }

  render () {
    const {newsPage} = this.props
    return (
      newsPage.entries && Array.isArray(newsPage.entries) &&
      <div>
        {newsPage.entries.map(entry => (
        <Entry
          key={entry.text}
          image={entry.image}
          text={entry.text}
          date={entry.date}
        />
        ))}
        {false && <div style={{textAlign: "right"}}>
          <Pagination
            total={25}
            defaultPageSize={3}
            // showLessItems={true}
            itemRender={this.renderItemPagination}
            onChange={this.onChangePage}
          />
        </div>}
      </div>
    )
  }
}

NewsPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect(
  state => ({
    newsPage: state.newsPage
  }),
  dispatch => ({
    fetchNewsPageEntriesData: (limit, offset) => dispatch(fetchNewsPageEntriesData(limit, offset)),
    clearNewsPageEntriesData: () => dispatch(clearNewsPageEntriesData())
  })
)(withStyles(styles)(NewsPage))
