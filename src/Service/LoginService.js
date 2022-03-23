import axios from 'axios'; 

const LOGIN_API_BASE_URL = 'http://192.168.43.204:8080//users';

class LoginService{

getUsers(){

    return axios.get(LOGIN_API_BASE_URL);
}

}
export default new LoginService();