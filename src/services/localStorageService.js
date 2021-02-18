// LocalStorageService.js
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
        var jwtDecode = require("jwt-decode");
        var decoded = (tokenObj && tokenObj.authenticationResultjwtDecode
            && tokenObj.authenticationResult.idToken) ?
            jwtDecode(tokenObj.authenticationResult.idToken) : null;
        localStorage.setItem("KNC", decoded.sub);

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
        localStorage.getItem("ref");
    }
    clearRef() {
        localStorage.removeItem("ref");
    }
    setWorkFlowId(id) {
        localStorage.setItem("WorkFlowId", id);
    }
    getWorkFlowId() {
        localStorage.getItem("WorkFlowId");
    }
    clearWorkFlowId() {
        localStorage.removeItem("WorkFlowId");
    }

}
export default LocalStorageService;