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
const UtilsFileSystem_1 = __importDefault(require("../utils/UtilsFileSystem"));
const path_1 = __importDefault(require("path"));
const TypeException_1 = __importDefault(require("../exception/TypeException"));
const Util = __importStar(require("util"));
const UtilSerialize_1 = __importDefault(require("../utils/UtilSerialize"));
class AbstractExport extends AbstractDiscord_1.default {
    constructor(options) {
        super(options);
        this.getWhiteListData = () => this.options.whiteList != null ? (this.whitelistData = this.options.whiteList) : this.whitelistData;
        this.writeFile = (data) => {
            var _a, _b;
            UtilsFileSystem_1.default.writeFile(data, path_1.default.join((_a = this.options.output) !== null && _a !== void 0 ? _a : process.cwd(), (_b = this.options.fileName) !== null && _b !== void 0 ? _b : Util.format('export_%s', Date.now())), this.options.format);
        };
        this.getRequest = async () => (await this.makeRequest(this.url(), 'GET')).reverse();
        this.exportJson = async () => {
            if (this.url() == null)
                throw new Error('fgiojgisdjgisdjio');
            this.writeFile(JSON.stringify(await this.getRequest()));
        };
        this.exportCsv = async () => {
            const data = this.serializeList(await this.getRequest());
            const res = [this.getWhiteListData().join(';')];
            data.forEach((obj) => {
                res.push(Object.values(obj).join(';'));
            });
            this.writeFile(res.join('\n'));
        };
        /**
         * @template T
         * @param {T[]} object
         */
        this.serialize = (object) => {
            return UtilSerialize_1.default.normalize(object, this.getWhiteListData());
        };
        /**
         * @template T
         * @param {T[]} object
         */
        this.serializeList = (object) => {
            return UtilSerialize_1.default.normalizeList(object, this.getWhiteListData());
        };
        if (!AbstractExportOptions_1.fileExtension.includes(options.format))
            throw new TypeException_1.default(AbstractExportOptions_1.fileExtension.join(', '), options.format, 'format');
        if (!Array.isArray(options.whiteList))
            throw new TypeException_1.default('array', typeof options.whiteList, 'whiteList');
        this.options = options;
        switch (options.format) {
            case 'json':
                void this.exportJson();
                break;
            case 'csv':
                void this.exportCsv();
                break;
        }
    }
}
exports.default = AbstractExport;
