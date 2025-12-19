import { MenuItem, NavItem, StorySection } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '首頁', jpLabel: 'ホーム', href: '#hero' },
  { label: '如何享受', jpLabel: '楽しみ方', href: '#how-to-enjoy' },
  { label: '美味菜單', jpLabel: 'お品書き', href: '#menu' },
  { label: '品牌故事', jpLabel: '物語', href: '#story' },
  { label: '製作工藝', jpLabel: '職人技', href: '#craftsmanship' },
  { label: '店舖資訊', jpLabel: '店舗情報', href: '#company' },
  { label: '立即預約', jpLabel: 'ご予約', href: '#contact' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    category: 'beer',
    nameZH: '玉山迷霧・台灣小麥白啤',
    nameJP: '玉山ホワイトエール',
    description: '使用台灣在地小麥釀造，帶有淡淡柑橘與丁香香氣，口感綿密滑順。',
    price: 'NT$ 220',
    image: 'https://picsum.photos/id/1080/600/600',
    tags: ['爽快', 'フルーティー']
  },
  {
    id: '2',
    category: 'beer',
    nameZH: '猛虎・重焙黑拉格',
    nameJP: '猛虎ダークラガー',
    description: '深色麥芽經過重火烘焙，帶有焦糖與咖啡尾韻，與燒烤肉類絕配。',
    price: 'NT$ 240',
    image: 'https://picsum.photos/id/1060/600/600',
    tags: ['香ばしい', 'コク深い']
  },
  {
    id: '3',
    category: 'food',
    nameZH: '炭燒厚切牛舌',
    nameJP: '厚切り牛タン炭火焼',
    description: '嚴選澳洲和牛舌根部位，直火高溫鎖住肉汁，口感脆彈。',
    price: 'NT$ 380',
    image: 'https://picsum.photos/id/1070/600/600',
    tags: ['絶品', 'ジューシー']
  },
  {
    id: '4',
    category: 'food',
    nameZH: '特製醬烤雞肉丸',
    nameJP: '自家製つくね',
    description: '每日現打雞肉泥混入脆骨，刷上秘製 30 年老醬汁，鹹甜適中。',
    price: 'NT$ 160',
    image: 'https://picsum.photos/id/488/600/600',
    tags: ['名物', '手作り']
  }
];

export const STORY_CONTENT: StorySection = {
  titleZH: '台灣魂，日式心',
  titleJP: '台湾の魂、日本の心',
  content: '虎炭 Hutan 誕生於台北的一條小巷弄。我們相信，台灣豐饒土地孕育出的精釀啤酒，與日本職人對直火燒烤的極致追求，能碰撞出前所未有的火花。這不只是一間居酒屋，更是一場關於「旨い（美味）」的文化實驗。',
  image: 'https://picsum.photos/id/225/1200/800'
};