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
exports.uploadContents = exports.uploadRoomData = exports.uploadAnnounceData = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const announce_model_1 = __importDefault(require("../announce.model"));
const roomsData_model_1 = __importDefault(require("../roomsData.model"));
const contents_model_1 = __importDefault(require("../contents.model"));
function uploadAnnounceData() {
    return __awaiter(this, void 0, void 0, function* () {
        fs_1.default.readFile(path_1.default.join(__dirname, './store/announce.json'), 'utf8', (err, data) => __awaiter(this, void 0, void 0, function* () {
            if (err) {
                console.error(err);
                throw err;
            }
            const uploadData = JSON.parse(data);
            try {
                yield announce_model_1.default.updateOne({ header: 'Announce' }, uploadData, {
                    upsert: true,
                });
                console.log('Announce data uploaded successfully');
            }
            catch (error) {
                console.error(error);
            }
        }));
    });
}
exports.uploadAnnounceData = uploadAnnounceData;
function uploadRoomData() {
    return __awaiter(this, void 0, void 0, function* () {
        fs_1.default.readFile(path_1.default.join(__dirname, './store/roomData.json'), 'utf8', (err, data) => __awaiter(this, void 0, void 0, function* () {
            if (err) {
                console.error(err);
                throw err;
            }
            const uploadData = JSON.parse(data);
            try {
                yield roomsData_model_1.default.insertMany(uploadData);
                console.log('Room data uploaded successfully');
            }
            catch (error) {
                console.error(error);
            }
        }));
    });
}
exports.uploadRoomData = uploadRoomData;
function uploadContents() {
    return __awaiter(this, void 0, void 0, function* () {
        fs_1.default.readFile(path_1.default.join(__dirname, './store/postContents.json'), 'utf8', (err, data) => __awaiter(this, void 0, void 0, function* () {
            if (err) {
                console.error(err);
                throw err;
            }
            const uploadData = JSON.parse(data);
            try {
                yield contents_model_1.default.insertMany(uploadData);
                console.log('Contents data uploaded successfully');
            }
            catch (error) {
                console.error(error);
            }
        }));
    });
}
exports.uploadContents = uploadContents;
