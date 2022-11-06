import {CONFIG} from "./config";

const baseUrl = CONFIG.ENDPOINT;
export const HttpApi = {
    testGet: `${baseUrl}/demo/getTest`,
    testPost: `${baseUrl}/demo/postTest`,
    register: `${baseUrl}/register`,
    login: `${baseUrl}/login`,
    me: `${baseUrl}/iam/me`,
    logout: `${baseUrl}/logout`,
    menus: `${baseUrl}/menus`,
    permission: `${baseUrl}/permissions`,
    dept: `${baseUrl}/depts`,
    role: `${baseUrl}/roles`,
};
