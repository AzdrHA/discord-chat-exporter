"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractDiscord_1 = __importDefault(require("../AbstractDiscord/AbstractDiscord"));
const AbstractExportOptions_1 = require("./AbstractExportOptions");
const TypeException_1 = __importDefault(require("../exception/TypeException"));
const UtilFileSystem_1 = require("../utils/UtilFileSystem");
const path_1 = __importDefault(require("path"));
const Util = __importStar(require("util"));
class AbstractExport extends AbstractDiscord_1.default {
    constructor(options) {
        super(options);
        this.exportJson = async () => {
            this.normalizeList(await this.getRequest(), this.whitelistAttrs);
            this.writeFile(JSON.stringify(await this.getRequest()));
        };
        this.normalizeList = (list, whitelistAttrs) => {
            const res = [];
            list.forEach((obj) => {
                return res.push(this.normalize(obj, whitelistAttrs));
            });
            return res;
        };
        this.normalize = (object, whitelistAttrs) => {
            const res = {};
            whitelistAttrs.map((s) => {
                console.log(s);
                return (s
                    .toString()
                    .replace(/\[([^[\]]*)]/g, '.$1.')
                    .split('.')
                    .filter((t) => t !== '')
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    .reduce((prev, cur) => (prev[cur] !== undefined ? prev[cur] : 'N/A'), object));
            });
            return res;
        };
        this.getRequest = async () => {
            return (await this.makeRequest(this.url(), 'GET')).reverse();
        };
        this.getWhitelistAttrs = () => this.options.whitelistAttrs != null ? (this.whitelistAttrs = this.options.whitelistAttrs) : this.whitelistAttrs;
        this.writeFile = (data) => {
            var _a, _b;
            return (0, UtilFileSystem_1.writeFile)(data, path_1.default.join((_a = this.options.output) !== null && _a !== void 0 ? _a : process.cwd(), (_b = this.options.fileName) !== null && _b !== void 0 ? _b : Util.format('export_%s', Date.now())), this.options.format);
        };
        if (!AbstractExportOptions_1.fileExtension.includes(options.format))
            throw new TypeException_1.default(AbstractExportOptions_1.fileExtension.join(', '), options.format, 'format');
        if (!Array.isArray(options.whitelistAttrs))
            throw new TypeException_1.default('array', typeof options.whitelistAttrs, 'whiteList');
        this.options = options;
        void this.exportJson();
    }
}
exports.default = AbstractExport;
