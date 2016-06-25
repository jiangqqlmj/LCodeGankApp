'use strict';

let HOST = 'http://apis.baidu.com/';
export function request(url, method, body) {
  var isOk;
  return new Promise((resolve, reject) => {
    fetch(HOST + url, {
        method: method,
        body: body,
      })
      .then((response) => {
        if (response.ok) {
          isOk = true;
        } else {
          isOk = false;
        }
        return response.json();
      })
      .then((responseData) => {
        if (isOk) {
          resolve(responseData);
        } else {
          reject(responseData);
        }
      })
      .catch((error) => {
        reject(error);
      });
  })
}