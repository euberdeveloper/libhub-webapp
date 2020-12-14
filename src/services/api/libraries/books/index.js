import axios from 'axios';

//import CONFIG from '@/config';
import { createHeader } from "@/config"

//const API_ROUTE = `${CONFIG.HOSTNAME}/libraries`;
const API_ROUTE = (uid, lid) => `https://defacto-23.herokuapp.com/api/users/${uid}/libraries/${lid}/books`;

export async function getBooks(uid, lid, token) {
    const response = await axios.get(API_ROUTE(uid, lid), createHeader(token));
    return response.data;
}

export async function postLibrariesLidBooks(uid, lid, body, token){
    const response = await axios.post(API_ROUTE(uid, lid), body, createHeader(token));
    return response.data;
}

export async function patchLibrariesLidBook(uid, lid, bid, body, token){
    await axios.patch(API_ROUTE(uid, lid) +"/"+ bid , body, createHeader(token));
}

export async function deleteLibrariesLidBooksBid(uid, lid, bid, token) {
    try{
        await axios.delete(API_ROUTE(uid, lid) +"/"+ bid , createHeader(token));
    }catch(error){
        console.log(error.response);
    }
    
}

export async function postLibrariesLidBookPictures(uid, lid, bid, body, token){
    await axios.post(API_ROUTE(uid, lid) +"/"+ bid +"/pictures", body, createHeader(token));
}
