import React, {Component} from 'react';
import {connect} from 'react-redux';
import AboutInfo from '../../components/AboutClub/AboutInfo/AboutInfo'
import Achievements from '../../components/AboutClub/Achievements/Achievements'
import Pending from '../../components/Pending/Pending';

import {
    fetchAboutClubData,
    clearAboutClubData
} from '../../actions/actions';

class AboutClubPage extends Component {
    componentWillMount() {
        this.props.fetchAboutClubData();
    }

    componentWillUnmount() {
        this.props.clearAboutClubData();
    }

    render() {
        const {aboutPage} = this.props;
        return (
            <Pending pending={aboutPage.pending}>
                <AboutInfo text={aboutPage.text}/>
                <Achievements achievements={aboutPage.achievements}/>
            </Pending>
        )
    }
}

export default connect(
    state => ({
        aboutPage: state.aboutPage
    }),
    dispatch => ({
        fetchAboutClubData: () => dispatch(fetchAboutClubData()),
        clearAboutClubData: () => dispatch(clearAboutClubData())
    })
)(AboutClubPage);