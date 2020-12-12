import axios from 'axios';

//import CONFIG from '@/config';

//const API_ROUTE = `${CONFIG.HOSTNAME}/libraries`;
const API_ROUTE = (lid) => `https://lib-hub.herokuapp.com/api/v1/libraries/${lid}/schema/ubications`;

export async function getUbications(lid) {
    const response = await axios.get(API_ROUTE(lid));
    return response.data;
}