"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleUsers = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.sampleUsers = [
    {
        name: "Joe",
        mail: "joe@admin.com",
        password: bcryptjs_1.default.hashSync("123456"),
        isAdmin: true
    },
    {
        name: "Jhon",
        mail: "jhon@example.com",
        password: bcryptjs_1.default.hashSync("123456"),
        isAdmin: false
    }
];
