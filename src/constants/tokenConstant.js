const obj = JSON.parse(localStorage.getItem("amUserInfo"));
console.log("token: ", obj.data.access_token);
export const USER_TOKEN = obj ? `Bearer ${obj.data.access_token}` : '';