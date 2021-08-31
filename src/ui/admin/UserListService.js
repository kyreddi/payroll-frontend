import axios from 'axios'



const USERS_REST_API_URL = 'http://backendpostupdate-env.eba-3u73qfgk.ap-south-1.elasticbeanstalk.com/api/access/getAllUsers';

class UserListService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }

    
}

export default new UserListService();