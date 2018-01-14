import React, {Component} from 'react';
import {connect} from 'react-redux';
import AboutInfo from '../../components/AboutClub/AboutInfo/AboutInfo'
import Achievements from '../../components/AboutClub/Achievements/Achievements'

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
            <div>
                <AboutInfo text={aboutPage.text}/>
                <Achievements achievements={aboutPage.achievements}/>
            </div>
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