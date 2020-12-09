import axios from 'axios';
//import CONFIG from '@/config';

//const API_ROUTE = `${CONFIG.HOSTNAME}/libraries`;
const API_ROUTE = "https://lib-hub.herokuapp.com/api/v1/libraries";

export async function getBooks(lid) {
    //console.log("Api lid: "+lid);
    const response = await axios.get(API_ROUTE + "/" + lid + "/books");
    return response.data;
}

export async function retrieveBookInfo(ISBN) {
    const response = await axios.get("https://lib-hub.herokuapp.com/api/v1/isbn/" + ISBN);
    return response.data;
}