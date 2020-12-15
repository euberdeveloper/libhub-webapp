import axios from 'axios';


const API_ROUTE = 'https://lib-hub-api.herokuapp.com/api/users/password-recovery/';

//Password recovery requests

export async function PostPasswordRecoveryRequestWithUsername(username) {
    console.log(username);
    await axios.post(API_ROUTE + 'username/' + username);
}

export async function PostPasswordRecoveryRequestWithEmail(email) {
    await axios.post(API_ROUTE + 'email/' + email);
}

//Password recovery for user 'username'

export async function PostPasswordRecovery(username, body, token) {
    await axios.post(`https://lib-hub-api.herokuapp.com/api/users/${username}/password-recovery/${token}`, body)
}