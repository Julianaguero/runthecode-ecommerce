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
const userModel_1 = __importDefault(require("../../models/userModel"));
const generateToken_1 = require("../../utils/generateToken");
const CustomError_1 = __importDefault(require("../../error/CustomError"));
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body.name;
    const mail = req.body.mail;
    const password = req.body.password;
    try {
        if (!name) {
            throw new CustomError_1.default("need to have a title", 400, "BAD_REQUEST");
        }
        console.log(name, mail, password);
        const newUser = yield userModel_1.default.create({
            name: name,
            mail: mail,
            password: password,
        });
        return res.json({
            _id: newUser._id,
            name: newUser.name,
            mail: newUser.mail,
            isAdmin: newUser.isAdmin,
            token: (0, generateToken_1.generateToken)(newUser),
        });
    }
    catch (error) {
        next(error);
    }
});
exports.default = createUser;
