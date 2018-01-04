import axios from 'axios';

var HOST = 'http://mfc-nautilus.ru:8080/nautilus';

var axiosInstance = axios.create({
    baseURL: `${HOST}`,
    headers: {}
});

// Common
export const fetchCommonScoresTable = () => {
    return {
        data: [
            {
                name: 'Армата',
                games: 5,
                scores: 15
            },
            {
                name: 'СТЕЛА',
                games: 5,
                scores: 12
            },
            {
                name: 'Energy',
                games: 5,
                scores: 12
            },
            {
                name: 'Виктория',
                games: 5,
                scores: 12
            },
            {
                name: 'Орион',
                games: 6,
                scores: 10
            },
            {
                name: 'Наутилус',
                games: 5,
                scores: 9
            },
            {
                name: 'Атлант 5х5',
                games: 4,
                scores: 7
            },
            {
                name: 'Лидер',
                games: 6,
                scores: 4
            },
            {
                name: 'Южтехмонтаж',
                games: 5,
                scores: 2
            },
            {
                name: 'ЛФ КБР',
                games: 5,
                scores: 1
            },
            {
                name: 'Ля-Мажор',
                games: 2,
                scores: 0
            },
            {
                name: 'Армейцы дона',
                games: 5,
                scores: 0
            }
        ]
    }
    // return axiosInstance.get('common/getScoresTable');
};

export const fetchVkData = () => {
    return {
        data: {
            avatar: 'https://pp.userapi.com/c837425/v837425654/4959c/4nWFZ1fwAGw.jpg',
            title: 'МФК "Наутилус"',
            subheader: '61 подписчик',
            groupUrl: 'https://vk.com/mfc_nautilus',
            subscribeUrl: 'https://vk.com/widget_community.php?act=a_subscribe_box&oid=-152573647&state=1&widget=4',
            subscribers: [
                {
                    id: 1,
                    name: 'Сергей',
                    avatar: 'https://pp.userapi.com/c636621/v636621655/121c5/bhi3hr0R-v8.jpg',
                    url: 'https://vk.com/denisenko_sergey'
                },
                {
                    id: 2,
                    name: 'Сергей',
                    avatar: 'https://pp.userapi.com/c636621/v636621655/121c5/bhi3hr0R-v8.jpg',
                    url: 'https://vk.com/denisenko_sergey'
                },
                {
                    id: 3,
                    name: 'Сергей',
                    avatar: 'https://pp.userapi.com/c636621/v636621655/121c5/bhi3hr0R-v8.jpg',
                    url: 'https://vk.com/denisenko_sergey'
                },
                {
                    id: 4,
                    name: 'Сергей',
                    avatar: 'https://pp.userapi.com/c636621/v636621655/121c5/bhi3hr0R-v8.jpg',
                    url: 'https://vk.com/denisenko_sergey'
                },
                {
                    id: 5,
                    name: 'Сергей',
                    avatar: 'https://pp.userapi.com/c636621/v636621655/121c5/bhi3hr0R-v8.jpg',
                    url: 'https://vk.com/denisenko_sergey'
                },
                {
                    id: 6,
                    name: 'Сергей',
                    avatar: 'https://pp.userapi.com/c636621/v636621655/121c5/bhi3hr0R-v8.jpg',
                    url: 'https://vk.com/denisenko_sergey'
                }
            ]
        }
    }
};

// News Page
export const fetchEntries = () => {
    return {
        data: [
            {
                title: 'Уверенная победа #1',
                date: '11 дек в 11:28',
                image: 'https://pp.userapi.com/c621704/v621704057/44d5b/j9ahB-Fcqx8.jpg',
                summary: 'Уверенная победа со счетом 5-1 в матче против Южтехмонтаж',
                article: [
                    "🔔 В очередном туре зимнего первенства Наутилус встречался с командой \"Южтехмонтаж\". Интенсивная и плотная борьба, благодаря дублю Сергея Ржевского, победному голу Кирилла Четверикова и блестящим сейвам в воротах Александра Русина, завершилась со счетом 3:1 в нашу пользу.",
                    "👏Все молодцы, двигаемся дальше!☝⚽",
                    "📹\n" +
                    "1 тайм: https://vk.com/video-152573647_456239073\n" +
                    "2 тайм: https://vk.com/video-152573647_456239074",
                    "📜\n" +
                    "http://www.goalstream.org/match/101871253/e73035a6\n",
                    "📷\n" +
                    "https://vk.com/album-152573647_249469331"
                ]
            },
            {
                title: 'Уверенная победа #2',
                date: '11 дек в 11:29',
                image: 'https://pp.userapi.com/c621704/v621704057/44d5b/j9ahB-Fcqx8.jpg',
                summary: 'Уверенная победа со счетом 5-1 в матче против Южтехмонтаж',
                article: [
                    "🔔 В очередном туре зимнего первенства Наутилус встречался с командой \"Южтехмонтаж\". Интенсивная и плотная борьба, благодаря дублю Сергея Ржевского, победному голу Кирилла Четверикова и блестящим сейвам в воротах Александра Русина, завершилась со счетом 3:1 в нашу пользу.",
                    "👏Все молодцы, двигаемся дальше!☝⚽",
                    "📹\n" +
                    "1 тайм: https://vk.com/video-152573647_456239073\n" +
                    "2 тайм: https://vk.com/video-152573647_456239074",
                    "📜\n" +
                    "http://www.goalstream.org/match/101871253/e73035a6\n",
                    "📷\n" +
                    "https://vk.com/album-152573647_249469331"
                ]
            },
            {
                title: 'Уверенная победа #3',
                date: '11 дек в 11:30',
                image: 'https://pp.userapi.com/c621704/v621704057/44d5b/j9ahB-Fcqx8.jpg',
                summary: 'Уверенная победа со счетом 5-1 в матче против Южтехмонтаж',
                article: [
                    "🔔 В очередном туре зимнего первенства Наутилус встречался с командой \"Южтехмонтаж\". Интенсивная и плотная борьба, благодаря дублю Сергея Ржевского, победному голу Кирилла Четверикова и блестящим сейвам в воротах Александра Русина, завершилась со счетом 3:1 в нашу пользу.",
                    "👏Все молодцы, двигаемся дальше!☝⚽",
                    "📹\n" +
                    "1 тайм: https://vk.com/video-152573647_456239073\n" +
                    "2 тайм: https://vk.com/video-152573647_456239074",
                    "📜\n" +
                    "http://www.goalstream.org/match/101871253/e73035a6\n",
                    "📷\n" +
                    "https://vk.com/album-152573647_249469331"
                ]
            }
        ]
    }
    // return axiosInstance.get('news/getEntries');
};

// Players Page
export const fetchPlayers = () => {
    return {
        data: [
            {
                id: 1,
                fullName: 'Денисенко Сергей',
                photo: 'https://pp.userapi.com/c636621/v636621655/12328/Y3ztIf9ai5U.jpg',
                age: 25,
                number: 11,
                role: 'Защитник',
                yellowCards: 0,
                redCards: 0
            },
            {
                id: 2,
                fullName: 'Денисенко Сергей',
                photo: 'https://pp.userapi.com/c636621/v636621655/12328/Y3ztIf9ai5U.jpg',
                age: 25,
                number: 11,
                role: 'Защитник',
                yellowCards: 0,
                redCards: 0
            },
            {
                id: 3,
                fullName: 'Денисенко Сергей',
                photo: 'https://pp.userapi.com/c636621/v636621655/12328/Y3ztIf9ai5U.jpg',
                age: 25,
                number: 11,
                role: 'Защитник',
                yellowCards: 0,
                redCards: 0
            },
            {
                id: 4,
                fullName: 'Денисенко Сергей',
                photo: 'https://pp.userapi.com/c636621/v636621655/12328/Y3ztIf9ai5U.jpg',
                age: 25,
                number: 11,
                role: 'Защитник',
                yellowCards: 0,
                redCards: 0
            },
            {
                id: 5,
                fullName: 'Денисенко Сергей',
                photo: 'https://pp.userapi.com/c636621/v636621655/12328/Y3ztIf9ai5U.jpg',
                age: 25,
                number: 11,
                role: 'Защитник',
                yellowCards: 0,
                redCards: 0
            },
        ]
    }
};

// Photo Page
export const fetchPhotoAlbums = () => {
    return {
        data: [
            {
                id: 1,
                previewImage: 'https://pp.userapi.com/c639427/v639427451/451e2/qGdWqarZQdc.jpg',
                name: 'Наутилус - Западный #1',
                description: '10 сентября 2017, 2й тур осень-2017'
            },
            {
                id: 2,
                previewImage: 'https://pp.userapi.com/c639427/v639427451/451e2/qGdWqarZQdc.jpg',
                name: 'Наутилус - Западный #2',
                description: '10 сентября 2017, 2й тур осень-2017'
            },
            {
                id: 3,
                previewImage: 'https://pp.userapi.com/c639427/v639427451/451e2/qGdWqarZQdc.jpg',
                name: 'Наутилус - Западный #3',
                description: '10 сентября 2017, 2й тур осень-2017'
            },
            {
                id: 4,
                previewImage: 'https://pp.userapi.com/c639427/v639427451/451e2/qGdWqarZQdc.jpg',
                name: 'Наутилус - Западный #4',
                description: '10 сентября 2017, 2й тур осень-2017'
            }
        ]
    }
    // return axiosInstance.get('photo/getAlbums');
};

export const fetchPhotos = id => {
    return {
        data: [
            {
                original: 'https://pp.userapi.com/c639427/v639427451/451d8/1kgzue-zay4.jpg',
                thumbnail: 'https://pp.userapi.com/c639427/v639427451/451d8/1kgzue-zay4.jpg',
            },
            {
                original: 'https://pp.userapi.com/c639427/v639427451/451ec/YRBVvN-CBWc.jpg',
                thumbnail: 'https://pp.userapi.com/c639427/v639427451/451ec/YRBVvN-CBWc.jpg',
            },
            {
                original: 'https://pp.userapi.com/c639427/v639427451/451f6/ooPSv0GGAhk.jpg',
                thumbnail: 'https://pp.userapi.com/c639427/v639427451/451f6/ooPSv0GGAhk.jpg',
            },
            {
                original: 'https://pp.userapi.com/c639427/v639427451/45200/_32rHf-c9bk.jpg',
                thumbnail: 'https://pp.userapi.com/c639427/v639427451/45200/_32rHf-c9bk.jpg',
            },
            {
                original: 'https://pp.userapi.com/c639427/v639427451/4520a/0lXdkplYfZ0.jpg',
                thumbnail: 'https://pp.userapi.com/c639427/v639427451/4520a/0lXdkplYfZ0.jpg',
            },
            {
                original: 'https://pp.userapi.com/c639427/v639427451/45232/2hptBpeUC0U.jpg',
                thumbnail: 'https://pp.userapi.com/c639427/v639427451/45232/2hptBpeUC0U.jpg',
            },
            {
                original: 'https://pp.userapi.com/c639427/v639427451/45250/kJfAyjiHgxM.jpg',
                thumbnail: 'https://pp.userapi.com/c639427/v639427451/45250/kJfAyjiHgxM.jpg',
            },
            {
                original: 'https://pp.userapi.com/c639427/v639427451/4526e/crD3MNUU87E.jpg',
                thumbnail: 'https://pp.userapi.com/c639427/v639427451/4526e/crD3MNUU87E.jpg',
            },
            {
                original: 'https://pp.userapi.com/c639427/v639427451/45278/q_XsrrE63Rk.jpg',
                thumbnail: 'https://pp.userapi.com/c639427/v639427451/45278/q_XsrrE63Rk.jpg',
            },
            {
                original: 'https://pp.userapi.com/c639427/v639427451/45282/Sm9dIIVQvc4.jpg',
                thumbnail: 'https://pp.userapi.com/c639427/v639427451/45282/Sm9dIIVQvc4.jpg',
            }

        ]
    }
    // return axiosInstance.get('photo/getAlbums/${id}');
};

// Video Page
export const fetchVideoAlbums = () => {
    return {
        data: [
            {
                id: 1,
                previewImage: 'https://pp.userapi.com/c841221/u297685415/video/l_ebfc1f28.jpg',
                name: 'Обзоры матчей',
                description: '10 сентября 2017, 2й тур осень-2017'
            }
        ]
    }
    // return axiosInstance.get('photo/getAlbums');
};

export const fetchVideos = id => {
    return {
        data: [
            {
                original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4v.jpg',
                thumbnail: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4v.jpg',
                embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0'
            },
            {
                original: 'https://pp.userapi.com/c624724/v624724313/2d517/21reNlVJZDA.jpg',
                thumbnail: 'https://pp.userapi.com/c624724/v624724313/2d517/21reNlVJZDA.jpg',
                embedUrl: 'https://cs1-50v4.vkuservideo.net/p21/30bf0887c51b.720.mp4?extra=04AN-x6zE5RJ3WCbFrh_xe3rLOnZJDBx_BWVxGqLh8XEKvKB2RpAX3bbOgJwPdZ95P1H3rYTgaUBrA4qFR9EPvr7EKtUn7y-U1QOuXsUMTAKYCwBHFV-cKhEfAVlbXNHV87tZcq7_XeuTqU'
            }
        ]
    }
    // return axiosInstance.get('photo/getAlbums/${id}');
};

//Events
export const fetchEvents = () => {
    return axiosInstance.get('events/getall');
};