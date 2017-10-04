import fetch from "fetch-everywhere";

export const API_URL_ROOT =
  "https://api.myjson.com/bins/";

  //https://api.myjson.com/bins/or451
export const post=(url, payload) =>{
    fetch.post({API_URL}/{url}, {
        body: JSON.stringify(payload)
    })
}

export async function get(url) {
  return await fetch(`${API_URL_ROOT}${url}`, {
  
  });
}

export async function put(url, payload) {
  return await fetch(`${API_URL_ROOT}/${url}`, {
    method: "PUT",
    body: JSON.stringify(payload),
   
  });
}