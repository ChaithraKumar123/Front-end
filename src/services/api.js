/* This file wraps all API calls and exposes the basic functionality to other pages

accepted syntax for post: export cont functionNAme = (body) => _axios.post(URL, body)
accepted syntax for get: export cont functionNAme = _axios.get(URL)
*/
import Service from "./index";
import { PERSONAL_DETAILS, REGISTER, WORK_FLOW_NEW_REG, USER_AUTH, SIGN_IN } from './url';

const _axios = new Service();

export const createPersonalDetails = (body) => _axios.post(PERSONAL_DETAILS, body);
export const createRegister = (body) => _axios.post(REGISTER, body);
export const createWorkFlowNewReg = (body) => _axios.post(WORK_FLOW_NEW_REG, body);
export const createUserAuth = () => _axios.get(USER_AUTH);
export const createSignIn = (body) => _axios.post(SIGN_IN, body);