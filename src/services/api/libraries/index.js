import axios from 'axios';
//import CONFIG from '@/config';

//const API_ROUTE = `${CONFIG.HOSTNAME}/libraries`;
const API_ROUTE = "https://lib-hub.herokuapp.com/api/v1/libraries";

export async function getLibraries() {
    const response = await axios.get(API_ROUTE);
    return response.data;
}

export async function getLibrariesLid(lid) {
    const response = await axios.get(API_ROUTE +"/"+ lid);
    return response.data;
}

export async function postLibraries(body) {
    const response = await axios.post(API_ROUTE, body);
    return response.data;
}

export async function deleteLibrariesLid(lid) {
    await axios.delete(API_ROUTE+"/"+lid);
}