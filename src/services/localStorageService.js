// LocalStorageService.js
const localStorageService = (function () {
    var _service;
    function _getService() {
        if (!_service) {
            _service = this;
            return _service
        }
        return _service
    }
    function _setToken(tokenObj) {
        localStorage.setItem("access_token", tokenObj.authenticationResult.idToken);
        //   localStorage.setItem("refresh_token", tokenObj.refresh_token);
    }
    function _getAccessToken() {
        return localStorage.getItem("access_token");
    }
    // function _getRefreshToken() {
    //   return localStorage.getItem("refresh_token");
    // }
    function _clearToken() {
        localStorage.removeItem("access_token");
        //   localStorage.removeItem("refresh_token");
    }
    function _setIsAuth(value) {
        localStorage.setItem("isAuth", value)
    }
    function _getIsAuth() {
        return localStorage.getItem("isAuth");
    }
    function _clearIsAuth() {
        localStorage.removeItem("isAuth");
        //   localStorage.removeItem("refresh_token");
    }
    function _setKNC(tokenObj) {
        var jwtDecode = require("jwt-decode");
        var decoded = jwtDecode(tokenObj.authenticationResult.idToken);
        localStorage.setItem("KNC", decoded.sub);
    }
    function _getKNC() {
        return localStorage.getItem("KNC");
    }
    function _clearKNC() {
        localStorage.removeItem("KNC");
        //   localStorage.removeItem("refresh_token");
    }
    return {
        getService: _getService,
        setToken: _setToken,
        getAccessToken: _getAccessToken,
        //   getRefreshToken : _getRefreshToken,
        clearToken: _clearToken,
        getIsAuth: _getIsAuth,
        setIsAuth: _setIsAuth,
        clearIsAuth: _clearIsAuth,
        getKNC: _getKNC,
        setKNC: _setKNC,
        clearKNC: _clearKNC

    }
})();
export default localStorageService;