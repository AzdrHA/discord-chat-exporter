"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const makeRequest_1 = require("../ApiRequest/makeRequest");
const TypeException_1 = __importDefault(require("../exception/TypeException"));
class AbstractDiscord {
    /**
     * @param {AbstractDiscordOptions} options
     */
    constructor(options) {
        /**
         * @param {string} url
         * @param {Method} method
         * @return {Promise<any>}
         */
        this.makeRequest = async (url, method) => {
            return await (0, makeRequest_1.makeRequest)(url, method, this.token);
        };
        if (typeof options.token !== 'string')
            throw new TypeException_1.default('string', typeof options.token, 'token');
        this.token = options.token;
    }
}
exports.default = AbstractDiscord;
