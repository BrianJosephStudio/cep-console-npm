"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const axios_1 = __importDefault(require("axios"));
class Logger {
    constructor(identifier) {
        this.identifier = identifier;
        this.baseUrl = 'https://cep-console.brianure.com';
    }
    log(message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield axios_1.default.post(`${this.baseUrl}/console/log`, {
                    identifier: this.identifier,
                    log: message
                });
            }
            catch (error) {
            }
        });
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield axios_1.default.post(`${this.baseUrl}/console/clear`, {
                    identifier: this.identifier
                });
            }
            catch (error) {
            }
        });
    }
}
exports.Logger = Logger;
