import axios from 'axios'
import config from '../config/config'

var axiosInstance = axios.create({
  baseURL: `${config.HOST}/nautilus`,
  headers: {}
})

// Common
export const fetchCommonScoresTable = () => {
  return axiosInstance.get('scorestable')
}

export const fetchVkData = () => {
  return axiosInstance.get('vk')
}

// News Page
export const fetchEntries = (limit, offset) => {
  // return axiosInstance.get('news')
  return axiosInstance.get(`news?limit=${limit}&offset=${offset}`)
}

// Players Page
export const fetchPlayers = () => {
  return axiosInstance.get('players')
}

// Photo Page
export const fetchPhotoAlbums = () => {
  return axiosInstance.get('gallery/photo')
}

export const fetchPhotos = id => {
  return axiosInstance.get(`gallery/photo/${id}`)
}

// Video Page
export const fetchVideoAlbums = () => {
  return axiosInstance.get('gallery/video')
}

export const fetchVideos = id => {
  return axiosInstance.get(`gallery/video/${id}`)
}

// Events
export const fetchEvents = () => {
  return axiosInstance.get('events/getall')
}

// About Club
export const fetchAboutClubInfo = () => {
  return {
    data: {
      text: 'МФК Наутилус - это коллектив единомышленников, для которых футбол не просто игра, а образ жизни.' +
            '\n' +
            'Дата основания:  6 августа 2017г' +
            'г. Ростов-ра-Дону',
      achievements: [
        {
          trophy: 'Полуфиналист летнего корпоративного кубка 2017'
          url: 'http://www.goalstream.org/season/1020574#/clubs'
        },
        {
          trophy: '4 место  осень-2017 4я лига РОЛФЛ'
          url: 'http://www.goalstream.org/season/1021553#/standings'
        },
        {
          trophy: '3 место  зима-2017/18 5я лига РОЛФЛ'
          url: 'http://www.goalstream.org/season/1022983/279a8cb8#/standings'
        }
      ]
    }
  }
}
