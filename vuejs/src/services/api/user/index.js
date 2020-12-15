import axios from 'axios';
//import CONFIG from '@/config';

//const API_ROUTE = `${CONFIG.HOSTNAME}/libraries`;
const API_ROUTE = "https://lib-hub-api.herokuapp.com/api/users/";

export async function postLogin(body) {
    const response = await axios.post(API_ROUTE+ "login", body);
    return response.data;
}

export async function postSignUp(body) {
    await axios.post(API_ROUTE + "signup", body);
}

export async function postVerify(uid, token) {
    const response = await axios.post(API_ROUTE+ uid + "/verify/"+ token);
    return response.data;
}