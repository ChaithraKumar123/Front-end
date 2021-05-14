/* This file wraps all API calls and exposes the basic functionality to other pages

accepted syntax for post: export cont functionNAme = (body) => _axios.post(URL, body)
accepted syntax for get: export cont functionNAme = _axios.get(URL)
*/

import Service from "./index";
import {
    PERSONAL_DETAILS,
    REGISTER, WORK_FLOW_NEW_REG,
    USER_AUTH, SIGN_IN,
    WORKFLOW, FORGOT_PASSWORD,
    CONFIRM_PASSWORD, ETHNICITY,
    COUNTRY,
    POBdetails,
    SAVE_WORKFLOW,
    SIGNUP,
    NAME_DETAILS,
    ADDRESS_DETAILS,
    ATTRIBUTE_DETAILS,
    NEXT_WORKFLOW

} from './url';

const _axios = new Service();

export const createPersonalDetails = (body) => _axios.post(PERSONAL_DETAILS, body);
export const createRegister = (body) => _axios.post(REGISTER, body);
export const createWorkFlowNewReg = (body) => _axios.post(WORK_FLOW_NEW_REG, body);
export const getUserAuth = () => _axios.get(USER_AUTH);
export const createSignIn = (body) => _axios.post(SIGN_IN, body);
export const getWorkFlow = (params) => _axios.get(WORKFLOW, params);
export const createWorkFlow = (body) => _axios.post(WORKFLOW, body);
export const createForgotPassword = (body) => _axios.post(FORGOT_PASSWORD, body);
export const createConfirmPassword = (body) => _axios.post(CONFIRM_PASSWORD, body);
export const getEthnicity = () => _axios.get(ETHNICITY);
export const getPersonalDetails = (params) => _axios.get(PERSONAL_DETAILS, params);
export const getCountry = () => _axios.get(COUNTRY);
export const getPOBDetails = (params) => _axios.get(POBdetails, params);
export const deletePOBDetails = (params) => _axios.delete(POBdetails, params);
export const createPOBDetails = (body) => _axios.post(POBdetails, body);
export const createSaveWorkflow = (body) => _axios.post(SAVE_WORKFLOW, body);
export const createSignUpPatient = (body) => _axios.post(SIGNUP, body);
export const saveNameDetails = (body) => _axios.post(NAME_DETAILS, body);
export const saveAddressDetails = (body) => _axios.post(ADDRESS_DETAILS, body);
export const savePersonAttributesDetails = (body) => _axios.post(ATTRIBUTE_DETAILS, body);
export const getNextWorkFlowDetails = (params) => _axios.get(NEXT_WORKFLOW, params);