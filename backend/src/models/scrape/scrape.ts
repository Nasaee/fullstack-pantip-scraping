import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const WEB_URL = 'https://pantip.com';
export async function announceScrape() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(WEB_URL);

  const announceData = await page.evaluate(() => {
    const announce = document.querySelector('div.pt-block');
    const announceObj = {
      header: announce?.querySelector('div.h6')?.textContent || 'Announce',
      announceContent: Array.from(
        announce?.querySelectorAll('li.pt-list-item') || [],
        (el) => {
          const title = el?.querySelector('strong')?.textContent || '';
          const filterIconPattern = /['\uD800-\uDBFF][\uDC00-\uDFFF]/g;

          return {
            title: title,
            link: el?.querySelector('a')?.getAttribute('href') || '#',
            description:
              el
                ?.querySelector('a')
                ?.textContent?.replace(title, '')
                .replace(filterIconPattern, '')
                .trim() || '',
          };
        }
      ),
    };
    return announceObj;
  });
  fs.writeFile(
    path.join(__dirname, './store/announce.json'),
    JSON.stringify(announceData),
    (err: any) => {
      if (err) throw err;
      console.log('The announceData has been saved!');
    }
  );

  await browser.close();
}

export async function pantipRoomScrape() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(WEB_URL);

  const roomData = await page.$$eval('.pt-forum-list', (elements) =>
    elements.map((el) => {
      const route = el
        ?.querySelector('a.gtm-forum-link-home-recommend')
        ?.getAttribute('href');

      const regexUrlPattern = /url\("([^"]+)"\)/;
      const icon =
        el?.querySelector('div.pt-forum-list__icon')?.getAttribute('style') ||
        '';
      const matches = icon.match(regexUrlPattern);

      return {
        title: el?.querySelector('h2.title')?.textContent,
        link: 'https://pantip.com' + route,
        iconUrl: matches ? matches[1] : '',
      };
    })
  );

  fs.writeFile(
    path.join(__dirname, './store/roomData.json'),
    JSON.stringify(roomData),
    (err: any) => {
      if (err) throw err;
      console.log('The announceData has been saved!');
    }
  );

  await browser.close();
}

// announceScrape();
