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
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const path_1 = __importDefault(require("path"));
// import {
//   uploadAnnounceData,
//   uploadContents,
//   uploadRoomData,
// } from './models/scrape/uploadData';
const mongoConnect_1 = require("./utils/mongoConnect");
const announce_route_1 = __importDefault(require("./routes/announce.route"));
const roomsData_route_1 = __importDefault(require("./routes/roomsData.route"));
const contents_route_1 = __importDefault(require("./routes/contents.route"));
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    // origin: '*', // development
    origin: process.env.FRONTEND_URL, // production
}));
app.use(express_1.default.static(path_1.default.join(__dirname, '../../client/dist')));
app.use('/api/announce', announce_route_1.default);
app.use('/api/roomsData', roomsData_route_1.default);
app.use('/api/contents', contents_route_1.default);
app.use('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../frontend/dist/index.html'));
});
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        (0, mongoConnect_1.mongoConnect)();
        // announceScrape();
        // pantipRoomScrape();
        // getPantipPostContents();
        // uploadAnnounceData();
        // uploadRoomData();
        // uploadContents();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    });
}
startServer();
