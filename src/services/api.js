import axios from "axios";

const api = axios.create({
    baseURL: 'https://tegloja-api.herokuapp.com/tegloja'
})

export default api