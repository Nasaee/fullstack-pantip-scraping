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
exports.getPantipPostContents = exports.pantipRoomScrape = exports.announceScrape = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const WEB_URL = 'https://pantip.com';
const WEB_CONTENT_URL = 'https://pantip.com/home/pick';
function announceScrape() {
    return __awaiter(this, void 0, void 0, function* () {
        const browser = yield puppeteer_1.default.launch();
        const page = yield browser.newPage();
        yield page.goto(WEB_URL);
        const announceData = yield page.evaluate(() => {
            var _a;
            const announce = document.querySelector('div.pt-block');
            const announceObj = {
                header: ((_a = announce === null || announce === void 0 ? void 0 : announce.querySelector('div.h6')) === null || _a === void 0 ? void 0 : _a.textContent) || 'Announce',
                announceContent: Array.from((announce === null || announce === void 0 ? void 0 : announce.querySelectorAll('li.pt-list-item')) || [], (el) => {
                    var _a, _b, _c, _d;
                    const title = ((_a = el === null || el === void 0 ? void 0 : el.querySelector('strong')) === null || _a === void 0 ? void 0 : _a.textContent) || '';
                    const filterIconPattern = /['\uD800-\uDBFF][\uDC00-\uDFFF]/g;
                    return {
                        title: title,
                        link: ((_b = el === null || el === void 0 ? void 0 : el.querySelector('a')) === null || _b === void 0 ? void 0 : _b.getAttribute('href')) || '#',
                        description: ((_d = (_c = el === null || el === void 0 ? void 0 : el.querySelector('a')) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.replace(title, '').replace(filterIconPattern, '').trim()) || '',
                    };
                }),
            };
            return announceObj;
        });
        fs_1.default.writeFile(path_1.default.join(__dirname, './store/announce.json'), JSON.stringify(announceData), (err) => {
            if (err)
                throw err;
            console.log('The announceData has been saved!');
        });
        yield browser.close();
    });
}
exports.announceScrape = announceScrape;
function pantipRoomScrape() {
    return __awaiter(this, void 0, void 0, function* () {
        const browser = yield puppeteer_1.default.launch();
        const page = yield browser.newPage();
        yield page.goto(WEB_URL);
        const roomData = yield page.$$eval('.pt-forum-list', (elements) => elements.map((el) => {
            var _a, _b, _c;
            const route = (_a = el === null || el === void 0 ? void 0 : el.querySelector('a.gtm-forum-link-home-recommend')) === null || _a === void 0 ? void 0 : _a.getAttribute('href');
            const regexUrlPattern = /url\("([^"]+)"\)/;
            const icon = ((_b = el === null || el === void 0 ? void 0 : el.querySelector('div.pt-forum-list__icon')) === null || _b === void 0 ? void 0 : _b.getAttribute('style')) ||
                '';
            const matches = icon.match(regexUrlPattern);
            return {
                title: (_c = el === null || el === void 0 ? void 0 : el.querySelector('h2.title')) === null || _c === void 0 ? void 0 : _c.textContent,
                link: 'https://pantip.com' + route,
                iconUrl: matches ? matches[1] : '',
            };
        }));
        fs_1.default.writeFile(path_1.default.join(__dirname, './store/roomData.json'), JSON.stringify(roomData), (err) => {
            if (err)
                throw err;
            console.log('The announceData has been saved!');
        });
        yield browser.close();
    });
}
exports.pantipRoomScrape = pantipRoomScrape;
function getPantipPostContents() {
    return __awaiter(this, void 0, void 0, function* () {
        const browser = yield puppeteer_1.default.launch();
        const page = yield browser.newPage();
        yield page.goto(WEB_CONTENT_URL);
        const postContents = yield page.$$eval('.pt-list.pt-list__type-a li.pt-list-item', (elements) => elements.map((el) => {
            var _a, _b, _c, _d, _e, _f, _g;
            const regexUrlPattern = /url\("([^"]+)"\)/;
            const imageUrl = ((_a = el.querySelector('.pt-list-item__img')) === null || _a === void 0 ? void 0 : _a.getAttribute('style')) || '';
            const matches = imageUrl.match(regexUrlPattern);
            const tags = Array.from(el.querySelectorAll('div.pt-list-item__tag a.gtm-pick-link'), (el) => {
                return {
                    tagName: (el === null || el === void 0 ? void 0 : el.textContent) || '',
                    tagLink: (el === null || el === void 0 ? void 0 : el.getAttribute('href'))
                        ? 'https://pantip.com' + (el === null || el === void 0 ? void 0 : el.getAttribute('href'))
                        : '',
                };
            });
            const author = {
                authorName: ((_b = el.querySelector('h5>a.gtm-pick-link')) === null || _b === void 0 ? void 0 : _b.textContent) || '',
                authorProfileUrl: ((_c = el.querySelector('h5>a.gtm-pick-link')) === null || _c === void 0 ? void 0 : _c.getAttribute('href')) || '',
            };
            const commentCount = (_e = (_d = el
                .querySelector('span.pt-li_stats-comment')) === null || _d === void 0 ? void 0 : _d.textContent) === null || _e === void 0 ? void 0 : _e.replace('message', '');
            return {
                header: (_f = el.querySelector('h2')) === null || _f === void 0 ? void 0 : _f.textContent,
                contentImageUrl: matches ? matches[1] : '',
                link: ((_g = el.querySelector('h2>a.gtm-pick-link')) === null || _g === void 0 ? void 0 : _g.getAttribute('href')) || '',
                tags,
                author,
                commentCount: parseInt(commentCount || '0'),
            };
        }));
        fs_1.default.writeFile(path_1.default.join(__dirname, './store/postContents.json'), JSON.stringify(postContents), (err) => {
            if (err)
                throw err;
            console.log('The postContents has been saved!');
        });
    });
}
exports.getPantipPostContents = getPantipPostContents;
