import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const request = async  (options,type) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
       
    })
    const defaults = {headers: headers};
    options = Object.assign({   credentials: 'include'}, defaults, options);
console.log(options)
    return fetch(options.url, options)
    .then((response)=>response.json())
    .then((responseJson)=>{
        return responseJson});
    
     
};

export function getCurrentUser() {
   
    return request({
        url: API_BASE_URL + "/user-data/me",
        method: 'GET',

     
    });
}
export async function logOutUser(){
    var log= request({
        url: API_BASE_URL + "/auth/logout",
        method: 'Post'
    });
    return 
}

export function login(loginRequest) {
    
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    },'login');
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    },'signup');
}