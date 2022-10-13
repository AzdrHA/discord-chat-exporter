export default class UtilSerialize {
    /**
     * @param {object} object
     * @param {string[]} whitelistAttrs
     * @return {Record<string, any>}
     */
    static normalize: (object: Record<string, any>, whitelistAttrs: string[]) => Record<string, any>;
    /**
     * @param {Array<Record<string, any>>} list
     * @param {string[]} whitelistAttrs
     * @return {Array<Record<string, any>>}
     */
    static normalizeList: (list: Array<Record<string, any>>, whitelistAttrs: string[]) => Array<Record<string, any>>;
}
