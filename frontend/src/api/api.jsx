import axios from 'axios'
import config from '../config/config'

var axiosInstance = axios.create({
  baseURL: `${config.HOST}/nautilus`,
  headers: {}
})

// Common
export const fetchCommonScoresTable = () => axiosInstance.get('scorestable')

export const fetchVkData = () => axiosInstance.get('vk')

// News Page
export const fetchEntries = (limit, offset) => axiosInstance.get(`news?limit=${limit}&offset=${offset}`)

// Players Page
export const fetchPlayers = () => axiosInstance.get('players')

// Photo Page
export const fetchPhotoAlbums = () => axiosInstance.get('gallery/photo')

export const fetchPhotos = id => axiosInstance.get(`gallery/photo/${id}`)

// Video Page
export const fetchVideoAlbums = () => axiosInstance.get('gallery/video')

export const fetchVideos = id => axiosInstance.get(`gallery/video/${id}`)

// Events
export const fetchEvents = () => axiosInstance.get('events/getall')

// About Club
export const fetchAboutClubInfo = () => {
  return {
    data: {
      text: 'МФК Наутилус - это коллектив единомышленников, для которых футбол не просто игра, а образ жизни. <br><br>' +
            'Дата основания:  6 августа 2017г<br>' +
            'г. Ростов-ра-Дону<br>',
      achievements: [
        {
          trophy: 'Полуфиналист летнего корпоративного кубка 2017',
          url: 'http://www.goalstream.org/season/1020574#/clubs'
        },
        {
          trophy: '4 место  осень-2017 4я лига РОЛФЛ',
          url: 'http://www.goalstream.org/season/1021553#/standings'
        },
        {
          trophy: '3 место  зима-2017/18 5я лига РОЛФЛ',
          url: 'http://www.goalstream.org/season/1022983/279a8cb8#/standings'
        }
      ]
    }
  }
}
