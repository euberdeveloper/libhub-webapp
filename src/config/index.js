export default {
  HOSTNAME: process.env['VUE_APP_API_HOSTNAME']
};

export function createHeader(token) {
  return {
    headers: {
      'Authorization': token
    }
  }
}