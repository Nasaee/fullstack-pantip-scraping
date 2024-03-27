"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const announceSchema = new mongoose_1.default.Schema({
    header: String,
    announceContent: [
        {
            title: {
                type: String,
                required: true,
            },
            link: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
        },
    ],
});
const Announce = mongoose_1.default.model('Announce', announceSchema);
exports.default = Announce;
