import axios from 'axios';
//import CONFIG from '@/config';
import { createHeader } from "@/config"

//const API_ROUTE = `${CONFIG.HOSTNAME}/libraries`;
const API_ROUTE = (uid) => `https://defacto-23.herokuapp.com/api/users/${uid}/libraries`;

export async function getLibraries(uid, token) {
    const response = await axios.get(API_ROUTE(uid), {
        headers: {
          'Authorization': token
        }
      } );
    return response.data;
}

export async function getLibrariesLid(uid, lid, token) {
    const response = await axios.get(API_ROUTE(uid) +"/"+ lid, createHeader(token));
    return response.data;
}

export async function patchLibrariesLid(uid, lid, body, token) {
    await axios.patch(API_ROUTE(uid) +"/"+ lid, body, createHeader(token));
}

export async function postLibraries(uid, body, token) {
    const response = await axios.post(API_ROUTE(uid), body, createHeader(token));
    return response.data;
}

export async function deleteLibrariesLid(uid, lid, token) {
    await axios.delete(API_ROUTE(uid) +"/"+ lid, createHeader(token));
}

export async function coownLibrary(uid, lid, fid, token) {
    await axios.put(API_ROUTE(uid) +"/"+ lid + "/co-own/"+ fid, {}, createHeader(token));
}

export async function getLabelsLid(uid, lid, token) {
    const response = await axios.get(API_ROUTE(uid) +"/"+ lid + "/labels", createHeader(token));
    return response.data;
}