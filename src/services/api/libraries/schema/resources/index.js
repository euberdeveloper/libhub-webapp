import axios from 'axios';

//import CONFIG from '@/config';
import { createHeader } from "@/config"

//const API_ROUTE = `${CONFIG.HOSTNAME}/libraries`;
const API_ROUTE = (uid, lid) => `https://defacto-23.herokuapp.com/api/users/${uid}/libraries/${lid}/schema/resources`;

export async function getResources(uid, lid) {
    const response = await axios.get(API_ROUTE(uid, lid));
    return response.data;
}

export async function postLibrariesLidSchemaResources(uid, lid, body, token) {

    const response = await axios.post(API_ROUTE(uid, lid), body, createHeader(token));
    return response.data;
 }