import axios from 'axios';
import { createHeader } from "@/config";

const API_ROUTE = (uid, lid, bid) => `https://lib-hub-api.herokuapp.com/api/user/${uid}/libraries/${lid}/books/${bid}/reviews`



export async function GetAllReviews(uid, lid, bid, token) {
    const res = await axios.get(API_ROUTE(uid, lid, bid), createHeader(token))
    return res.data
}


export async function PostReview(uid, lid, bid, body, token) {
    const res = await axios.post(API_ROUTE(uid, lid, bid), body, createHeader(token))
    return res.data
}

export async function GetReviewByReviewID(uid, lid, bid, rid, token) {
    const res = await axios.get(API_ROUTE(uid, lid, bid) + `/${rid}`, createHeader(token))
    return res.data
}

export async function DeleteReview(uid, lid, bid, rid, token) {
    await axios.delete(API_ROUTE(uid, lid, bid) + `/${rid}`, createHeader(token))
}