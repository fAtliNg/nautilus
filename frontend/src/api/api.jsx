import axios from 'axios';
import config from '../config/config';

var axiosInstance = axios.create({
    baseURL: `${config.HOST}/nautilus`,
    headers: {}
});

// Common
export const fetchCommonScoresTable = () => {
    return axiosInstance.get('scorestable');
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
    return axiosInstance.get('news');
};

// Players Page
export const fetchPlayers = () => {
    return axiosInstance.get('players');
};

// Photo Page
export const fetchPhotoAlbums = () => {
    return axiosInstance.get('gallery/photo');
};

export const fetchPhotos = id => {
    return axiosInstance.get(`gallery/photo/${id}`);
};

// Video Page
export const fetchVideoAlbums = () => {
    return axiosInstance.get('gallery/video');
};

export const fetchVideos = id => {
    return axiosInstance.get(`gallery/video/${id}`);
};

//Events
export const fetchEvents = () => {
    return axiosInstance.get('events/getall');
};