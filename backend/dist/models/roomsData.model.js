"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const roomDataSchema = new mongoose_1.default.Schema({
    title: String,
    link: String,
    iconUrl: String,
});
const RoomData = mongoose_1.default.model('RoomData', roomDataSchema);
exports.default = RoomData;
