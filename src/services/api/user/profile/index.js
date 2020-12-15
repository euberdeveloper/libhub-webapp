import axios from 'axios';
import { createHeader } from "@/config";



const API_ROUTE = (uid) => `https://defacto-23.herokuapp.com/api/users/${uid}/`


export async function PatchUpdateUserProfile(uid, body, token) {
    await axios.patch(API_ROUTE(uid) + 'profile', body, createHeader(token))
}

export async function PutUpdateUserPassword(uid, body, token) {
    const res = await axios.put(API_ROUTE(uid) + 'profile/password', body, createHeader(token))
    return res.data
}

export async function PutUpdateUserAvatar(uid, body, token) {
    const res = await axios.put(API_ROUTE(uid) + 'profile/avatar', body, createHeader(token))
    return res.data
}

export async function DeleteUserAvatar(uid, body, token) {
    await axios.delete(API_ROUTE(uid) + 'profile/avatar', body, createHeader(token))
}
export async function deleteAccount(uid, token){
    await axios.delete(API_ROUTE(uid) , createHeader(token))
}