import React, {Component} from 'react';
import {connect} from 'react-redux';
import Entry from '../../components/Entry/Entry';
import Pending from '../../components/Pending/Pending';

import {fetchNewsPageEntriesData, clearNewsPageEntriesData} from '../../actions/actions';

class NewsPage extends Component {
    componentWillMount() {
        this.props.fetchNewsPageEntriesData();
    }

    componentWillUnmount() {
        this.props.clearNewsPageEntriesData();
    }

    render() {
        const {newsPage} = this.props;
        return (
            <Pending pending={newsPage.pending}>
                {
                    newsPage.entries && Array.isArray(newsPage.entries) &&
                    newsPage.entries.map(entry => (
                        <Entry
                            key={entry.title}
                            title={entry.title}
                            image={entry.image}
                            summary={entry.summary}
                            article={entry.article}
                            date={entry.date}
                        />
                    ))
                }
            </Pending>
        );
    }
}

export default connect(
    state => ({
        newsPage: state.newsPage
    }),
    dispatch => ({
        fetchNewsPageEntriesData: () => dispatch(fetchNewsPageEntriesData()),
        clearNewsPageEntriesData: () => dispatch(clearNewsPageEntriesData())
    })
)(NewsPage);