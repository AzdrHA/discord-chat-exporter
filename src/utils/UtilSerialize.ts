export default class UtilSerialize {
  /**
   * @param {object} object
   * @param {string[]} whitelistAttrs
   * @return {Record<string, any>}
   */
  public static normalize = (object: Record<string, any>, whitelistAttrs: string[]): Record<string, any> => {
    const res: Record<string, any> = {};
    whitelistAttrs.map((s) =>
      s
        .replace(/\[([^[\]]*)]/g, '.$1.')
        .split('.')
        .filter((t) => t !== '')
        .reduce((prev, cur) => (res[s] = prev[cur] !== undefined ? prev[cur] : 'N/A'), object),
    );
    return res;
  };

  /**
   * @param {Array<Record<string, any>>} list
   * @param {string[]} whitelistAttrs
   * @return {Array<Record<string, any>>}
   */
  public static normalizeList = (
    list: Array<Record<string, any>>,
    whitelistAttrs: string[],
  ): Array<Record<string, any>> => {
    const res: Array<Record<string, any>> = [];
    list.forEach((obj) => {
      res.push(this.normalize(obj, whitelistAttrs));
    });
    return res;
  };
}
