import API from 'axios';

export function getHistory() {
    return new Promise((resolve, reject) => {
        API.get('https://api.spacexdata.com/v3/history')
            .then(res => {
                resolve(res)
            }).catch((error) => {
                reject(error);
            })
    })
};

export function getAddress() {
    return new Promise((resolve, reject) => {
        API.get('https://api.spacexdata.com/v3/payloads')
            .then(res => {
                resolve(res)
            }).catch((error) => {
                reject(error);
            })
    })
};

export const getService = {
    getHistory,
    getAddress
};