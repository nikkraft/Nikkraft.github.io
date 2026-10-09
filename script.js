/* ============================================================
   POZDRAV — script.js
   Без админки, игры и статистики. С историей.
   ============================================================ */

/* ===== ЛОКАЛИЗАЦИЯ ===== */
let L = localStorage.uiLang || (navigator.language?.startsWith('ru') ? 'ru' : 'en');

const I18N = {
ru: {
  title: "🎉 Pozdrav — генератор поздравлений",
  subtitle: "44 шаблона • 25 анимаций • 8 тем • Drag&Drop • Физика частиц • Озвучка • PDF • QR",
  btnFullscreen: "🔍 Полный экран", btnRandom: "🎲 Случайно",
  btnQR: "📱 QR", btnPreviewTab: "🆕 Превью в новой вкладке",
  templatesTitle: "📋 Готовые шаблоны", btnSaveCurrent: "+ Сохранить текущее",
  tplCounter: (n, t) => `(${n} из ${t})`, noTemplatesInCat: "Нет шаблонов в этой категории",
  constructorTitle: "✏️ Конструктор", tabBasic: "Основное", tabStyle: "Стиль",
  tabLayout: "Макет", tabEffects: "Эффекты", tabMedia: "Медиа", tabExtras: "Доп.",
  labelRecipient: "Имя получателя", placeholderRecipient: "Например: Анна",
  labelTitle: "Заголовок", placeholderTitle: "С днём рождения!",
  labelMessage: "Текст поздравления", placeholderMessage: "Введите текст...",
  counterChars: "символов", counterWords: "слов", counterRead: "сек чтения",
  labelSender: "От кого", placeholderSender: "Ваш друг Иван",
  labelEmojiLine: "Строка эмодзи", labelVars: "🔤 Переменные (клик — вставить)",
  labelEmoji: "Быстрые эмодзи:", labelStickers: "Стикеры:",
  labelAppTheme: "🎨 Тема интерфейса", labelColorTheme: "Цветовая тема превью",
  labelCustomGrad: "Кастомный градиент", labelSize: "Размер заголовка",
  labelMsgSize: "Размер текста", labelFont: "Шрифт заголовка",
  labelTitleColor: "Цвет заголовка", labelMsgColor: "Цвет сообщения",
  labelAlign: "Выравнивание", alignCenter: "По центру", alignLeft: "Слева",
  alignRight: "Справа", alignJustify: "По ширине",
  labelRadius: "Скругление", labelOpacity: "Прозрачность фона",
  labelLayout: "Макет поздравления", labelBlocks: "Порядок блоков",
  btnResetOrder: "↩️ Сбросить порядок",
  labelAnimation: "Анимация (25)", optNoAnim: "Без анимации",
  grpClassic: "Классические", grpEntry: "Вход", grpLoop: "Постоянные",
  grpGlow: "Светящиеся", grpSpecial: "Эффектные",
  labelParticles: "Падающие частицы", optParticlesNone: "Нет",
  labelPhysics: "🎭 Физика частиц", labelPartIntensity: "Интенсивность",
  labelPartSpeed: "Скорость", speedSlow: "Медленно", speedNormal: "Обычно",
  speedFast: "Быстро", speedVeryFast: "Очень быстро",
  labelGlow: "Свечение", glowNone: "Нет", glowWhite: "Белое",
  glowRed: "Красное", glowGreen: "Зелёное", glowBlue: "Синее",
  glowGold: "Золотое", glowPink: "Розовое",
  labelMusic: "🎵 Музыка (MP3 URL)", labelImage: "🖼️ Изображение / GIF (URL)",
  labelImgSize: "Размер изображения", labelVideo: "🎬 YouTube",
  labelPopularStickers: "Популярные стикеры",
  labelVoice: "🗣️ Озвучка", labelRate: "Скорость речи", labelPitch: "Высота голоса",
  btnSpeak: "🔊 Озвучить", btnStopSpeak: "⏹️ Стоп",
  labelCountdown: "⏰ Обратный отсчёт", labelGiftWrap: "🎁 Упаковка",
  giftNone: "Нет", giftPresent: "🎁 Подарок", giftLetter: "💌 Письмо",
  giftCracker: "🎊 Хлопушка", giftBox: "📦 Коробка",
  labelLangTemplate: "🔤 Язык шаблона", btnMusic: "🎵 Музыка",
  btnDraftSave: "💾 Черновик", btnDraftLoad: "📂 Загрузить",
  labelHotkeys: "⌨️ Горячие клавиши",
  hkCopy: "Копировать", hkHTML: "Скачать HTML", hkPDF: "Скачать PDF",
  hkRandom: "Случайный шаблон", hkFullscreen: "Полный экран", hkEsc: "Закрыть всё",
  previewTitle: "👁️ Предпросмотр", btnExpand: "Развернуть", btnCopy: "📋 Копировать",
  btnHTML: "💾 HTML", btnPNG: "🖼️ PNG", btnPDF: "📄 PDF", btnShare: "📤 Поделиться",
  historyTitle: "📜 История", btnClear: "Очистить", historyEmpty: "История пуста.",
  historyNoTitle: "Без названия", btnHistoryExport: "⬇️ Экспорт",
  importExportTitle: "💾 Импорт / Экспорт", btnJSON: "⬇️ JSON",
  btnImportJSON: "⬆️ Импорт JSON", btnTemplates: "⬇️ Шаблоны",
  btnImportTemplates: "⬆️ Импорт шаблонов", btnClearAll: "🗑️ Очистить",
  modalQRTitle: "📱 QR-код", modalQRSubtitle: "Отсканируйте телефоном",
  btnDownloadQR: "💾 Скачать PNG", btnClose: "Закрыть",
  tt: (n) => "Шаблон: " + n, ts: (c) => 'Шаблон сохранён в "' + c + '"',
  te: "Шаблоны экспортированы", ti: (n) => "Импортировано: " + n,
  tfe: "Ошибка формата", tj: "JSON экспортирован", tdi: "Данные импортированы!",
  tij: "Неверный JSON", th: "История экспортирована",
  thd: "HTML скачан!", tpd: "PNG скачан!", tpdf: "Сохраните как PDF",
  tpe: "Ошибка PNG", tpdfe: "Ошибка PDF", tqe: "QR недоступен офлайн",
  tqd: "QR скачан", tc: "Скопировано!", tsh: "Отправлено!",
  tfc: "Форма очищена", thc: "История очищена",
  tr: "🎲 Случайное поздравление!", tnt: "Нет шаблонов в фильтре",
  tds: "💾 Черновик сохранён", tdl: "Черновик загружен", tde: "Черновик пуст",
  tms: "🎵 Музыка играет", tme: "Не удалось воспроизвести",
  tmu: "Укажите ссылку на MP3", tss: "🔊 Озвучка началась",
  tst: "Озвучка остановлена", tsu: "Озвучка не поддерживается",
  trl: "Запись загружена",
  tg: (n) => "Стикер: " + n,
  tpv: "Открыто в новой вкладке", tth: "Тема применена",
  tl: "🌐 Русский язык",
  cdt: (n) => 'Удалить шаблон "' + n + '"?', ptn: "Название шаблона:",
  ptd: "Мой шаблон",
  pc: "Категория (Праздники/Семья/Романтика/Друзья/Работа/Дети/Особые):",
  pcd: "Праздники",
  cch: "Очистить всю историю?", ccf: "Очистить форму?",
  dft: "Заголовок", dfm: "Текст поздравления появится здесь..."
},
en: {
  title: "🎉 Pozdrav — Greeting Generator",
  subtitle: "44 templates • 25 animations • 8 themes • Drag&Drop • Particle physics • Voice • PDF • QR",
  btnFullscreen: "🔍 Fullscreen", btnRandom: "🎲 Random",
  btnQR: "📱 QR", btnPreviewTab: "🆕 Preview in new tab",
  templatesTitle: "📋 Templates", btnSaveCurrent: "+ Save current",
  tplCounter: (n, t) => `(${n} of ${t})`, noTemplatesInCat: "No templates in this category",
  constructorTitle: "✏️ Constructor", tabBasic: "Basic", tabStyle: "Style",
  tabLayout: "Layout", tabEffects: "Effects", tabMedia: "Media", tabExtras: "Extra",
  labelRecipient: "Recipient", placeholderRecipient: "E.g.: Anna",
  labelTitle: "Title", placeholderTitle: "Happy Birthday!",
  labelMessage: "Greeting text", placeholderMessage: "Enter text...",
  counterChars: "chars", counterWords: "words", counterRead: "sec read",
  labelSender: "From", placeholderSender: "Your friend John",
  labelEmojiLine: "Emoji line", labelVars: "🔤 Variables (click to insert)",
  labelEmoji: "Quick emojis:", labelStickers: "Stickers:",
  labelAppTheme: "🎨 UI theme", labelColorTheme: "Preview color theme",
  labelCustomGrad: "Custom gradient", labelSize: "Title size",
  labelMsgSize: "Text size", labelFont: "Title font",
  labelTitleColor: "Title color", labelMsgColor: "Message color",
  labelAlign: "Text align", alignCenter: "Center", alignLeft: "Left",
  alignRight: "Right", alignJustify: "Justify",
  labelRadius: "Corner radius", labelOpacity: "BG opacity",
  labelLayout: "Greeting layout", labelBlocks: "Block order",
  btnResetOrder: "↩️ Reset order",
  labelAnimation: "Animation (25)", optNoAnim: "No animation",
  grpClassic: "Classic", grpEntry: "Entry", grpLoop: "Continuous",
  grpGlow: "Glowing", grpSpecial: "Special",
  labelParticles: "Falling particles", optParticlesNone: "None",
  labelPhysics: "🎭 Particle physics", labelPartIntensity: "Intensity",
  labelPartSpeed: "Speed", speedSlow: "Slow", speedNormal: "Normal",
  speedFast: "Fast", speedVeryFast: "Very fast",
  labelGlow: "Glow", glowNone: "None", glowWhite: "White",
  glowRed: "Red", glowGreen: "Green", glowBlue: "Blue",
  glowGold: "Gold", glowPink: "Pink",
  labelMusic: "🎵 Music (MP3 URL)", labelImage: "🖼️ Image / GIF (URL)",
  labelImgSize: "Image size", labelVideo: "🎬 YouTube",
  labelPopularStickers: "Popular stickers",
  labelVoice: "🗣️ Voice", labelRate: "Speech rate", labelPitch: "Voice pitch",
  btnSpeak: "🔊 Speak", btnStopSpeak: "⏹️ Stop",
  labelCountdown: "⏰ Countdown", labelGiftWrap: "🎁 Gift wrap",
  giftNone: "None", giftPresent: "🎁 Gift", giftLetter: "💌 Letter",
  giftCracker: "🎊 Cracker", giftBox: "📦 Box",
  labelLangTemplate: "🔤 Template language", btnMusic: "🎵 Music",
  btnDraftSave: "💾 Draft", btnDraftLoad: "📂 Load",
  labelHotkeys: "⌨️ Hotkeys",
  hkCopy: "Copy", hkHTML: "Download HTML", hkPDF: "Download PDF",
  hkRandom: "Random template", hkFullscreen: "Fullscreen", hkEsc: "Close all",
  previewTitle: "👁️ Preview", btnExpand: "Expand", btnCopy: "📋 Copy",
  btnHTML: "💾 HTML", btnPNG: "🖼️ PNG", btnPDF: "📄 PDF", btnShare: "📤 Share",
  historyTitle: "📜 History", btnClear: "Clear", historyEmpty: "History is empty.",
  historyNoTitle: "Untitled", btnHistoryExport: "⬇️ Export",
  importExportTitle: "💾 Import / Export", btnJSON: "⬇️ JSON",
  btnImportJSON: "⬆️ Import JSON", btnTemplates: "⬇️ Templates",
  btnImportTemplates: "⬆️ Import templates", btnClearAll: "🗑️ Clear",
  modalQRTitle: "📱 QR code", modalQRSubtitle: "Scan with phone",
  btnDownloadQR: "💾 Download PNG", btnClose: "Close",
  tt: (n) => "Template: " + n, ts: (c) => 'Saved to "' + c + '"',
  te: "Templates exported", ti: (n) => "Imported: " + n,
  tfe: "Format error", tj: "JSON exported", tdi: "Data imported!",
  tij: "Invalid JSON", th: "History exported",
  thd: "HTML downloaded!", tpd: "PNG downloaded!", tpdf: "Save as PDF",
  tpe: "PNG error", tpdfe: "PDF error", tqe: "QR unavailable offline",
  tqd: "QR downloaded", tc: "Copied!", tsh: "Shared!",
  tfc: "Form cleared", thc: "History cleared",
  tr: "🎲 Random greeting!", tnt: "No templates in filter",
  tds: "💾 Draft saved", tdl: "Draft loaded", tde: "Draft is empty",
  tms: "🎵 Music playing", tme: "Playback failed",
  tmu: "Provide an MP3 URL", tss: "🔊 Speaking...",
  tst: "Speech stopped", tsu: "Speech not supported",
  trl: "Record loaded",
  tg: (n) => "Sticker: " + n,
  tpv: "Opened in new tab", tth: "Theme applied",
  tl: "🌐 English",
  cdt: (n) => 'Delete "' + n + '"?', ptn: "Template name:",
  ptd: "My template",
  pc: "Category (Holidays/Family/Romance/Friends/Work/Kids/Special):",
  pcd: "Holidays",
  cch: "Clear all history?", ccf: "Clear form?",
  dft: "Title", dfm: "Greeting text will appear here..."
}};

const t = (k, a, b) => typeof I18N[L][k] === 'function' ? I18N[L][k](a, b) : (I18N[L][k] ?? k);
const D = (k, a, b) => typeof I18N[L][k] === 'function' ? I18N[L][k](a, b) : I18N[L][k];

/* ===== ДАННЫЕ ===== */
const EMOJIS = '🎂🎉🎈🎁🎊🎆❤️💖💝🌹🌸🌺🌻⭐✨🌟💫🥳😊🤗🍾🥂🍰🎵🎶🎸🌈☀️🌙💐🎀🦋🍀💎👑🏆🎓🧸🍭🌷'.match(/./gu);
const STICKERS = '🎂🎁🎉💐🥳🌹🍾🥂🎈💖🏆🎓'.match(/./gu);

const GIFS = [
  { name: '🎉 Party', url: 'https://media.giphy.com/media/g9582DNuQppxC/giphy.gif' },
  { name: '🎂 Cake', url: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif' },
  { name: '❤️ Love', url: 'https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif' },
  { name: '🎈 Balloons', url: 'https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif' },
  { name: '🌸 Flowers', url: 'https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif' },
  { name: '🎆 Fireworks', url: 'https://media.giphy.com/media/26tPplGWjN0xLybiU/giphy.gif' },
  { name: '⭐ Stars', url: 'https://media.giphy.com/media/l4FGGafcOHmrlQxG0/giphy.gif' },
  { name: '🥳 Celebrate', url: 'https://media.giphy.com/media/g9582DNuQppxC/giphy.gif' }
];

const CT = [
  ['Персик','Peach','#ffecd2,#fcb69f'],['Мята','Mint','#a8edea,#fed6e3'],
  ['Закат','Sunset','#d299c2,#fef9d7'],['Небо','Sky','#89f7fe,#66a6ff'],
  ['Золото','Gold','#f6d365,#fda085'],['Лаванда','Lavender','#e0c3fc,#8ec5fc'],
  ['Изумруд','Emerald','#43e97b,#38f9d7'],['Роза','Rose','#ff9a9e,#fecfef'],
  ['Океан','Ocean','#4facfe,#00f2fe'],['Космос','Space','#30cfd0,#330867'],
  ['Огонь','Fire','#f83600,#f9d423'],['Сирень','Lilac','#a18cd1,#fbc2eb'],
  ['Ночь','Night','#0f0c29,#302b63,#24243e'],['Акварель','Watercolor','#ffdde1,#ee9ca7,#c6e2ff']
].map(([ru, en, g]) => ({
  ru, en,
  grad: `linear-gradient(135deg,${g.split(',').map((c, i) => `${c} ${i * 50}%`).join(',')})`
}));

const APP_THEMES = [
  { code: 'light',    name: '☀️ Светлая',  nameEn: '☀️ Light',    preview: 'linear-gradient(135deg,#fff,#e0e0e0)' },
  { code: 'dark',     name: '🌙 Тёмная',   nameEn: '🌙 Dark',     preview: 'linear-gradient(135deg,#2d3748,#1a202c)' },
  { code: 'blue',     name: '🌊 Ночная',   nameEn: '🌊 Night',    preview: 'linear-gradient(135deg,#0a1929,#1a3a52)' },
  { code: 'sepia',    name: '📜 Сепия',    nameEn: '📜 Sepia',    preview: 'linear-gradient(135deg,#f4ecd8,#d4c5a9)' },
  { code: 'rose',     name: '🌸 Розовая',  nameEn: '🌸 Rose',     preview: 'linear-gradient(135deg,#fff0f5,#ffd6e0)' },
  { code: 'forest',   name: '🌿 Лес',      nameEn: '🌿 Forest',   preview: 'linear-gradient(135deg,#1b3a2f,#2d5a47)' },
  { code: 'contrast', name: '🔴 Контраст', nameEn: '🔴 Contrast', preview: 'linear-gradient(135deg,#000,#333)' },
  { code: 'cyber',    name: '🌈 Кибер',    nameEn: '🌈 Cyber',    preview: 'linear-gradient(135deg,#1a0033,#00ff88)' }
];

const LAYOUTS = [
  { code: 'center',   name: 'Центр',        nameEn: 'Center',    css: 'layout-center',   grid: '1fr',    blocks: ['emoji','image','title','message','sender'] },
  { code: 'split',    name: 'Слева-справа', nameEn: 'Split',     css: 'layout-split',    grid: '1fr 1fr',blocks: ['image','emoji','title','message','sender'] },
  { code: 'card',     name: 'Открытка',     nameEn: 'Card',      css: 'layout-card',     grid: '1fr',    blocks: ['emoji','title','message','sender','image'] },
  { code: 'ribbon',   name: 'Лента',        nameEn: 'Ribbon',    css: 'layout-ribbon',   grid: '1fr',    blocks: ['title','message','sender','emoji','image'] },
  { code: 'diagonal', name: 'Диагональ',    nameEn: 'Diagonal',  css: 'layout-diagonal', grid: '1fr',    blocks: ['emoji','title','message','sender','image'] },
  { code: 'columns',  name: '2 колонки',    nameEn: '2 columns', css: 'layout-columns',  grid: '1fr 1fr',blocks: ['emoji','image','title','message','sender'] },
  { code: 'minimal',  name: 'Минимал',      nameEn: 'Minimal',   css: 'layout-minimal',  grid: '1fr',    blocks: ['title','message','sender'] }
];

const ANIM = [
  'effect-shimmer','effect-pop','effect-pulse','effect-float','effect-shake',
  'effect-rainbow','effect-bounce','effect-fade','effect-slideLeft','effect-slideRight',
  'effect-slideUp','effect-zoom','effect-flip','effect-rotate','effect-swing',
  'effect-wobble','effect-glow','effect-blur','effect-wave','effect-neon',
  'effect-glitch','effect-heartBeat','effect-tada','effect-rubberBand'
];

const CATS = [
  ['all','🌍 Все','🌍 All'],
  ['Праздники','🎉 Праздники','🎉 Holidays'],
  ['Семья','👨‍👩‍👧 Семья','👨‍👩‍👧 Family'],
  ['Романтика','💕 Романтика','💕 Romance'],
  ['Друзья','🤝 Друзья','🤝 Friends'],
  ['Работа','💼 Работа','💼 Work'],
  ['Дети','🧸 Дети','🧸 Kids'],
  ['Особые','🕊️ Особые','🕊️ Special']
].map(([code, ru, en]) => ({ code, ru, en }));

const T = (n, ne, cat, lang, title, msg, sender, emoji, bgIdx, size, anim, part, pc) =>
  ({ name: n, nameEn: ne, category: cat, lang, title, message: msg, sender,
     emojiLine: emoji, bg: bgIdx !== null ? CT[bgIdx].grad : null,
     size, animation: anim, particles: part, partCount: pc });

let TEMPLATES = [
  T("🎂 День рождения","🎂 Birthday",'Праздники','ru',"С днём рождения!","Дорогой(ая) {name}!\n\nЖелаю тебе счастья, здоровья, успехов и исполнения всех желаний! Пусть каждый день приносит радость и улыбки. Спасибо, что ты рядом!","С любовью","🎂🎈🎁",0,32,'effect-shimmer','🎉',12),
  T("🎄 Новый год","🎄 New Year",'Праздники','ru',"С Новым годом!","{name}, поздравляю с Новым годом!\n\nПусть этот год принесёт удачу, благополучие и много счастливых моментов. Здоровья тебе и твоим близким!","Твой друг","🎄❄️🎁",3,30,'effect-fade','❄️',20),
  T("❤️ 14 февраля","❤️ Valentine",'Праздники','ru',"С Днём святого Валентина!","{name}, с 14 февраля!\n\nТы — самое дорогое, что у меня есть. Спасибо за каждый день, проведённый вместе. Люблю тебя бесконечно!","Твой(я) любимый(ая)","❤️💖💝",1,30,'effect-heartBeat','❤️',15),
  T("🎉 Универсальное","🎉 Universal",'Праздники','ru',"Поздравляю!","{name}, от всей души поздравляю!\n\nЖелаю тебе только самого лучшего! Пусть удача всегда будет на твоей стороне!","С наилучшими пожеланиями","🎉🎊🥳",4,30,'effect-tada','🎈',10),
  T("🌷 8 Марта","🌷 March 8",'Праздники','ru',"С 8 Марта!","Дорогая {name}!\n\nС праздником весны, любви и красоты! Пусть каждый день радует тебя цветами, улыбками и вниманием. Будь счастлива!","С восхищением","🌷💐🌹",7,32,'effect-shimmer','🌸',18),
  T("🎖️ 23 Февраля","🎖️ Feb 23",'Праздники','ru',"С 23 Февраля!","{name}, с Днём защитника Отечества!\n\nЖелаю крепкого здоровья, силы духа и уверенности. Ты — настоящий мужчина!","С уважением","🎖️🎉🥂",6,32,'effect-glow','⭐',12),
  T("🎓 1 Сентября","🎓 Sep 1",'Праздники','ru',"С Днём знаний!","{name}, с началом нового учебного года!\n\nПусть он принесёт много новых знаний, интересных открытий и верных друзей. Удачи в учёбе!","С наилучшими пожеланиями","🎓📚✏️",4,30,'effect-pop','🍁',10),
  T("🐰 Пасха","🐰 Easter",'Праздники','ru',"С Пасхой!","{name}, поздравляю со Светлым Христовым Воскресением!\n\nПусть в вашем доме всегда будет мир, радость и благополучие. Христос Воскресе!","С наилучшими пожеланиями","🐰🥚🕊️",1,30,'effect-fade','🌸',10),
  T("🎃 Хэллоуин","🎃 Halloween",'Праздники','ru',"С Хэллоуином!","{name}, с Хэллоуином! 🎃\n\nПусть в этот день все страшилки будут только шуточными, а сладостей — как можно больше! 🍬","Твои друзья","🎃👻🦇",9,32,'effect-glitch','👻',12),
  T("💐 День матери","💐 Mother's Day",'Праздники','ru',"С Днём матери!","Дорогая мамочка!\n\nВ этот день хочу сказать тебе спасибо за всё. Ты — самый близкий человек. Здоровья тебе, счастья и долгих лет!","Твой(я) ребёнок","💐❤️🌷",7,32,'effect-heartBeat','🌸',15),
  T("🎊 Новоселье","🎊 Housewarming",'Праздники','ru',"С новосельем!","{name}, поздравляю с новосельем!\n\nПусть в новом доме всегда будет тепло, уютно и радостно. Здоровья, счастья и благополучия вам и вашей семье!","С наилучшими пожеланиями","🏠🔑🎉",4,30,'effect-tada','🎉',12),
  T("👶 Рождение ребёнка","👶 New Baby",'Семья','ru',"Поздравляем с малышом!","{name}, от всей души поздравляем с рождением малыша! 🍼\n\nПусть он растёт здоровым и счастливым, а ваш дом наполнится радостью и смехом!","С наилучшими пожеланиями","👶🍼🧸",1,30,'effect-zoom','🌸',12),
  T("💍 Свадьба","💍 Wedding",'Семья','ru',"С днём свадьбы!","{name}, поздравляем с этим прекрасным днём! 💍\n\nЖелаем вам долгих лет совместной жизни, любви, взаимопонимания и счастья!","С любовью","💍❤️🥂",7,30,'effect-heartBeat','❤️',15),
  T("👩 Маме","👩 To Mom",'Семья','ru',"Дорогая мамочка!","Мама, ты — самый близкий и родной человек в моей жизни!\n\nСпасибо за твою бесконечную любовь, заботу и поддержку. Здоровья тебе, счастья и долгих лет жизни. Я тебя очень люблю!","Твой(я) ребёнок","🌷💐❤️",7,32,'effect-heartBeat','🌸',15),
  T("👨 Папе","👨 To Dad",'Семья','ru',"Дорогой папа!","Папа, спасибо тебе за всё, чему ты меня научил, за твою поддержку и мудрость.\n\nТы — мой герой и пример для подражания. Крепкого здоровья и долгих лет!","Твой(я) ребёнок","👨🎁❤️",9,32,'effect-fade','⭐',10),
  T("👵 Бабушке","👵 To Grandma",'Семья','ru',"Дорогая бабушка!","Бабуля, ты — наша мудрость, тепло и доброта!\n\nСпасибо за вкусные пироги, интересные истории и бесконечную любовь. Здоровья тебе и счастья!","С любовью, внуки","🌺💐🧶",2,32,'effect-fade','🌸',12),
  T("👴 Дедушке","👴 To Grandpa",'Семья','ru',"Дорогой дедушка!","Дедушка, ты — наша опора и мудрость!\n\nСпасибо за жизненные уроки, за поддержку и за веру в нас. Долгих лет тебе и крепкого здоровья!","С любовью, внуки","🎩⭐🧡",6,32,'effect-glow','⭐',10),
  T("🧑 Брату","🧑 To Brother",'Семья','ru',"Братан, с праздником!","{name}, ты — не просто брат, ты — мой лучший друг!\n\nСпасибо за поддержку в любой ситуации. Желаю удачи, здоровья и исполнения всех планов!","Твой брат","🍻🎉👍",10,32,'effect-swing','🎉',10),
  T("👧 Сестре","👧 To Sister",'Семья','ru',"Сестрёнка!","{name}, ты — моя самая любимая сестра!\n\nСпасибо, что ты всегда рядом. Желаю тебе счастья, любви и исполнения желаний!","Твой(я) брат/сестра","🌸💕🎀",7,32,'effect-tada','🌸',12),
  T("👦 Сыну","👦 To Son",'Семья','ru',"Дорогой сын!","{name}, ты — наша гордость и радость!\n\nРасти здоровым, умным и счастливым. Мы всегда рядом и всегда поддержим!","Твои родители","⚽🚀🧡",9,32,'effect-bounce','⭐',10),
  T("👧 Дочери","👧 To Daughter",'Семья','ru',"Дорогая доченька!","{name}, ты — наше солнышко и радость!\n\nБудь счастлива, здорова и любима. Пусть все твои мечты сбываются!","Твои родители","🌸🎀💖",7,32,'effect-heartBeat','🌸',12),
  T("🎓 Выпускной","🎓 Graduation",'Семья','ru',"С окончанием учёбы!","{name}, поздравляю с выпуском!\n\nПозади годы учёбы, а впереди — целая жизнь, полная возможностей. Иди смело к своей мечте!","Однокурсники","🎓🏆🎉",2,30,'effect-slideUp','⭐',10),
  T("💕 Годовщина","💕 Anniversary",'Романтика','ru',"С годовщиной!","{name}, с годовщиной нашей встречи!\n\nКаждый день с тобой — это счастье. Спасибо за твою любовь, поддержку и нежность. Я люблю тебя всё сильнее с каждым годом!","Навсегда твой(я)","💕💐🥂",7,30,'effect-heartBeat','❤️',18),
  T("🌹 Любимой","🌹 To Beloved F",'Романтика','ru',"Моей любимой {name}!","Ты — свет моей жизни, моё вдохновение и моя вселенная. 🌹\n\nСпасибо, что ты рядом. Ты делаешь каждый мой день особенным. Люблю тебя больше всего на свете!","Твой навсегда","🌹💕💖",7,32,'effect-shimmer','❤️',15),
  T("💙 Любимому","💙 To Beloved M",'Романтика','ru',"Моему любимому {name}!","Ты — моя опора, мой лучший друг и моя любовь. 💙\n\nСпасибо за каждый момент, проведённый вместе. Ты — самое дорогое, что у меня есть!","Твоя навсегда","💙💎✨",8,32,'effect-glow','💎',12),
  T("👯 Подруге","👯 To Girlfriend",'Друзья','ru',"Моя дорогая подруга!","{name}, спасибо, что ты есть в моей жизни!\n\nС тобой не страшны никакие проблемы. Ты — лучшая! Желаю тебе море счастья и позитива!","Твоя подруга","💕🥂🌸",11,32,'effect-tada','🌸',12),
  T("🤜 Другу","🤜 To Friend",'Друзья','ru',"Дружище, с праздником!","{name}, ты — настоящий друг!\n\nСпасибо за верность и поддержку. Пусть у тебя всё будет отлично! С меня — магарыч! 🍻","Твой друг","🍻🎉🤜",10,32,'effect-swing','🎉',12),
  T("🎈 Просто так","🎈 Just Because",'Друзья','ru',"Просто так! 🎈","{name}, а знаешь что? Просто захотелось сказать тебе что-то хорошее!\n\nТы — классный(ая)! Пусть у тебя всё будет отлично!","Твой друг","🎈😊💛",4,30,'effect-bounce','🎈',12),
  T("🍀 Удачи на экзамене","🍀 Good Luck",'Друзья','ru',"Ни пуха, {name}!","Ни пуха, ни пера!\n\nТы всё выучил(а), ты справишься! Верю в тебя! Пусть билет попадётся легкий, а комиссия будет доброй!","Твой друг","🍀📚✨",6,30,'effect-tada','🍀',10),
  T("💼 Деловое","💼 Business",'Работа','ru',"Уважаемый(ая) {name}!","От всей команды поздравляем Вас с днём рождения!\n\nЖелаем профессиональных успехов, крепкого здоровья и новых достижений.","Коллектив компании","🎁🎊",5,28,'effect-fade','',0),
  T("🏢 Корпоративное","🏢 Corporate",'Работа','ru',"Уважаемые коллеги!","{name}, от лица всей компании поздравляем Вас с этим знаменательным событием!\n\nВаш вклад в наше общее дело неоценим. Желаем дальнейших успехов и процветания!","Руководство компании","🏆🎊🥂",8,28,'effect-glow','',0),
  T("🤝 Партнёру","🤝 To Partner",'Работа','ru',"Уважаемый(ая) {name}!","Позвольте от лица нашей компании выразить Вам искреннюю благодарность за плодотворное сотрудничество!\n\nЖелаем Вашему бизнесу процветания, а Вам лично — здоровья и благополучия.","С уважением, партнёры","🤝🎊",9,28,'effect-fade','',0),
  T("👔 Коллеге","👔 To Colleague",'Работа','ru',"Уважаемый(ая) {name}!","Поздравляем Вас с этим замечательным днём!\n\nЖелаем успехов в работе, новых достижений и отличного настроения.","Коллеги","🎊🎁💼",8,28,'effect-fade','',0),
  T("🏆 Победа","🏆 Victory",'Работа','ru',"Ты победил(а)! 🏆","{name}, поздравляю с заслуженной победой!\n\nЭто результат твоего упорства и труда. Так держать! Новых вершин и достижений!","Болеем за тебя","🏆🥇🎉",4,32,'effect-shimmer','🎉',18),
  T("🎒 Ребёнку","🎒 To Child",'Дети','ru',"С праздником, {name}!","Ты — умный, добрый и весёлый!\n\nПусть каждый день приносит тебе новые открытия, радость и веселье. Слушайся родителей и мечтай смело!","Твои близкие","🎈🍭🧸",1,30,'effect-bounce','🎈',15),
  T("🙏 Благодарность","🙏 Gratitude",'Особые','ru',"Спасибо, {name}!","Хочу от всего сердца поблагодарить тебя!\n\nТвоя помощь, поддержка и доброта неоценимы. Спасибо, что ты есть!","С благодарностью","🙏💖✨",5,30,'effect-fade','⭐',10),
  T("😔 Извинения","😔 Apology",'Особые','ru',"Прости меня, {name}","Мне очень жаль, что так вышло.\n\nПрошу прощения от всего сердца. Ты важен(на) для меня, и я не хочу тебя терять. Пожалуйста, дай мне шанс всё исправить.","Твой(я)","😔💔🌷",null,28,'effect-fade','',0),
  T("🕊️ Соболезнования","🕊️ Condolences",'Особые','ru',"Светлая память","{name}, примите наши искренние соболезнования.\n\nСветлая память о нём (ней) навсегда останется в наших сердцах.","С глубоким уважением","🕊️🤍",null,28,'effect-fade','',0),
  T("🎂 Happy Birthday","🎂 Happy Birthday",'Праздники','en',"Happy Birthday!","Dear {name},\n\nWishing you the happiest of birthdays! May this year bring you joy, success, and everything you've been dreaming of.","With love","🎂🎈🎁",0,32,'effect-shimmer','🎉',12),
  T("🎄 Merry Christmas","🎄 Merry Christmas",'Праздники','en',"Merry Christmas!","Dear {name},\n\nWishing you a magical Christmas filled with love, joy, and warmth. May your days be merry and bright!","With love","🎄❄️🎁",3,32,'effect-fade','❄️',15),
  T("🎉 Happy New Year","🎉 Happy New Year",'Праздники','en',"Happy New Year!","Dear {name},\n\nWishing you a wonderful New Year filled with joy, health, and prosperity. May all your dreams come true!","Best wishes","🎉🎆🥂",9,32,'effect-glow','🎆',15),
  T("💍 Happy Anniversary","💍 Happy Anniversary",'Романтика','en',"Happy Anniversary!","Dear {name},\n\nHappy anniversary! Thank you for every moment we've shared. Here's to many more years of love and happiness.","Forever yours","💍❤️🥂",7,32,'effect-heartBeat','❤️',15),
  T("🎓 Congratulations","🎓 Congratulations",'Работа','en',"Congratulations, {name}!","Congratulations on your achievement!\n\nThis is a well-deserved success. Wishing you continued success in all your future endeavors!","With pride","🎓🏆🎉",2,32,'effect-tada','⭐',12),
  T("🌹 Happy Valentine's","🌹 Happy Valentine's",'Романтика','en',"Happy Valentine's Day!","My dearest {name},\n\nYou are the light of my life. Happy Valentine's Day! I love you more than words can say.","Yours forever","🌹❤️💝",7,32,'effect-heartBeat','❤️',18),
  T("👶 New Baby EN","👶 New Baby",'Семья','en',"Congratulations on your baby!","Dear {name},\n\nCongratulations on the arrival of your little one! Wishing your family health, happiness, and endless love.","With joy","👶🍼🧸",1,30,'effect-zoom','🌸',12),
  T("🌷 Mother's Day EN","🌷 Mother's Day",'Семья','en',"Happy Mother's Day!","Dear Mom,\n\nThank you for your endless love, care, and support. Happy Mother's Day! You mean the world to me.","With all my love","💐❤️🌷",7,32,'effect-heartBeat','🌸',15),
  T("🎊 Just Because EN","🎊 Just Because",'Друзья','en',"Just because! 🎈","Hey {name},\n\nJust wanted to say something nice — you're awesome! Hope you have a fantastic day!","Your friend","🎈😊💛",4,30,'effect-bounce','🎈',12)
];

TEMPLATES.forEach(x => { if (!x.bg) x.bg = 'linear-gradient(135deg,#d7d2cc 0%,#304352 100%)'; });

const LG = [
  { c: 'ru', l: '🇷🇺 RU' },
  { c: 'en', l: '🇬🇧 EN' },
  { c: 'all', l: '🌍 Все', le: '🌍 All' }
];

let fLang = 'all', fCat = 'all';

/* ===== УТИЛИТЫ ===== */
const $ = id => document.getElementById(id);
const S = (id, k) => { const e = $(id); if (e) e.textContent = t(k); };
const PH = (id, k) => { const e = $(id); if (e) e.placeholder = t(k); };
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));

function toast(txt, type) {
  const e = $('toast');
  $('toastText').textContent = txt;
  $('toastIcon').textContent = type === 'success' ? '✓' : type === 'error' ? '✕' : type === 'info' ? 'ℹ' : '';
  e.className = 'toast show ' + (type || '');
  clearTimeout(e._t);
  e._t = setTimeout(() => e.className = 'toast', 2400);
}
function tplCount(i) {
  const c = JSON.parse(localStorage.tplClicks || '{}');
  c[i] = (c[i] || 0) + 1;
  localStorage.tplClicks = JSON.stringify(c);
}
function getTplCount(i) {
  return (JSON.parse(localStorage.tplClicks || '{}'))[i] || 0;
}
function dlFile(n, c, t) {
  const b = new Blob([c], { type: t }), u = URL.createObjectURL(b);
  const a = document.createElement('a');
  a.href = u; a.download = n; a.click();
  URL.revokeObjectURL(u);
}

/* ===== ПЕРЕМЕННЫЕ ===== */
function subst(s) {
  const n = $('recipient').value.trim(), sd = $('sender').value.trim(), d = new Date();
  const loc = L === 'ru' ? 'ru-RU' : 'en-US';
  return String(s)
    .replace(/\{name\}/g, n)
    .replace(/\{sender\}/g, sd)
    .replace(/\{date\}/g, d.toLocaleDateString(loc, { day: 'numeric', month: 'long', year: 'numeric' }))
    .replace(/\{year\}/g, d.getFullYear())
    .replace(/\{time\}/g, d.toLocaleTimeString(loc, { hour: '2-digit', minute: '2-digit' }));
}
function insertVariable(v) {
  const ta = $('message'), p = ta.selectionStart;
  ta.value = ta.value.slice(0, p) + v + ta.value.slice(ta.selectionEnd);
  ta.focus(); ta.setSelectionRange(p + v.length, p + v.length);
  render(); updateCounters();
}

/* ===== ДАННЫЕ ФОРМЫ ===== */
function getData() {
  const keys = ['recipient','title','message','sender','emojiLine','size','msgSize','fontTitle',
    'titleColor','msgColor','align','radius','bgOpacity','animation','particles','partCount',
    'partSpeed','physicsMode','glow','musicUrl','imageUrl','imgSize','videoUrl','countdownTarget','giftWrap'];
  const d = {};
  keys.forEach(x => { const e = $(x); if (e) d[x] = e.value; });
  d.bg = $('bg').value;
  d.layout = localStorage.selectedLayout || 'center';
  d.blockOrder = JSON.parse(localStorage.blockOrder || 'null') || null;
  return d;
}
function ytId(u) {
  const m = String(u).match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

/* ===== ФИЗИКА ЧАСТИЦ ===== */
const particleState = { particles: [], animId: null, mouse: { x: -1000, y: -1000 } };

function stopParticles() {
  if (particleState.animId) cancelAnimationFrame(particleState.animId);
  particleState.animId = null;
  particleState.particles = [];
  document.querySelectorAll('.physics-canvas').forEach(c => c.remove());
}

function initParticles(container, emoji, count, speed, mode) {
  stopParticles();
  if (!emoji || count <= 0) return;
  const rect = container.getBoundingClientRect();
  const canvas = document.createElement('canvas');
  canvas.className = 'physics-canvas';
  canvas.width = rect.width; canvas.height = rect.height;
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  const sf = { 1: 0.5, 2: 1, 3: 1.5, 4: 2 }[speed] || 1;
  for (let i = 0; i < count; i++) {
    let x, y, vx, vy;
    switch (mode) {
      case 'fountain':
        x = canvas.width / 2; y = canvas.height - 20;
        vx = (Math.random() - 0.5) * 4 * sf; vy = -(4 + Math.random() * 4) * sf; break;
      case 'explosion': {
        x = canvas.width / 2; y = canvas.height / 2;
        const ang = Math.random() * Math.PI * 2, spd = (2 + Math.random() * 3) * sf;
        vx = Math.cos(ang) * spd; vy = Math.sin(ang) * spd; break;
      }
      case 'spiral': {
        const a = (i / count) * Math.PI * 4;
        x = canvas.width / 2 + Math.cos(a) * 30; y = canvas.height / 2 + Math.sin(a) * 30;
        vx = Math.cos(a) * 1.5 * sf; vy = Math.sin(a) * 1.5 * sf; break;
      }
      default:
        x = Math.random() * canvas.width;
        y = -20 - Math.random() * canvas.height * 0.5;
        vx = (Math.random() - 0.5) * 1.5 * sf;
        vy = (1 + Math.random() * 2) * sf;
    }
    particleState.particles.push({
      x, y, vx, vy,
      size: 14 + Math.random() * 20,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.1,
      emoji
    });
  }
  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const m = particleState.mouse;
    particleState.particles.forEach(p => {
      if (mode === 'gravity') {
        p.vy += 0.15;
        if (p.y > canvas.height - 20) { p.y = canvas.height - 20; p.vy *= -0.6; }
      } else if (mode === 'magnet') {
        const dx = m.x - p.x, dy = m.y - p.y;
        const d = Math.sqrt(dx*dx + dy*dy) + 1;
        p.vx += (dx/d) * 0.3; p.vy += (dy/d) * 0.3;
        p.vx *= 0.95; p.vy *= 0.95;
      } else if (mode === 'repel') {
        const dx = p.x - m.x, dy = p.y - m.y;
        const d = Math.sqrt(dx*dx + dy*dy) + 1;
        if (d < 100) { p.vx += (dx/d) * 0.5; p.vy += (dy/d) * 0.5; }
        p.vx *= 0.98; p.vy *= 0.98;
      } else if (mode === 'snow') {
        p.vx += Math.sin(Date.now() * 0.001 + p.y * 0.01) * 0.05;
        p.vx *= 0.98;
      } else if (mode === 'fountain') {
        p.vy += 0.15;
      } else if (mode === 'explosion') {
        p.vx *= 0.99; p.vy *= 0.99;
      }
      p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      if (mode === 'fall' || mode === 'snow') {
        if (p.y > canvas.height + 30) { p.y = -30; p.x = Math.random() * canvas.width; }
      }
      if (mode === 'fountain' && p.y > canvas.height + 30) {
        p.y = canvas.height - 20; p.vy = -(4 + Math.random() * 4) * sf;
      }
      if (mode === 'explosion' && (p.x < -50 || p.x > canvas.width + 50 || p.y < -50 || p.y > canvas.height + 50)) {
        p.x = canvas.width / 2; p.y = canvas.height / 2;
        const ang = Math.random() * Math.PI * 2, spd = (2 + Math.random() * 3) * sf;
        p.vx = Math.cos(ang) * spd; p.vy = Math.sin(ang) * spd;
      }
      if (mode === 'magnet' || mode === 'repel') {
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }
      if (mode === 'spiral') {
        const cx = canvas.width / 2, cy = canvas.height / 2;
        const dx = p.x - cx, dy = p.y - cy;
        if (Math.sqrt(dx*dx + dy*dy) > Math.min(canvas.width, canvas.height) / 2) {
          p.x = cx; p.y = cy;
        }
      }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.font = p.size + 'px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(p.emoji, 0, 0);
      ctx.restore();
    });
    particleState.animId = requestAnimationFrame(frame);
  }
  frame();
}

/* ===== DRAG & DROP ===== */
function getCurrentBlockOrder() {
  const d = getData();
  if (d.blockOrder && Array.isArray(d.blockOrder)) return d.blockOrder;
  const layout = LAYOUTS.find(l => l.code === d.layout) || LAYOUTS[0];
  return layout.blocks;
}
function renderBlock(type) {
  const d = getData();
  const title = subst(d.title), message = subst(d.message), sender = subst(d.sender);
  switch (type) {
    case 'emoji': return d.emojiLine ? `<div class="block draggable" draggable="true" data-block="emoji"><span class="handle">≡</span><div class="emoji-line">${esc(d.emojiLine)}</div></div>` : '';
    case 'image': return d.imageUrl ? `<div class="block draggable" draggable="true" data-block="image"><span class="handle">≡</span><img src="${esc(d.imageUrl)}" style="width:${d.imgSize}px;max-width:100%;border-radius:12px;margin:10px 0" onerror="this.style.display='none'"></div>` : '';
    case 'video': {
      const id = ytId(d.videoUrl);
      return id ? `<div class="block draggable" draggable="true" data-block="video"><span class="handle">≡</span><iframe src="https://www.youtube.com/embed/${id}" style="width:100%;max-width:400px;aspect-ratio:16/9;border-radius:12px;margin:10px 0;border:none" allow="autoplay"></iframe></div>` : '';
    }
    case 'title': return title ? `<div class="block draggable" draggable="true" data-block="title"><span class="handle">≡</span><h3>${esc(title)}</h3></div>` : '';
    case 'message': return message ? `<div class="block draggable" draggable="true" data-block="message"><span class="handle">≡</span><p>${esc(message)}</p></div>` : '';
    case 'sender': return sender ? `<div class="block draggable" draggable="true" data-block="sender"><span class="handle">≡</span><div class="from">— ${esc(sender)}</div></div>` : '';
  }
  return '';
}
function renderBlocks(container) {
  const order = getCurrentBlockOrder();
  const html = order.map(type => renderBlock(type)).filter(Boolean).join('');
  container.innerHTML = html || `<div style="color:#999;font-size:14px">Заполните поля для превью</div>`;
  container.querySelectorAll('.draggable').forEach(el => {
    el.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', el.dataset.block);
      e.dataTransfer.effectAllowed = 'move';
      el.classList.add('dragging');
    });
    el.addEventListener('dragend', () => el.classList.remove('dragging'));
    el.addEventListener('dragover', e => {
      e.preventDefault();
      const dragging = container.querySelector('.dragging');
      if (!dragging || dragging === el) return;
      const rect = el.getBoundingClientRect();
      const after = e.clientY > rect.top + rect.height / 2;
      container.insertBefore(dragging, after ? el.nextSibling : el);
    });
  });
  container.addEventListener('dragend', () => {
    const newOrder = [...container.querySelectorAll('.draggable')].map(el => el.dataset.block);
    localStorage.blockOrder = JSON.stringify(newOrder);
    renderBlockOrderList();
  });
}
function renderBlockOrderList() {
  const el = $('blocksList');
  if (!el) return;
  const order = getCurrentBlockOrder();
  const labels = {
    emoji: '😀 Эмодзи-строка', image: '🖼️ Картинка', video: '🎬 Видео',
    title: '📌 Заголовок', message: '📝 Текст', sender: '✍️ Подпись'
  };
  el.innerHTML = order.map((b, i) =>
    `<div style="padding:5px 0;border-bottom:1px solid var(--b)">${i + 1}. ${labels[b] || b}</div>`
  ).join('');
}
function resetBlockOrder() {
  localStorage.removeItem('blockOrder');
  render();
  renderBlockOrderList();
  toast('↩️ Порядок сброшен', 'info');
}

/* ===== ГЛАВНЫЙ РЕНДЕР ===== */
function render() {
  const d = getData();
  const p = $('preview');
  p.style.background = d.bg;
  p.style.borderRadius = d.radius + 'px';
  p.style.boxShadow = d.glow || 'none';
  p.style.textAlign = d.align;
  ANIM.forEach(a => p.classList.remove(a));
  if (d.animation) p.classList.add(d.animation);
  p.style.opacity = parseInt(d.bgOpacity) > 0 ? (100 - parseInt(d.bgOpacity)) / 100 : 1;
  const layout = LAYOUTS.find(l => l.code === d.layout) || LAYOUTS[0];
  p.className = 'preview ' + layout.css;
  const blocksEl = $('previewBlocks');
  if (blocksEl) renderBlocks(blocksEl);
  const h3 = p.querySelector('h3');
  if (h3) { h3.style.fontSize = d.size + 'px'; h3.style.fontFamily = d.fontTitle; h3.style.color = d.titleColor; }
  const msg = p.querySelector('p');
  if (msg) { msg.style.color = d.msgColor; msg.style.fontSize = d.msgSize + 'px'; }
  if (d.particles && parseInt(d.partCount) > 0) {
    initParticles(p, d.particles, parseInt(d.partCount), parseInt(d.partSpeed || 2), d.physicsMode || 'fall');
  } else stopParticles();
  syncFs();
  renderCount();
  localStorage.currentState = JSON.stringify(d);
}

/* ===== ШАБЛОНЫ ===== */
function applyTpl(i) {
  const tp = TEMPLATES[i];
  tplCount(i);
  Object.keys(tp).forEach(k => {
    if (k === 'nameEn') return;
    const e = $(k);
    if (e && tp[k] !== undefined) e.value = tp[k];
  });
  ['size','msgSize','partCount','radius','imgSize'].forEach(k => {
    const v = $(k + 'Val');
    if (v && tp[k] !== undefined) v.textContent = tp[k];
  });
  document.querySelectorAll('.color-swatch').forEach((s, idx) =>
    s.classList.toggle('active', CT[idx].grad === tp.bg));
  render(); updateCounters(); initTpls();
  toast(D('tt', L === 'en' && tp.nameEn ? tp.nameEn : tp.name), 'success');
}
function saveCustomTemplate() {
  const n = prompt(D('ptn'), D('ptd'));
  if (!n) return;
  const c = prompt(D('pc'), D('pcd')) || 'Праздники';
  const d = getData();
  d.lang = fLang === 'all' ? 'ru' : fLang;
  TEMPLATES.push({ name: '⭐ ' + n, nameEn: '⭐ ' + n, category: c, ...d });
  saveTpls(); initTpls();
  toast(D('ts', c), 'success');
}
function delTpl(i) {
  const tp = TEMPLATES[i];
  const n = L === 'en' && tp.nameEn ? tp.nameEn : tp.name;
  if (!confirm(D('cdt', n))) return;
  TEMPLATES.splice(i, 1);
  saveTpls(); initTpls();
}
function saveTpls() { localStorage.customTemplates = JSON.stringify(TEMPLATES); }
function loadTpls() {
  if (localStorage.customTemplates) {
    try {
      const a = JSON.parse(localStorage.customTemplates);
      if (Array.isArray(a) && a.length) TEMPLATES = a;
    } catch (e) {}
  }
}

/* ===== ЭКСПОРТ ===== */
function exportJSON() {
  dlFile('pozdrav.json', JSON.stringify(getData(), null, 2), 'application/json');
  toast(D('tj'), 'success');
}
function importJSON(e) {
  const f = e.target.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = ev => {
    try {
      const d = JSON.parse(ev.target.result);
      Object.keys(d).forEach(k => { const el = $(k); if (el) el.value = d[k]; });
      ['size','msgSize','partCount','radius','imgSize'].forEach(k => {
        const v = $(k + 'Val');
        if (v && d[k] !== undefined) v.textContent = d[k];
      });
      render(); updateCounters();
      toast(D('tdi'), 'success');
    } catch (err) { toast(D('tij'), 'error'); }
  };
  r.readAsText(f); e.target.value = '';
}
function exportTemplates() {
  dlFile('templates.json', JSON.stringify(TEMPLATES, null, 2), 'application/json');
  toast(D('te'), 'success');
}
function importTemplates(e) {
  const f = e.target.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = ev => {
    try {
      const a = JSON.parse(ev.target.result);
      if (!Array.isArray(a)) throw 0;
      TEMPLATES = a; saveTpls(); initTpls();
      toast(D('ti', a.length), 'success');
    } catch (err) { toast(D('tfe'), 'error'); }
  };
  r.readAsText(f); e.target.value = '';
}
function exportHistory() {
  dlFile('history.json', localStorage.history || '[]', 'application/json');
  toast(D('th'), 'success');
}

function downloadHTML() {
  const d = getData();
  const ti = subst(d.title), ms = subst(d.message), sd = subst(d.sender);
  const layout = LAYOUTS.find(l => l.code === d.layout) || LAYOUTS[0];
  const blocks = getCurrentBlockOrder();
  const parts = d.particles && d.partCount > 0 ? Array.from({ length: parseInt(d.partCount) },
    () => `<div class="particle" style="left:${Math.random()*100}%;animation-duration:${4+Math.random()*6}s;animation-delay:${Math.random()*5}s;font-size:${14+Math.random()*20}px">${d.particles}</div>`
  ).join('') : '';
  const blockHTML = {
    emoji: d.emojiLine ? `<div class="emoji-line">${esc(d.emojiLine)}</div>` : '',
    image: d.imageUrl ? `<img src="${esc(d.imageUrl)}" style="width:${d.imgSize}px;max-width:100%;border-radius:12px;margin:10px 0" onerror="this.style.display='none'">` : '',
    video: ytId(d.videoUrl) ? `<iframe src="https://www.youtube.com/embed/${ytId(d.videoUrl)}" style="width:100%;max-width:400px;aspect-ratio:16/9;border-radius:12px;margin:10px 0;border:none" allow="autoplay"></iframe>` : '',
    title: ti ? `<h1>${esc(ti)}</h1>` : '',
    message: ms ? `<p>${esc(ms)}</p>` : '',
    sender: sd ? `<div class="from">— ${esc(sd)}</div>` : ''
  };
  const content = blocks.map(b => blockHTML[b]).filter(Boolean).join('');
  const mus = d.musicUrl ? `<audio autoplay loop><source src="${esc(d.musicUrl)}"></audio>` : '';
  const html = `<!DOCTYPE html><html lang="${L}"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(ti)}</title>
<style>
body{margin:0;font-family:Arial,sans-serif;background:${d.bg};min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;overflow-x:hidden}
.card{background:rgba(255,255,255,.85);backdrop-filter:blur(10px);border-radius:${d.radius}px;padding:50px;max-width:700px;width:100%;text-align:${d.align};box-shadow:${d.glow || '0 20px 60px rgba(0,0,0,.2)'};position:relative;overflow:hidden;${layout.css === 'layout-split' ? 'display:grid;grid-template-columns:1fr 1fr;gap:20px;' : ''}}
.emoji-line{font-size:42px;margin-bottom:15px;position:relative;z-index:2}
h1{font-size:${d.size}px;color:${d.titleColor};font-family:${d.fontTitle};margin-bottom:25px;position:relative;z-index:2}
p{font-size:${d.msgSize}px;line-height:1.7;color:${d.msgColor};white-space:pre-wrap;position:relative;z-index:2}
.from{margin-top:30px;font-style:italic;color:#7b341e;font-size:18px;position:relative;z-index:2}
.particle{position:absolute;top:-50px;pointer-events:none;z-index:1;animation:fall linear infinite}
@keyframes fall{0%{transform:translateY(-100px) rotate(0);opacity:1}100%{transform:translateY(110vh) rotate(720deg);opacity:.8}}
img{max-width:100%}
</style></head><body>${mus}<div class="card ${d.animation||''}">${parts}${content}</div></body></html>`;
  dlFile('pozdrav.html', html, 'text/html');
  toast(D('thd'), 'success');
}

async function svgCanvas(el) {
  const r = el.getBoundingClientRect();
  const w = Math.max(400, r.width), h = Math.max(300, r.height);
  const c = el.cloneNode(true);
  c.style.cssText = `position:absolute;left:-9999px;width:${w}px;min-height:${h}px`;
  document.body.appendChild(c);
  const html = c.outerHTML;
  document.body.removeChild(c);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml">${html}</div></foreignObject></svg>`;
  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  return new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => {
      const cv = document.createElement('canvas');
      cv.width = w * 2; cv.height = h * 2;
      const ctx = cv.getContext('2d');
      ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, cv.width, cv.height);
      ctx.scale(2, 2); ctx.drawImage(img, 0, 0, w, h);
      URL.revokeObjectURL(url); res(cv);
    };
    img.onerror = () => rej(new Error('SVG load'));
    img.src = url;
  });
}

async function downloadImage() {
  try {
    const cv = await svgCanvas($('preview'));
    cv.toBlob(b => {
      const u = URL.createObjectURL(b);
      const a = document.createElement('a');
      a.href = u; a.download = 'pozdrav.png'; a.click();
      URL.revokeObjectURL(u);
      toast(D('tpd'), 'success');
    }, 'image/png');
  } catch (e) { toast(D('tpe'), 'error'); }
}

async function exportPDF() {
  try {
    const cv = await svgCanvas($('preview'));
    const url = cv.toDataURL('image/jpeg', 0.92);
    const w = window.open('', '_blank');
    w.document.write(`<html><head><title>${esc(D('title'))}</title><style>body{margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh}img{max-width:100%}</style></head><body><img src="${url}" onload="setTimeout(()=>window.print(),300)"></body></html>`);
    w.document.close();
    toast(D('tpdf'), 'info');
  } catch (e) { toast(D('tpdfe'), 'error'); }
}

function openPreviewTab() {
  const d = getData();
  const ti = subst(d.title), ms = subst(d.message), sd = subst(d.sender);
  const blocks = getCurrentBlockOrder();
  const blockHTML = {
    emoji: d.emojiLine ? `<div class="emoji-line">${esc(d.emojiLine)}</div>` : '',
    image: d.imageUrl ? `<img src="${esc(d.imageUrl)}" style="width:${d.imgSize}px;max-width:100%;border-radius:12px;margin:10px 0">` : '',
    video: '',
    title: ti ? `<h1>${esc(ti)}</h1>` : '',
    message: ms ? `<p>${esc(ms)}</p>` : '',
    sender: sd ? `<div class="from">— ${esc(sd)}</div>` : ''
  };
  const content = blocks.map(b => blockHTML[b]).filter(Boolean).join('');
  const html = `<!DOCTYPE html><html lang="${L}"><head><meta charset="UTF-8"><title>${esc(ti)}</title>
<style>body{margin:0;font-family:Arial,sans-serif;background:${d.bg};min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}
.card{background:rgba(255,255,255,.85);border-radius:${d.radius}px;padding:50px;max-width:700px;width:100%;text-align:${d.align};box-shadow:${d.glow || '0 20px 60px rgba(0,0,0,.2)'}}
.emoji-line{font-size:42px;margin-bottom:15px}
h1{font-size:${d.size}px;color:${d.titleColor};font-family:${d.fontTitle};margin-bottom:25px}
p{font-size:${d.msgSize}px;line-height:1.7;color:${d.msgColor};white-space:pre-wrap}
.from{margin-top:30px;font-style:italic;color:#7b341e;font-size:18px}
img{max-width:100%}
</style></head><body><div class="card ${d.animation||''}">${content}</div></body></html>`;
  const w = window.open('', '_blank');
  w.document.write(html); w.document.close();
  toast(D('tpv'), 'info');
}

/* ===== QR ===== */
function generateQR() {
  const d = getData();
  const txt = `${subst(d.title)}\n\n${subst(d.message)}\n\n${d.sender ? '— ' + d.sender : ''}`.slice(0, 1000);
  const cv = $('qrCanvas');
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, cv.width, cv.height);
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => ctx.drawImage(img, 0, 0, cv.width, cv.height);
  img.onerror = () => {
    ctx.fillStyle = '#e53e3e'; ctx.font = '14px sans-serif';
    ctx.textAlign = 'center'; ctx.fillText(D('tqe'), 120, 120);
  };
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(txt)}&margin=0`;
}
function downloadQR() {
  const a = document.createElement('a');
  a.href = $('qrCanvas').toDataURL('image/png');
  a.download = 'qr.png'; a.click();
  toast(D('tqd'), 'success');
}

/* ===== ИСТОРИЯ ===== */
function addHist() {
  const d = getData();
  if (!d.title && !d.message) return;
  let h = [];
  try { h = JSON.parse(localStorage.history || '[]'); } catch (e) {}
  const s = { ...d, _ts: Date.now() };
  if (h[0] && h[0].title === s.title && h[0].message === s.message) return;
  h.unshift(s);
  if (h.length > 30) h = h.slice(0, 30);
  localStorage.history = JSON.stringify(h);
  renderHist();
}
function renderHist() {
  const el = $('history');
  let h = [];
  try { h = JSON.parse(localStorage.history || '[]'); } catch (e) {}
  el.innerHTML = '';
  if (!h.length) {
    el.innerHTML = `<div style="color:var(--tm);font-size:13px">${D('historyEmpty')}</div>`;
    return;
  }
  h.forEach((x, i) => {
    const div = document.createElement('div');
    div.className = 'history-item';
    const date = new Date(x._ts).toLocaleString(L === 'ru' ? 'ru-RU' : 'en-US');
    div.innerHTML = `<span>📝 ${esc((x.title || D('historyNoTitle')).slice(0, 60))} <small style="opacity:.6">${date}</small></span><span class="del">✕</span>`;
    div.onclick = e => { if (e.target.classList.contains('del')) return; applyHist(x); };
    div.querySelector('.del').onclick = e => {
      e.stopPropagation(); h.splice(i, 1);
      localStorage.history = JSON.stringify(h); renderHist();
    };
    el.appendChild(div);
  });
}
function applyHist(h) {
  Object.keys(h).forEach(k => {
    if (k.startsWith('_')) return;
    const e = $(k); if (e) e.value = h[k];
  });
  ['size','msgSize','partCount','radius','imgSize','bgOpacity'].forEach(k => {
    const v = $(k + 'Val');
    if (v && h[k] !== undefined) v.textContent = h[k];
  });
  render(); updateCounters();
  toast(D('trl'), 'success');
}
function clearHistory() {
  if (!confirm(D('cch'))) return;
  localStorage.removeItem('history');
  renderHist();
  toast(D('thc'), 'success');
}

/* ===== ОЗВУЧКА ===== */
function speak() {
  if (!('speechSynthesis' in window)) { toast(D('tsu'), 'error'); return; }
  speechSynthesis.cancel();
  const d = getData();
  const txt = `${subst(d.title)}. ${subst(d.message)}${d.sender ? '. ' + subst(d.sender) : ''}`;
  const u = new SpeechSynthesisUtterance(txt);
  u.lang = $('voiceLang').value;
  u.rate = parseFloat($('speakRate').value);
  u.pitch = parseFloat($('speakPitch').value);
  const vs = speechSynthesis.getVoices();
  const m = vs.find(v => v.lang === u.lang) || vs.find(v => v.lang.startsWith(u.lang.split('-')[0]));
  if (m) u.voice = m;
  speechSynthesis.speak(u);
  toast(D('tss'), 'info');
}
function stopSpeak() {
  if ('speechSynthesis' in window) { speechSynthesis.cancel(); toast(D('tst'), 'info'); }
}

function updateCounters() {
  const m = $('message').value;
  $('msgCount').textContent = m.length;
  const w = m.trim() ? m.trim().split(/\s+/).length : 0;
  $('wordCount').textContent = w;
  $('readTime').textContent = Math.max(1, Math.round(w / 3));
}
function setCustomGradient() {
  const g = `linear-gradient(135deg,${$('c1').value} 0%,${$('c2').value} 100%)`;
  $('bg').value = g;
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  render();
}
function clearAll() {
  if (!confirm(D('ccf'))) return;
  ['recipient','title','message','sender','emojiLine','imageUrl','musicUrl','videoUrl','countdownTarget']
    .forEach(id => { const e = $(id); if (e) e.value = ''; });
  const defs = { size: 28, msgSize: 17, partCount: 8, radius: 12, imgSize: 120, bgOpacity: 0 };
  Object.entries(defs).forEach(([k, v]) => {
    const e = $(k); if (e) e.value = v;
    const ve = $(k + 'Val'); if (ve) ve.textContent = v;
  });
  ['animation','particles','glow','giftWrap'].forEach(id => $(id).value = '');
  $('partSpeed').value = '2';
  $('physicsMode').value = 'fall';
  $('titleColor').value = '#c53030';
  $('msgColor').value = '#4a2c1a';
  $('align').value = 'center';
  $('fontTitle').selectedIndex = 0;
  $('bg').value = CT[0].grad;
  document.querySelectorAll('.color-swatch').forEach((s, i) => s.classList.toggle('active', i === 0));
  render(); updateCounters();
  toast(D('tfc'), 'success');
}
function saveAsDraft() { localStorage.draft = JSON.stringify(getData()); toast(D('tds'), 'success'); }
function loadDraft() {
  if (!localStorage.draft) { toast(D('tde'), 'error'); return; }
  try {
    const d = JSON.parse(localStorage.draft);
    Object.keys(d).forEach(k => { const e = $(k); if (e) e.value = d[k]; });
    ['size','msgSize','partCount','radius','imgSize','bgOpacity'].forEach(k => {
      const v = $(k + 'Val');
      if (v && d[k] !== undefined) v.textContent = d[k];
    });
    render(); updateCounters();
    toast(D('tdl'), 'success');
  } catch (e) {}
}

let cdInt;
function renderCount() {
  clearInterval(cdInt);
  const tgt = $('countdownTarget').value, el = $('countdownDisplay');
  if (!el) return;
  if (!tgt) { el.textContent = '-- : -- : --'; return; }
  const tick = () => {
    const df = new Date(tgt) - new Date();
    if (df <= 0) { el.textContent = '🎉'; clearInterval(cdInt); confetti(); return; }
    const d = Math.floor(df / 864e5), h = Math.floor(df % 864e5 / 36e5);
    const m = Math.floor(df % 36e5 / 6e4), s = Math.floor(df % 6e4 / 1e3);
    el.textContent = (d > 0 ? d + 'd ' : '') +
      String(h).padStart(2, '0') + ' : ' + String(m).padStart(2, '0') + ' : ' + String(s).padStart(2, '0');
  };
  tick(); cdInt = setInterval(tick, 1e3);
}
function playMusic() {
  const u = $('musicUrl').value.trim();
  if (!u) { toast(D('tmu'), 'error'); return; }
  const p = $('musicPlayer');
  p.src = u;
  p.play().then(() => toast(D('tms'), 'success')).catch(() => toast(D('tme'), 'error'));
}
function stopMusic() {
  const p = $('musicPlayer'); p.pause(); p.currentTime = 0;
}

function showFullscreen() { syncFs(); $('fullscreen').classList.add('show'); confetti(); }
function hideFullscreen() { $('fullscreen').classList.remove('show'); }
function syncFs() {
  const d = getData();
  const p = $('fullPreview'); if (!p) return;
  const src = $('previewBlocks');
  if (src) p.innerHTML = src.innerHTML;
  p.style.background = d.bg;
  p.style.borderRadius = d.radius + 'px';
  p.style.boxShadow = d.glow || '0 20px 60px rgba(0,0,0,.3)';
  p.style.textAlign = d.align;
  ANIM.forEach(a => p.classList.remove(a));
  if (d.animation) p.classList.add(d.animation);
  const layout = LAYOUTS.find(l => l.code === d.layout) || LAYOUTS[0];
  p.className = 'preview ' + layout.css;
  const h3 = p.querySelector('h3');
  if (h3) {
    h3.style.fontSize = (parseInt(d.size) + 6) + 'px';
    h3.style.fontFamily = d.fontTitle; h3.style.color = d.titleColor;
  }
  const msg = p.querySelector('p');
  if (msg) {
    msg.style.color = d.msgColor;
    msg.style.fontSize = (parseInt(d.msgSize) + 3) + 'px';
  }
}

function confetti() {
  const cv = $('confettiCanvas');
  cv.style.display = 'block'; cv.width = innerWidth; cv.height = innerHeight;
  const ctx = cv.getContext('2d');
  const cols = ['#667eea','#764ba2','#f6ad55','#fc8181','#48bb78','#f6e05e','#ed64a6'];
  const ps = [];
  for (let i = 0; i < 150; i++) {
    ps.push({
      x: Math.random() * cv.width, y: -20 - Math.random() * cv.height,
      w: 8 + Math.random() * 8, h: 6 + Math.random() * 6,
      color: cols[Math.floor(Math.random() * cols.length)],
      vy: 2 + Math.random() * 3, vx: -1 + Math.random() * 2,
      rot: Math.random() * 6.28, vr: -0.1 + Math.random() * 0.2
    });
  }
  let f = 0;
  function anim() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    ps.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    f++;
    if (f < 200) requestAnimationFrame(anim);
    else { ctx.clearRect(0, 0, cv.width, cv.height); cv.style.display = 'none'; }
  }
  anim();
}

function randomize() {
  const av = TEMPLATES.filter(x =>
    (fLang === 'all' || x.lang === fLang) && (fCat === 'all' || x.category === fCat));
  if (!av.length) { toast(D('tnt'), 'error'); return; }
  const tp = av[Math.floor(Math.random() * av.length)];
  applyTpl(TEMPLATES.indexOf(tp));
  const th = CT[Math.floor(Math.random() * CT.length)];
  $('bg').value = th.grad;
  document.querySelectorAll('.color-swatch').forEach((s, i) =>
    s.classList.toggle('active', CT[i].grad === th.grad));
  const an = ['', ...ANIM];
  $('animation').value = an[Math.floor(Math.random() * an.length)];
  const pt = ['', '🎉','❄️','🌸','⭐','❤️','🎈','🍁','💎','🍀','🌈','👻','🎆'];
  $('particles').value = pt[Math.floor(Math.random() * pt.length)];
  render(); confetti();
  toast(D('tr'), 'success');
}

async function shareNative() {
  const d = getData();
  const ti = subst(d.title), ms = subst(d.message), sd = subst(d.sender);
  const txt = `${d.emojiLine}\n${ti}\n\n${ms}\n\n${sd ? '— ' + sd : ''}`;
  if (navigator.share) {
    try { await navigator.share({ title: ti, text: txt }); toast(D('tsh'), 'success'); } catch (e) {}
  } else copyText();
}
function copyText() {
  const d = getData();
  const ti = subst(d.title), ms = subst(d.message), sd = subst(d.sender);
  const txt = `${d.emojiLine}\n${ti}\n\n${ms}\n\n${sd ? '— ' + sd : ''}`;
  navigator.clipboard.writeText(txt).then(() => toast(D('tc'), 'success'));
}

/* ===== ПРИМЕНЕНИЕ ЯЗЫКА ===== */
function applyLang() {
  document.documentElement.lang = L;
  document.title = D('title');
  $('uiTitle').textContent = D('title');
  $('uiSubtitle').textContent = D('subtitle');
  $('langBtn').textContent = L === 'ru' ? '🌐 RU' : '🌐 EN';
  ['btnFullscreen','btnRandom','btnQR','btnPreviewTab'].forEach(id => S(id, id));
  S('tplPanelTitle','templatesTitle'); S('btnSaveCurrent','btnSaveCurrent'); S('constructorTitle','constructorTitle');
  ['tabBtnBasic','tabBtnStyle','tabBtnLayout','tabBtnEffects','tabBtnMedia','tabBtnExtras']
    .forEach((id, i) => S(id, ['tabBasic','tabStyle','tabLayout','tabEffects','tabMedia','tabExtras'][i]));
  S('lblRecipient','labelRecipient'); PH('recipient','placeholderRecipient');
  S('lblTitle','labelTitle'); PH('title','placeholderTitle');
  S('lblMessage','labelMessage'); PH('message','placeholderMessage');
  S('lblChars','counterChars'); S('lblWords','counterWords'); S('lblRead','counterRead');
  S('lblSender','labelSender'); PH('sender','placeholderSender');
  S('lblEmojiLine','labelEmojiLine'); S('lblVars','labelVars');
  S('lblEmoji','labelEmoji'); S('lblStickers','labelStickers');
  S('lblAppTheme','labelAppTheme'); S('lblColorTheme','labelColorTheme'); S('lblCustomGrad','labelCustomGrad');
  S('lblSize','labelSize'); S('lblMsgSize','labelMsgSize'); S('lblFont','labelFont');
  S('lblTitleColor','labelTitleColor'); S('lblMsgColor','labelMsgColor'); S('lblAlign','labelAlign');
  ['optAlignCenter','optAlignLeft','optAlignRight','optAlignJustify']
    .forEach((id, i) => S(id, ['alignCenter','alignLeft','alignRight','alignJustify'][i]));
  S('lblRadius','labelRadius'); S('lblOpacity','labelOpacity');
  S('lblLayout','labelLayout'); S('lblBlocks','labelBlocks'); S('btnResetOrder','btnResetOrder');
  S('lblAnimation','labelAnimation'); S('optNoAnim','optNoAnim');
  ['grpClassic','grpEntry','grpLoop','grpGlow','grpSpecial']
    .forEach((id, i) => { const e = $(id); if (e) e.label = D(['grpClassic','grpEntry','grpLoop','grpGlow','grpSpecial'][i]); });
  S('lblParticles','labelParticles'); S('optParticlesNone','optParticlesNone');
  S('lblPhysics','labelPhysics'); S('lblPartIntensity','labelPartIntensity'); S('lblPartSpeed','labelPartSpeed');
  ['optSpeedSlow','optSpeedNormal','optSpeedFast','optSpeedVeryFast']
    .forEach((id, i) => S(id, ['speedSlow','speedNormal','speedFast','speedVeryFast'][i]));
  S('lblGlow','labelGlow');
  ['optGlowNone','optGlowWhite','optGlowRed','optGlowGreen','optGlowBlue','optGlowGold','optGlowPink']
    .forEach((id, i) => S(id, ['glowNone','glowWhite','glowRed','glowGreen','glowBlue','glowGold','glowPink'][i]));
  S('lblMusic','labelMusic'); S('lblImage','labelImage'); S('lblImgSize','labelImgSize');
  S('lblVideo','labelVideo'); S('lblPopularStickers','labelPopularStickers');
  S('lblVoice','labelVoice'); S('lblRate','labelRate'); S('lblPitch','labelPitch');
  S('btnSpeak','btnSpeak'); S('btnStopSpeak','btnStopSpeak');
  S('lblCountdown','labelCountdown'); S('lblGiftWrap','labelGiftWrap');
  ['optGiftNone','optGiftPresent','optGiftLetter','optGiftCracker','optGiftBox']
    .forEach((id, i) => S(id, ['giftNone','giftPresent','giftLetter','giftCracker','giftBox'][i]));
  S('lblLangTemplate','labelLangTemplate'); S('btnMusic','btnMusic');
  S('btnDraftSave','btnDraftSave'); S('btnDraftLoad','btnDraftLoad');
  S('lblHotkeys','labelHotkeys');
  ['hkCopy','hkHTML','hkPDF','hkRandom','hkFullscreen','hkEsc'].forEach(id => S(id, id));
  S('previewTitle','previewTitle'); S('btnExpand','btnExpand');
  S('btnCopy','btnCopy'); S('btnHTML','btnHTML'); S('btnPNG','btnPNG');
  S('btnPDF','btnPDF'); S('btnShare','btnShare'); S('btnPreviewTab2','btnPreviewTab');
  S('historyTitle','historyTitle'); S('btnClearHistory','btnClear'); S('btnHistoryExport','btnHistoryExport');
  S('importExportTitle','importExportTitle');
  ['btnJSON','btnImportJSON','btnTemplates','btnImportTemplates','btnClearAll']
    .forEach((id, i) => S(id, ['btnJSON','btnImportJSON','btnTemplates','btnImportTemplates','btnClearAll'][i]));
  S('qrTitle','modalQRTitle'); S('qrSubtitle','modalQRSubtitle');
  S('btnDownloadQR','btnDownloadQR'); S('btnQRClose','btnClose');
  updateCounters();
}
function toggleUILang() {
  L = L === 'ru' ? 'en' : 'ru';
  localStorage.uiLang = L;
  applyLang(); initCats(); initTpls(); initLangs(); renderHist(); initThemeGrid('themeModalGrid');
  toast(D('tl'), 'info');
}

/* ===== ИНИЦИАЛИЗАЦИЯ UI ===== */
function initColors() {
  const r = $('colorRow'); r.innerHTML = '';
  CT.forEach((c, i) => {
    const s = document.createElement('div');
    s.className = 'color-swatch' + (i === 0 ? ' active' : '');
    s.style.background = c.grad;
    s.title = L === 'ru' ? c.ru : c.en;
    s.onclick = () => {
      document.querySelectorAll('.color-swatch').forEach(x => x.classList.remove('active'));
      s.classList.add('active'); $('bg').value = c.grad; render();
    };
    r.appendChild(s);
  });
}
function initCats() {
  const b = $('categoryBar'); b.innerHTML = '';
  CATS.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'preset-pill' + (c.code === fCat ? ' active' : '');
    btn.textContent = L === 'ru' ? c.ru : c.en;
    btn.onclick = () => { fCat = c.code; initCats(); initTpls(); };
    b.appendChild(btn);
  });
}
function initTpls() {
  const el = $('templates'); el.innerHTML = '';
  const f = TEMPLATES.filter(x =>
    (fLang === 'all' || x.lang === fLang) && (fCat === 'all' || x.category === fCat));
  $('tplCounter').textContent = D('tplCounter', f.length, TEMPLATES.length);
  if (!f.length) {
    el.innerHTML = `<div style="color:var(--tm);font-size:13px;padding:10px">${D('noTemplatesInCat')}</div>`;
    return;
  }
  f.forEach(tp => {
    const i = TEMPLATES.indexOf(tp);
    const b = document.createElement('button');
    b.className = 'template-btn';
    b.textContent = L === 'en' && tp.nameEn ? tp.nameEn : tp.name;
    const cnt = getTplCount(i);
    if (cnt > 0) {
      const bd = document.createElement('span');
      bd.className = 'badge'; bd.textContent = cnt;
      b.appendChild(bd);
    }
    b.onclick = () => applyTpl(i);
    b.oncontextmenu = e => { e.preventDefault(); delTpl(i); };
    el.appendChild(b);
  });
}
function initLangs() {
  const el = $('langSelector'); el.innerHTML = '';
  LG.forEach(l => {
    const b = document.createElement('button');
    b.className = 'lang-btn' + (l.c === fLang ? ' active' : '');
    b.textContent = L === 'en' && l.le ? l.le : l.l;
    b.onclick = () => { fLang = l.c; initLangs(); initTpls(); };
    el.appendChild(b);
  });
}
function initEmojis() {
  const el = $('emojiPicker'); el.innerHTML = '';
  EMOJIS.forEach(e => {
    const s = document.createElement('span');
    s.textContent = e;
    s.onclick = () => { $('emojiLine').value += e; render(); };
    el.appendChild(s);
  });
}
function initStickers() {
  const el = $('stickerGrid'); el.innerHTML = '';
  STICKERS.forEach(e => {
    const b = document.createElement('button');
    b.textContent = e;
    b.onclick = () => {
      const ta = $('message'), p = ta.selectionStart;
      ta.value = ta.value.slice(0, p) + e + ta.value.slice(ta.selectionEnd);
      ta.focus(); ta.setSelectionRange(p + e.length, p + e.length);
      render(); updateCounters();
    };
    el.appendChild(b);
  });
}
function initGifs() {
  const el = $('gifGrid'); el.innerHTML = '';
  GIFS.forEach(g => {
    const img = document.createElement('img');
    img.src = g.url; img.title = g.name; img.loading = 'lazy';
    img.onclick = () => { $('imageUrl').value = g.url; render(); toast(D('tg', g.name), 'success'); };
    el.appendChild(img);
  });
}
function initThemeGrid(containerId) {
  const el = $(containerId); if (!el) return;
  el.innerHTML = '';
  const current = document.body.dataset.theme || 'light';
  APP_THEMES.forEach(t => {
    const tile = document.createElement('div');
    tile.className = 'theme-tile' + (t.code === current ? ' active' : '');
    tile.innerHTML = `<span class="swatch" style="background:${t.preview}"></span>${L === 'ru' ? t.name : t.nameEn}`;
    tile.onclick = () => applyAppTheme(t.code);
    el.appendChild(tile);
  });
}
function applyAppTheme(code) {
  document.body.dataset.theme = code;
  localStorage.theme = code;
  document.querySelectorAll('.theme-tile').forEach(t => t.classList.remove('active'));
  initThemeGrid('appThemeGrid'); initThemeGrid('themeModalGrid');
  toast(D('tth'), 'info');
}
function openThemeModal() { initThemeGrid('themeModalGrid'); openModal('themeModal'); }
function toggleTheme() {
  const cur = document.body.dataset.theme || 'light';
  applyAppTheme(cur === 'dark' ? 'light' : 'dark');
}
function initLayouts() {
  const el = $('layoutGrid'); if (!el) return;
  el.innerHTML = '';
  const current = localStorage.selectedLayout || 'center';
  LAYOUTS.forEach(l => {
    const tile = document.createElement('div');
    tile.className = 'layout-tile' + (l.code === current ? ' active' : '');
    const blocksHtml = l.blocks.slice(0, 4).map(() => '<div></div>').join('');
    tile.innerHTML = `
      <div class="layout-preview" style="grid-template-columns:${l.grid}">${blocksHtml}</div>
      <div class="layout-label">${L === 'ru' ? l.name : l.nameEn}</div>
    `;
    tile.onclick = () => {
      localStorage.selectedLayout = l.code;
      localStorage.removeItem('blockOrder');
      initLayouts(); render(); renderBlockOrderList();
    };
    el.appendChild(tile);
  });
}
function switchTab(btn, id) {
  document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
  btn.classList.add('active');
  ['tab-basic','tab-style','tab-layout','tab-effects','tab-media','tab-extras']
    .forEach(x => $(x).classList.toggle('hidden', x !== id));
}
function openModal(id) { $(id).classList.add('active'); }
function closeModal(id) { $(id).classList.remove('active'); }

function loadState() {
  if (!localStorage.currentState) return;
  try {
    const d = JSON.parse(localStorage.currentState);
    Object.keys(d).forEach(k => {
      const e = $(k);
      if (e && d[k] !== undefined && k !== 'bg') e.value = d[k];
    });
    if (d.bg) $('bg').value = d.bg;
    ['size','msgSize','partCount','radius','imgSize','bgOpacity'].forEach(k => {
      const v = $(k + 'Val');
      if (v && d[k] !== undefined) v.textContent = d[k];
    });
  } catch (e) {}
}

let histT;
function schedHist() { clearTimeout(histT); histT = setTimeout(addHist, 3000); }

function autoTheme() {
  if (localStorage.theme) return;
  const h = new Date().getHours();
  document.body.dataset.theme = (h >= 20 || h < 7) ? 'dark' : 'light';
}

/* ===== ГОРЯЧИЕ КЛАВИШИ ===== */
document.addEventListener('keydown', e => {
  if (e.ctrlKey || e.metaKey) {
    if (e.key === 'c' && !e.target.matches('input,textarea')) { e.preventDefault(); copyText(); }
    else if (e.key === 's') { e.preventDefault(); downloadHTML(); }
    else if (e.key === 'p') { e.preventDefault(); exportPDF(); }
    else if (e.key === 'r') { e.preventDefault(); randomize(); }
    else if (e.key === 'f') { e.preventDefault(); showFullscreen(); }
  }
  if (e.key === 'Escape') {
    hideFullscreen();
    document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
  }
});
document.addEventListener('mousemove', e => {
  const p = $('preview'); if (!p) return;
  const rect = p.getBoundingClientRect();
  particleState.mouse.x = e.clientX - rect.left;
  particleState.mouse.y = e.clientY - rect.top;
});

/* ===== ИНИЦИАЛИЗАЦИЯ ===== */
function init() {
  autoTheme();
  if (localStorage.theme) document.body.dataset.theme = localStorage.theme;

  // Скрытый select для bg
  const bgSel = document.createElement('select');
  bgSel.id = 'bg'; bgSel.style.display = 'none';
  CT.forEach(c => {
    const o = document.createElement('option');
    o.value = c.grad; o.textContent = c.ru; bgSel.appendChild(o);
  });
  document.body.appendChild(bgSel);

  loadTpls();
  initColors(); initCats(); initTpls(); initLangs();
  initEmojis(); initStickers(); initGifs();
  initLayouts(); initThemeGrid('appThemeGrid');
  loadState(); applyLang();

  if (localStorage.currentState) {
    try {
      const st = JSON.parse(localStorage.currentState);
      if (st.bg) bgSel.value = st.bg;
    } catch (e) {}
  }

  ['title','message','recipient','sender'].forEach(id => {
    const e = $(id); if (e) e.addEventListener('input', schedHist);
  });

  render(); updateCounters(); renderHist(); renderCount(); renderBlockOrderList();

  if ('speechSynthesis' in window) {
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
  }
}

init();