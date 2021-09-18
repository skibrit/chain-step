import axios from "axios";

export function postRequest(url, data, config) {
  return new Promise((resolve, reject) => {
    if (!config) {
      config = {
        headers: {
          "content-type": "application/json",
        },
      };
    }
    return axios
      .post(url, data, config)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
