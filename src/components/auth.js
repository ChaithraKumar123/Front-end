class Auth {
    constructor() {
      this.authenticated = false;
    }
  
    login(cb) {
      this.authenticated = true;
      cb();
    }
  
    logout(cb) {
      localStorage.removeItem("login");
      localStorage.removeItem("WorkFlowId");
      localStorage.removeItem("confToken");
      localStorage.removeItem("isAuth");
      localStorage.removeItem("KNC");  
      this.authenticated = false;
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
  export default new Auth();