import axios from '../custom-axios/axios'
import qs from 'qs'

const NewsService = {
    fetchNews: () => {
        return axios.get("/news");
    },
}


export default NewsService;