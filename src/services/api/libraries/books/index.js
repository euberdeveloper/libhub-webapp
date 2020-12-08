import axios from 'axios';
//import CONFIG from '@/config';

//const API_ROUTE = `${CONFIG.HOSTNAME}/libraries`;
const API_ROUTE = "https://lib-hub.herokuapp.com/api/v1/libraries";

export async function getBooks(lid) {
    const response = await axios.get(API_ROUTE+"/"+ lid + "/books");
    return response.data;
}