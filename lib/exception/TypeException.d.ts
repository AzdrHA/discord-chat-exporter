export default class TypeException extends Error {
    constructor(type: string, given: string, key: string);
}
