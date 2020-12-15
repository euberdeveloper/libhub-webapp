import axios from 'axios';

//import CONFIG from '@/config';
import { createHeader } from "@/config"

//const API_ROUTE = `${CONFIG.HOSTNAME}/libraries`;
const API_ROUTE = (uid, lid) => `https://lib-hub-api.herokuapp.com/api/users/${uid}/libraries/${lid}/schema/ubications`;

export async function getUbications(uid, lid, token) {
    const response = await axios.get(API_ROUTE(uid, lid), createHeader(token));
    return response.data;
}

export async function postLibrariesLidSchemaUbications(uid, lid, body, token) {
    await axios.post(API_ROUTE(uid, lid), body, createHeader(token));
 }

