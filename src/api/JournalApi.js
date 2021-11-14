import axios from 'axios'


const  journalApi = axios.create({
    baseURL:'https://vue-demos-5cb54-default-rtdb.firebaseio.com'
})

export default journalApi