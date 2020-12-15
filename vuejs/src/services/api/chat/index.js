/*GET /user/:uid/chats Ritorna le chat dell'utente body: no response: Chat[]

GET /user/:uid/chats/:cid Ritorna la chat dell'utente body: no response: Chat & { messages: ChatMessage[] }

POST /user/:uid/chats/:cid Invia un messaggio in questa chat body: ChatMessage (circa) response: empty

PUT /user/:uid/chats/:cid/visualize Visualizza tutti i messaggi della chat body: no response: no

POST /user/:uid/chats Crea una chat body: { recipient: string; } response: no*/

import axios from 'axios';

//import CONFIG from '@/config';
import { createHeader } from "@/config"

//const API_ROUTE = `${CONFIG.HOSTNAME}/libraries`;
const API_ROUTE = (uid) => `https://lib-hub-api.herokuapp.com/api/users/${uid}/chats`;

export async function getChatMessages(uid, cid ,token){
    const res = await axios.get(API_ROUTE(uid)+ "/"+ cid, createHeader(token));
    return res.data;
}

export async function postChatMessage(uid, cid, body, token) {
    await axios.post(API_ROUTE(uid)+ "/"+ cid, body, createHeader(token));
}

export async function postChatCreate(uid, body, token) {
    const res = await axios.post(API_ROUTE(uid), body, createHeader(token));
    return res.data;
}

export async function getChats(uid, token) {
    const res = await axios.get(API_ROUTE(uid), createHeader(token));
    return res.data;
}