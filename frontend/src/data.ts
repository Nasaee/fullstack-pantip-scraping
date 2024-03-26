import { nanoid } from '@reduxjs/toolkit';
import { GiStarFormation } from 'react-icons/gi';
import { MdOutlineExplore } from 'react-icons/md';

import { IoHomeOutline } from 'react-icons/io5';
import { SlFeed } from 'react-icons/sl';
import { BsHandThumbsUp } from 'react-icons/bs';
import generateRandomNumber from './utils/generateRandomNumber';

export const menu = [
  {
    id: nanoid(),
    title: 'หน้าแรก',
    path: '/',
    icon: IoHomeOutline,
  },
  {
    id: nanoid(),
    title: 'My Feed',
    path: '/my-feed',
    icon: SlFeed,
  },
  {
    id: nanoid(),
    title: 'Pantip Pick',
    path: '/pantip-pick',
    icon: BsHandThumbsUp,
  },
  {
    id: nanoid(),
    title: 'Pantip Hitz',
    path: '/pantip-hit',
    icon: GiStarFormation,
  },
  {
    id: nanoid(),
    title: 'Explore',
    path: '/explore',
    icon: MdOutlineExplore,
  },
];

export const highlights = [
  {
    id: nanoid(),
    image:
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: '[Pantip Point] ชวนเธอคนดีมาเล่น #เกมเขาวงกต พร้อมตาม',
  },
  {
    id: nanoid(),
    image:
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: '🎧 PANTIP PODCAST 🎧 3 อันดับกระทู้ฮิตบนพันทิป',
  },
  {
    id: nanoid(),
    image:
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'ข่าวดี! เพื่อนๆ สามารถสร้างรายได้ไปพร้อมกับใช้งาน',
  },
  {
    id: nanoid(),
    image:
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Pantip Pick of the Year 2023 - รวม 10 สุดยอดกระทู้',
  },
  {
    id: nanoid(),
    image:
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'พันทิปนานุกรม … ชวนมาดู Cover Design วันสำคัญ บน',
  },
  {
    id: nanoid(),
    image:
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: '[Pantip Point] ชวนเธอคนดีมาเล่น #เกมเขาวงกต พร้อมตาม',
  },
];

export const pantipRealTime = [
  {
    id: generateRandomNumber(),
    header:
      'โยธวาทิตสตรีวิทยา 2 คืนเงินคุณตันหรือยังคะ หลานเป็นเด็กวงโยมาที่นี่มาเล่าให้ฟังว่าถูกรุ่นพี่บังคับให้ไปขอเงินเอกชนอึกรอบ',
    comment: 12,
    add: 2,
  },
  {
    id: generateRandomNumber(),
    header:
      'ผู้สมัครที่เขียน Resume ว่าใช้ภาษาอังกฤษได้ ที่พบส่วนใหญ่ใช้ไม่ได้จริงเลย T T',
    comment: 12,
    add: 2,
  },
  {
    id: generateRandomNumber(),
    header: 'สัมภาษณ์งานภาษาอังกฤษไม่ได้ ควรไปต่อดีไหม',
    comment: 12,
    add: 2,
  },
  {
    id: generateRandomNumber(),
    header: 'งานมหกรรมฟุตบอลช่อง3 ครบรอบ 54 ปี จัด 23 มีนาคม 2567',
    comment: 12,
    add: 2,
  },
  {
    id: generateRandomNumber(),
    header: 'คนแห่ เปิดท้ายขายเซลีน หลัง "ลิซ่า" พ้น Celine',
    comment: 12,
    add: 2,
  },
  {
    id: generateRandomNumber(),
    header: 'ผมจะจ้างแม่บ้านทำงานในส่วนของผม แต่แฟนผมบอกว่า ผมเห็นแก่ตัว !',
    comment: 12,
    add: 2,
  },
  {
    id: generateRandomNumber(),
    header:
      'LOVB ลีคน้องใหม่เงินลงทุนหนาแห่งสหรัฐอเมริกา ดีลผู้เล่นทั้ง 84 คนในลีคเกือบเสร็จสิ้นหมดแล้ว จะมีสาวไทยหรือไม่??',
    comment: 12,
    add: 2,
  },
  {
    id: generateRandomNumber(),
    header: 'ทำไมถึงคิดว่าลิซ่าจะไปแบรนด์ LV',
    comment: 12,
    add: 2,
  },
  {
    id: generateRandomNumber(),
    header: 'ทำไมโรงเรียนถึงไม่สอนเรื่องการเงินให้กับนักเรียน',
    comment: 12,
    add: 2,
  },
  {
    id: generateRandomNumber(),
    header: 'ร้านKFC ตอนเลิกงาน ถ้าไก่ขายไม่หมด ทำไง?',
    comment: 12,
    add: 2,
  },
  {
    id: generateRandomNumber(),
    header: 'สาวพรพรรณ น่ารักมาก สนับสนุนทีมชาติไทย',
    comment: 12,
    add: 2,
  },
  {
    id: generateRandomNumber(),
    header: 'ถ้ารู้ว่าภรรยาของเพื่อนสนิทมีคนอื่น คุณจะบอกเพื่อนไหม',
    comment: 12,
    add: 2,
  },
];
