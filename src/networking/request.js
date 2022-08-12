const debug = true
import Helper from '../utils/Helper';

export function GetRequest(api) {
    try{
        if (debug) {
            console.log('API => ' + api)
        }
        
        return fetch(api, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        })
            .then(response => response.json())
            .then(responseJson => {
                if (debug) {
                    console.log('Response => ' + JSON.stringify(responseJson));
                }
                return responseJson
            })
            .catch(error => {
                return error;
            })
    }
    catch(e){
        console.log(e)
    }   
}
export function PostRequest(api,payloads) {
    try{
        if (debug) {
            console.log('API => ' + api)
            console.log('Payloads => ' + payloads)
        }
        return fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: payloads,
        })
            .then(response => response.json())
            .then(responseJson => {
                if (debug) {
                    console.log('Response => ' + JSON.stringify(responseJson));
                }
                return responseJson
            })
            .catch(error => {
                return error;
            })
    }
    catch(e){
        console.log(e)
    }
    
}

export async function PostRequestWithAuthentication(api,payloads) {
    if (debug) {
        console.log('API => ' + api);
        console.log('Payloads => ' + payloads);
    }
    var token = await Helper.getToken();
    console.log('token',token)
    return fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        },
        body: payloads,
    })
        .then(response => response.json())
        .then(responseJson => {
            if (debug) {
                console.log('Response => ' + JSON.stringify(responseJson));
            }
            return responseJson;
        })
        .catch(error => {
            return error;
        });
}

export async function GetRequestWithAuthentication(api) {
    if (debug) {
        console.log('API => ' + api);
    }
    var token = await Helper.getToken();
    console.log(token)
    return fetch(api, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
        },
    })
        .then(response => response.json())
        .then(responseJson => {
            if (debug) {
                console.log('Response => ' + JSON.stringify(responseJson));
            }
            return responseJson;
        })
        .catch(error => {
            return error;
        });
}