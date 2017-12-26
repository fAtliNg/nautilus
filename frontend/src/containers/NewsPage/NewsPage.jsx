import React, {Component} from 'react';
import {connect} from 'react-redux';
import Entry from '../../components/Entry/Entry';

// import {fetchHomePageData, clearHomePageData} from '../../actions/actions';

var title = "Уверенная победа";
var date = "11 дек в 11:28";
var image = "https://pp.userapi.com/c621704/v621704057/44d5b/j9ahB-Fcqx8.jpg";
var imageTitle = "Contemplative Reptile";
var summary = "Уверенная победа со счетом 5-1 в матче против Южтехмонтаж";
var article = [
    "🔔 В очередном туре зимнего первенства Наутилус встречался с командой \"Южтехмонтаж\". Интенсивная и плотная борьба, благодаря дублю Сергея Ржевского, победному голу Кирилла Четверикова и блестящим сейвам в воротах Александра Русина, завершилась со счетом 3:1 в нашу пользу.",
    "👏Все молодцы, двигаемся дальше!☝⚽",
    "📹\n" +
    "1 тайм: https://vk.com/video-152573647_456239073\n" +
    "2 тайм: https://vk.com/video-152573647_456239074",
    "📜\n" +
    "http://www.goalstream.org/match/101871253/e73035a6\n",
    "📷\n" +
    "https://vk.com/album-152573647_249469331"
];

class NewsPage extends Component {
    componentWillMount() {
        // this.props.fetchHomePageData();
    }

    componentWillUnmount() {
        // this.props.clearHomePageData();
    }

    render() {
        return (
            <div>
            <Entry
                title={title}
                image={image}
                imageTitle={imageTitle}
                summary={summary}
                article={article}
                date={date}
            />
                <Entry
                    title={title}
                    image={image}
                    imageTitle={imageTitle}
                    summary={summary}
                    article={article}
                    date={date}
                />
                <Entry
                    title={title}
                    image={image}
                    imageTitle={imageTitle}
                    summary={summary}
                    article={article}
                    date={date}
                />
            </div>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({})
)(NewsPage);