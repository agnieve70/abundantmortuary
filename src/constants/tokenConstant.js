const obj = JSON.parse(localStorage.getItem("amUserInfo"));
export const USER_TOKEN = obj ? `Bearer ${obj.data.access_token}` : '';