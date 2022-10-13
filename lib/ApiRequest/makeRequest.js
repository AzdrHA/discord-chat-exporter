"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRequest = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * @param {string} url
 * @param {Method} method
 * @param {string|null} token
 * @return {Promise<any>}
 */
const makeRequest = async (url, method, token) => {
    const headers = token != null
        ? {
            authorization: `Bot ` + token,
        }
        : {};
    return await new Promise(async (resolve, reject) => await (0, axios_1.default)({ baseURL: 'https://discord.com/api/v10', url, method, headers })
        .then((r) => resolve(r.data))
        .catch((e) => reject(e)));
};
exports.makeRequest = makeRequest;
