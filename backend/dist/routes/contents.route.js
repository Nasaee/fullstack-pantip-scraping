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
const express_1 = __importDefault(require("express"));
const contents_model_1 = __importDefault(require("../models/contents.model"));
const contentsRouter = express_1.default.Router();
contentsRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const pageSize = 10;
        const currentPage = parseInt(((_a = req.query.page) === null || _a === void 0 ? void 0 : _a.toString()) || '1');
        const skip = (currentPage - 1) * pageSize;
        const contents = yield contents_model_1.default.find({}, { __v: 0 })
            .skip(skip)
            .limit(pageSize);
        const totalContents = yield contents_model_1.default.countDocuments();
        const totalPages = Math.ceil(totalContents / pageSize);
        if (currentPage > totalPages) {
            return res.sendStatus(404).json({ message: 'Page Not Found' });
        }
        const respose = {
            data: contents,
            totalPages,
            currentPage,
            nextPage: currentPage < totalPages ? currentPage + 1 : null,
        };
        res.status(200).json(respose);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500).json({ message: 'Internal Server Error' });
    }
}));
exports.default = contentsRouter;
