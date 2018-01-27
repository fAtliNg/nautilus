import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from 'material-ui/Grid';
import EntryNew from '../../components/EntryNew/EntryNew';
import EntryOld from '../../components/EntryOld/EntryOld';
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
        console.log(12312132, Math.ceil(13/2));
        return (
            <Pending pending={newsPage.pending}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Grid container>
                            {newsPage.entries.slice(0, Math.ceil(newsPage.entries.length/2)).map(entry =>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <EntryNew image={entry.image} summary={entry.summary}
                                              date={entry.date}/>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        {newsPage.entries.slice(Math.ceil(newsPage.entries.length/2), newsPage.entries.length).map(entry =>
                            <EntryOld summary={entry.summary} date={entry.date}/>
                        )}
                    </Grid>
                </Grid>
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