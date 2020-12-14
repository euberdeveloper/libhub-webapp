import axios from 'axios';
import { createHeader } from "@/config"

//Manage requests 

const API_REQUEST_ROUTE = (uid) => `https://defacto-23.herokuapp.com/api/users/${uid}/friends/friend-requests`

export async function getSentRequest(uid, token){
    const res = await axios.get(API_REQUEST_ROUTE(uid) + '/sent', createHeader(token))
    return res.data
} 

export async function deleteRequest(uid, rid, token){
    await axios.delete(API_REQUEST_ROUTE(uid) + `/sent/${rid}`, createHeader(token))
} 

export async function getReceivedRequest(uid,  token){
    const res = await axios.get(API_REQUEST_ROUTE(uid) +'/received', createHeader(token))
    return res.data
}

export async function acceptRefuseRequest(uid, rid, body, token){
    const res =  await axios.post(API_REQUEST_ROUTE(uid) + `/received/${rid}`, body, createHeader(token))
    return res.data
 }


//Manage friends

const API_ROUTE_COL = (uid, f_username) => `https://defacto-23.herokuapp.com/api/users/${uid}/friends/${f_username}`;
const API_ROUTE =  (uid) => `https://defacto-23.herokuapp.com/api/users/${uid}/friends`;

export async function getFriends(uid, token){
    const res = await axios.get(API_ROUTE(uid), createHeader(token))
    return res.data
} 

export async function  addFriend(uid, f_username, token){
    await axios.post(API_ROUTE_COL(uid, f_username), { message: "zaWarudoooo" }, createHeader(token))
}

export async function  deleteFriend(uid, f_username, token){
    await axios.delete(API_ROUTE_COL(uid, f_username), createHeader(token))
}

export async function zaWarudo(token ){
    const res =await axios.get("https://defacto-23.herokuapp.com/api/users/usernames", createHeader(token))
    return res.data
}