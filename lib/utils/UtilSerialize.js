"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
class UtilSerialize {
}
exports.default = UtilSerialize;
_a = UtilSerialize;
/**
 * @param {object} object
 * @param {string[]} whitelistAttrs
 * @return {Record<string, any>}
 */
UtilSerialize.normalize = (object, whitelistAttrs) => {
    const res = {};
    whitelistAttrs.map((s) => s
        .replace(/\[([^[\]]*)]/g, '.$1.')
        .split('.')
        .filter((t) => t !== '')
        .reduce((prev, cur) => (res[s] = prev[cur] !== undefined ? prev[cur] : 'N/A'), object));
    return res;
};
/**
 * @param {Array<Record<string, any>>} list
 * @param {string[]} whitelistAttrs
 * @return {Array<Record<string, any>>}
 */
UtilSerialize.normalizeList = (list, whitelistAttrs) => {
    const res = [];
    list.forEach((obj) => {
        res.push(_a.normalize(obj, whitelistAttrs));
    });
    return res;
};
