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
    return axiosInstance.get('vk');
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