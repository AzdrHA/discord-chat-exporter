import * as Util from 'util';

export default class TypeException extends Error {
  constructor(type: string, given: string, key: string) {
    super(Util.format('%s must be type %s, %s given', key, type, given));
  }
}
