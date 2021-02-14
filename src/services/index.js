/* 
The service layer wraps the API calls by creating a centralised axios object that can be reused in different pages. 
An axios object no longer need to be created in the project. All the pages can use the the created functions in api.js which 
encapsules the axios object within it.

*/

import axios from "axios";

class Service {
    constructor() {
        this._axios = this.initialise();
    }
    initialise = () => {
        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        }
        console.log(headers);
        let service = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            headers: headers
        })
        return service;
    }
    get(path) {
        return this._axios.get(path);
    }
    post(path, payload) {
        return this._axios.post(path, payload);
    }

}

export default Service;