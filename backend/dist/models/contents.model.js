"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const contentsSchema = new mongoose_1.default.Schema({
    header: {
        type: String,
        required: true,
    },
    contentImageUrl: {
        type: String,
    },
    link: {
        type: String,
        required: true,
    },
    tags: {
        type: [
            {
                tagName: {
                    type: String,
                    required: true,
                },
                tagLink: {
                    type: String,
                    required: true,
                },
            },
        ],
        required: true,
    },
    author: {
        authorName: {
            type: String,
            required: true,
        },
        authorProfileUrl: {
            type: String,
            required: true,
        },
    },
    commentCount: {
        type: Number,
    },
});
const Contents = mongoose_1.default.model('Contents', contentsSchema);
exports.default = Contents;
