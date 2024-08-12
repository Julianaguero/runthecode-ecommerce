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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userModel_1 = __importDefault(require("../../models/userModel"));
const generateToken_1 = require("../../utils/generateToken");
const signInUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel_1.default.findOne({ mail: req.body.mail });
        console.log(user);
        if (user) {
            if (bcryptjs_1.default.compareSync(req.body.password, user.password)) {
                res.json({
                    _id: user._id,
                    name: user.name,
                    mail: user.mail,
                    isAdmin: user.isAdmin,
                    token: (0, generateToken_1.generateToken)(user)
                });
                return;
            }
        }
        res.status(401).json({ message: "Invalid email or password" });
    }
    catch (error) {
        next(error);
    }
});
exports.default = signInUser;
