import axios from 'axios'

const KEY = 'AIzaSyDaoF1l1cGtncMwYKQ8U_w_b3rtUtxWa84'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part : 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})
