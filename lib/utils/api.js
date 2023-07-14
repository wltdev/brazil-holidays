"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = 'https://brasilapi.com.br/api/feriados/v1';
const fetch = () => {
    const api = axios_1.default.create({
        baseURL: API_URL,
    });
    api.interceptors.request.use((config) => {
        return Object.assign(Object.assign({}, config), { headers: Object.assign(Object.assign({}, config.headers), { common: Object.assign(Object.assign({}, config.headers.common), { 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': '*' }) }) });
    }, (error) => Promise.reject(error));
    return api;
};
exports.api = fetch();
//# sourceMappingURL=api.js.map