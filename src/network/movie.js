import axios from 'axios'

export function getMovie() {
    axios.get(
        "https://douban.uieee.com/v2/movie/subject/25924056").then(res => {
            return res.data
        })
}