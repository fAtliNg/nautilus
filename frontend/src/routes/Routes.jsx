import React from 'react'
import {Router, Route, IndexRoute, hashHistory, IndexRedirect} from 'react-router';
import App from '../components/App/App';
import NewsPage from '../containers/NewsPage/NewsPage';

const Routes = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/home"/>
                <Route path="home">
                    <IndexRoute component={HomePage}/>
                </Route>
                <Route path="aboutme">
                    <IndexRoute component={AboutMePage}/>
                </Route>
                <Route path="skills">
                    <IndexRoute component={SkillsPage}/>
                </Route>
                <Route path="experience">
                    <IndexRoute component={ExperiencePage}/>
                </Route>
                <Route path="certificates">
                    <IndexRoute component={CertificatesPage}/>
                </Route>
                <Route path="contact">
                    <IndexRoute component={ContactPage}/>
                </Route>
            </Route>
            {/*<Redirect from='/*' to='/404'/>*/}
        </Router>
    )
};

export default Routes;