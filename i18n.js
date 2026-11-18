// Translations. English is the default and also lives in index.html as fallback.
const I18N = {
  en: {
    "_title": "ONYX — Free RobRun Cheat: Aimbot, ESP, Radar | Download",
    "_desc": "ONYX is a free RobRun cheat for Windows: aimbot with smoothing and prediction, player ESP, loot highlighting, 2D radar and world settings. No keys, no subscriptions. Download and press Insert in-game.",
    "nav.features": "Features", "nav.how": "How it works", "nav.faq": "FAQ", "nav.download": "Download",
    "hero.title": '<span class="line"><span>ONYX for</span></span><span class="line"><span class="red">RobRun</span></span>',
    "hero.lead": "A free cheat for RobRun with aimbot, ESP, loot highlighting and a radar",
    "cta.download": "Download for free",
    "features.label": "Features", "features.title": "Six tabs in one menu",
    "stats.tabs": "tabs in the menu", "stats.free": "Free", "stats.free2": "no keys or subscriptions",
    "stats.lang": "interface languages",
    "f.combat": "Aimbot with radius, smoothing and prediction settings. Hitbox choice and target filters for knocked players, civilians and clan members.",
    "f.visuals": "Player ESP with boxes, skeletons, names, distance and health",
    "f.loot": "Highlights loot and valuable items, filtered by type and distance",
    "f.radar": "A separate 2D radar with every player around you",
    "f.world": "Lighting and time of day, plus grass and fog removal",
    "f.settings": "Configs, keybinds, interface language and a stream-proof mode that hides the menu from recordings",
    "how.label": "How it works", "how.title": "Three steps to start",
    "how.s1t": "Run start.bat", "how.s1": "Download ONYX, unpack the archive and run <code>start.bat</code>. Wait until it finishes loading.",
    "how.s2t": "Join the game", "how.s2": "Launch RobRun and join a match as usual, ONYX is already running in the background",
    "how.s3t": "Press Insert", "how.s3": "Press <kbd>Insert</kbd> in-game to open the cheat menu. Press it again to hide it.",
    "faq.title": "Common questions",
    "faq.q1": "Is ONYX really free?", "faq.a1": "Yes. No keys, no subscriptions, no paid tiers. Every feature is available to everyone.",
    "faq.q2": "What are the system requirements?", "faq.a2": "Windows 10 or 11, x64. No extra software needed, just run start.bat.",
    "faq.q3": "What happens when the game updates?", "faq.a3": "We update ONYX shortly after every patch",
    "footer.copy": "© 2026 ONYX. Not affiliated with the RobRun developers."
  },
  ru: {
    "_title": "ONYX — бесплатный чит для RobRun: аимбот, ESP, радар | Скачать",
    "_desc": "ONYX — бесплатный чит для RobRun на Windows: аимбот с плавностью и предиктом, ESP игроков, подсветка лута, 2D-радар и настройки мира. Без ключей и подписок. Скачай и нажми Insert в игре.",
    "nav.features": "Функции", "nav.how": "Как начать", "nav.faq": "FAQ", "nav.download": "Скачать",
    "hero.title": '<span class="line"><span>ONYX для</span></span><span class="line"><span class="red">RobRun</span></span>',
    "hero.lead": "Бесплатный чит для RobRun: аимбот, ESP, подсветка лута и радар",
    "cta.download": "Скачать бесплатно",
    "features.label": "Функции", "features.title": "Шесть вкладок в одном меню",
    "stats.tabs": "вкладок в меню", "stats.free": "Бесплатно", "stats.free2": "без ключей и подписок",
    "stats.lang": "языки интерфейса",
    "f.combat": "Аимбот с настройкой радиуса, плавности и предикта. Выбор хитбокса и фильтры целей: нокнутые, мирные, соклановцы.",
    "f.visuals": "ESP игроков: боксы, скелеты, имена, дистанция и здоровье",
    "f.loot": "Подсветка лута и ценных предметов с фильтром по типу и дистанции",
    "f.radar": "Отдельный 2D-радар со всеми игроками вокруг",
    "f.world": "Освещение и время суток, удаление травы и тумана",
    "f.settings": "Конфиги, бинды, язык интерфейса и стрим-проф режим, который скрывает меню на записи",
    "how.label": "Как начать", "how.title": "Три шага до запуска",
    "how.s1t": "Запусти start.bat", "how.s1": "Скачай ONYX, распакуй архив и запусти <code>start.bat</code>. Дождись окончания загрузки.",
    "how.s2t": "Зайди в игру", "how.s2": "Запусти RobRun и зайди в матч как обычно, ONYX уже работает в фоне",
    "how.s3t": "Нажми Insert", "how.s3": "Нажми <kbd>Insert</kbd> в игре, чтобы открыть меню чита. Повторное нажатие скрывает его.",
    "faq.title": "Частые вопросы",
    "faq.q1": "ONYX правда бесплатный?", "faq.a1": "Да. Никаких ключей, подписок и платных версий. Все функции доступны всем.",
    "faq.q2": "Какие системные требования?", "faq.a2": "Windows 10 или 11, x64. Дополнительный софт не нужен, достаточно запустить start.bat.",
    "faq.q3": "Что делать, если игра обновилась?", "faq.a3": "Мы обновляем ONYX вскоре после каждого патча",
    "footer.copy": "© 2026 ONYX. Не связан с разработчиками RobRun."
  }
};

function setLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.title = dict._title;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', dict._desc);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = dict[el.dataset.i18n]; if (v != null) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = dict[el.dataset.i18nHtml]; if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll('.lang button').forEach(b =>
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  try { localStorage.setItem('onyx-lang', lang); } catch (e) {}
  if (window.onLangChange) window.onLangChange();
}

document.querySelectorAll('.lang button').forEach(b =>
  b.addEventListener('click', () => setLang(b.dataset.lang)));

let saved = 'en';
try { saved = localStorage.getItem('onyx-lang') || 'en'; } catch (e) {}
const q = new URLSearchParams(location.search).get('lang');
if (q && I18N[q]) saved = q;
setLang(saved);
