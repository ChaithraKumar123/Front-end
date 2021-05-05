import cookie from 'cookie';
import Cookies from 'universal-cookie';

export function parseCookies(req) {
    return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
}

const cookies = new Cookies();

const cookieName = 'whaUser';

export const getCookie = (name = cookieName) => {
    return cookies.get(name, { path: '/' });
};

export const createCookie = (
    { authenticationResult },
    name = cookieName,
) => {
    cookies.set(
        name,
        {
            KNC: getKNC(authenticationResult),
            access_token: authenticationResult.idToken,
            refreshToken: authenticationResult.refreshToken,
        },
        {
            maxAge: authenticationResult.expiresIn,
            path: '/',
        },
    );
};

export const getKNC = (authenticationResult) => {
    if (authenticationResult) {
        var jwtDecode = require("jwt-decode");
        var decoded = jwtDecode(authenticationResult.idToken);
        return decoded.sub;
    } else {
        return authenticationResult.userSub;
    }
};

export const deleteCookie = (name = cookieName) => {
    cookies.remove(name, { path: '/' });
};