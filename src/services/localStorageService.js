/* LocalStorageService.js
this is a wrapper class for local storage. Please add a getter, setter and a clear function for
creating a new item in local storage.

*/
class LocalStorageService {

    setToken(tokenObj) {
        localStorage.setItem("access_token", tokenObj.authenticationResult.idToken);
        //   localStorage.setItem("refresh_token", tokenObj.refresh_token);
    }
    getToken() {
        return localStorage.getItem("access_token");
    }
    // function _getRefreshToken() {
    //   return localStorage.getItem("refresh_token");
    // }
    clearToken() {
        localStorage.removeItem("access_token");
        //   localStorage.removeItem("refresh_token");
    }
    setIsAuth(value) {
        localStorage.setItem("isAuth", value)
    }
    getIsAuth() {
        return localStorage.getItem("isAuth");
    }
    clearIsAuth() {
        localStorage.removeItem("isAuth");
    }
    setKNC(tokenObj) {
        if (tokenObj.authenticationResult) {
            var jwtDecode = require("jwt-decode");
            var decoded = jwtDecode(tokenObj.authenticationResult.idToken);
            localStorage.setItem("KNC", decoded.sub);
        } else {
            localStorage.setItem("KNC", tokenObj.userSub);
        }

    }
    getKNC() {
        return localStorage.getItem("KNC");
    }
    clearKNC() {
        localStorage.removeItem("KNC");
    }
    setConfToken(tokenObj) {
        localStorage.setItem("confToken", tokenObj)
    }
    getConfToken() {
        return localStorage.getItem("confToken");
    }
    clearConfToken() {
        localStorage.removeItem("confToken");
    }
    setRef(value) {
        localStorage.setItem("ref", value);
    }
    getRef() {
        return localStorage.getItem("ref");
    }
    clearRef() {
        localStorage.removeItem("ref");
    }
    setWorkFlowId(id) {
        localStorage.setItem("WorkFlowId", id);
    }
    getWorkFlowId() {
        return localStorage.getItem("WorkFlowId");
    }
    clearWorkFlowId() {
        localStorage.removeItem("WorkFlowId");
    }

}
export default LocalStorageService;