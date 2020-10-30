import axios from 'axios'

const KEY = 'AIzaSyCarZIH488LJw2xGp0KuC_YaCZW5_nmDoY'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part : 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})
