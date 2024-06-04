"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = exports.BadRequestError = void 0;
const BadRequest_Error_1 = __importDefault(require("./BadRequest.Error"));
exports.BadRequestError = BadRequest_Error_1.default;
const NotFound_Error_1 = __importDefault(require("./NotFound.Error"));
exports.NotFoundError = NotFound_Error_1.default;
