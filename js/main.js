const translations = {
  hu: {
    meta: {
      title: 'Molnár Márk – Portfólió',
      description: 'Molnár Márk portfóliója. Informatikushallgató az RMIT University Vietnam egyetemen, Szoftverfejlesztő és Tesztelő szakképesítéssel, valamint kiberbiztonsági és hálózatvédelmi célokkal.'
    },
    language: { label: 'Nyelvválasztó' },
    nav: { about: 'Rólam', skills: 'Készségek', credentials: 'Képzések', projects: 'Projektek', contact: 'Kapcsolat', toggle: 'Navigáció megnyitása', close: 'Navigáció bezárása' },
    hero: {
      eyebrow: 'Molnár Márk · Informatikushallgató @ RMIT Vietnam',
      title1: 'Full-stack webes megoldások,',
      title2: 'biztonságtudatos szemlélettel.',
      description: 'Modern webalkalmazásokat építek az ötéves magyarországi <strong>Szoftverfejlesztő és Tesztelő képzésem</strong> alapjaira támaszkodva. Felsőfokú tanulmányaimat a jövőben <strong>kiberbiztonság és hálózati védelem</strong> területén folytatom.',
      projects: 'Projektek megtekintése',
      linkedin: 'Kapcsolódás LinkedInen',
      stack: 'Fő technológiák',
      university: 'Egyetem',
      major: 'Kiberbiztonság és hálózatvédelem',
      scroll: 'GÖRGESS'
    },
    profile: {
      subtitle: 'IT hallgató · Full-stack fejlesztő',
      code: '<span class="code-k">const</span> <span class="code-v">developer</span> = {<br>&nbsp;&nbsp;név: <span class="code-s">\'Molnár Márk\'</span>,<br>&nbsp;&nbsp;szerep: <span class="code-s">\'Junior fejlesztő / IT hallgató\'</span>,<br>&nbsp;&nbsp;egyetem: <span class="code-s">\'RMIT University Vietnam\'</span>,<br>&nbsp;&nbsp;tervezettSzak: <span class="code-s">\'Kiberbiztonság és hálózati védelem\'</span>,<br>&nbsp;&nbsp;technológiák: [<span class="code-s">\'Python\'</span>, <span class="code-s">\'C#\'</span>, <span class="code-s">\'Java\'</span>, <span class="code-s">\'PHP\'</span>, <span class="code-s">\'JS\'</span>, <span class="code-s">\'SQL\'</span>],<br>&nbsp;&nbsp;státusz: <span class="code-s">\'Nyitott gyakornoki és junior lehetőségekre\'</span><br>};'
    },
    about: {
      eyebrow: 'Rólam',
      title: 'Európai fejlesztői alapok, nemzetközi egyetemi környezetben.',
      p1: 'A <strong>Szoftverfejlesztő és Tesztelő szakképesítésemet</strong> Magyarországon, a BMSZC Neumann János Informatikai Technikum ötéves képzésén szereztem 2020 és 2025 között.',
      p2: 'Jelenleg az RMIT University Vietnam informatikushallgatója vagyok. Full-stack webalkalmazásokon dolgozom, felsőfokú tanulmányaimat pedig a jövőben <strong>kiberbiztonság és hálózati védelem</strong> területén folytatom.',
      tag1: 'Szoftverfejlesztő és Tesztelő',
      tag2: 'Kiberbiztonság és hálózatvédelem',
      languagesLabel: 'Beszélt nyelvek',
      hungarian: 'Magyar',
      hungarianLevel: 'Anyanyelvi szint',
      english: 'Angol',
      englishLevel: 'Szakmai munkanyelv'
    },
    experience: {
      eyebrow: 'Gyakorlati iskolai tapasztalat',
      title: 'Programozási projektek és technikai támogatás.',
      subtitle: 'Különböző iskolai környezetekben szereztem tapasztalatot csoportos fejlesztésben, informatikai korrepetálásban, rendezvénytechnikában és technikai támogatásban.',
      neumann: {
        intro: 'Az ötéves képzés minden tanévében általában öt programozási projektet készítettünk csoportosan.',
        projects: { title: 'Évi körülbelül öt projekt', text: 'A rendszeres projektfeladatok elsősorban programozási problémák közös megoldására épültek.' },
        teamwork: { title: 'Csoportos fejlesztés', text: 'A feladatokat csapatban terveztük, osztottuk fel és valósítottuk meg.' },
        tutoring: { title: 'Informatikai korrepetálás', text: 'A heti több informatikai óra – programozás, hálózati ismeretek, digitális kultúra, informatikai alapok és projektmunka – anyagából rendszeresen korrepetáltam osztálytársaimat. Több társamat az informatikaérettségire is én készítettem fel.' }
      },
      primary: {
        date: 'Általános iskolai időszak',
        title: 'Rendezvénytechnika és IT support',
        intro: 'Az iskolai technikai csapat tagjaként rendezvények megvalósításában és a tanári kar informatikai támogatásában vettem részt.',
        events: { title: 'Rendezvénytechnika és média', text: 'Csapatban feleltünk az iskolai rendezvények hangosításáért, technikai lebonyolításáért és videós anyagaiért.' },
        support: { title: 'Technikai és IT support', text: 'Hardveres, szoftveres és hálózati problémák esetén a tanári kar elsőként a csapatunkhoz fordult segítségért.' }
      }
    },
    skills: {
      eyebrow: 'Technikai készségek',
      title: 'Fejlesztés, adatkezelés és kreatív eszközök.',
      subtitle: 'Technológiák és alkalmazások, amelyeket fejlesztéshez, tanuláshoz és digitális tartalomkészítéshez használok.',
      programming: { title: 'Programozás és web', text: 'Szoftverfejlesztés és reszponzív webes megoldások.' },
      data: { title: 'Adatbázisok és fejlesztői eszközök', text: 'Adatkezelés, verziókövetés és fejlesztői munkafolyamatok.' },
      office: { title: 'Microsoft Office', text: 'Dokumentumok, táblázatok, prezentációk, adatbázisok és digitális jegyzetek kezelése.' },
      adobe: { title: 'Adobe Creative', text: 'Kép-, videó-, animáció- és webes tartalmak készítése.' }
    },
    credentials: {
      eyebrow: 'Tanúsítványok és képzések',
      title: 'Mit takar az ECDL IT Security és az ötéves szakképzés?',
      subtitle: 'A tanúsítvány és a szakképesítés mögötti gyakorlati tudás röviden és érthetően.',
      ecdl: {
        label: 'Tanúsítvány · 2023',
        text: 'Az ECDL IT Security tanúsítvány az informatikai biztonság alapjainak ismeretét igazolja: a digitális fenyegetések és kártevők felismerését, a hálózatok biztonságos használatát, valamint az adatok, fiókok és eszközök megfelelő védelmét.',
        topic1: 'Digitális fenyegetések',
        topic2: 'Hálózati biztonság',
        topic3: 'Adat- és fiókvédelem'
      },
      fullstack: {
        label: 'Ötéves képzés · 2020–2025',
        title: 'Szoftverfejlesztő és Tesztelő',
        text: 'A BMSZC Neumann János Informatikai Technikumban szerzett szakképesítés az objektumorientált programozástól és full-stack webfejlesztéstől az adatbázis-kezelésen át a szoftvertesztelésig fogta át a fejlesztési folyamatot.',
        topic: 'Adatbázisok',
        topic2: 'Tesztelés'
      }
    },
    projects: {
      eyebrow: 'Kiemelt munkák',
      title: 'Éles, önálló és csapatban készített projektek',
      subtitle: 'Üzleti webplatformok, önálló fejlesztések és technikumi projektmunkák többféle technológiai területről.',
      groups: { production: 'Éles és szabadúszó projektek', development: 'Önálló és iskolai fejlesztések' },
      links: { website: 'Élő weboldal', repository: 'GitHub-repó' },
      rdr: {
        tag: 'Szabadúszó üzleti webplatform',
        text: 'Reszponzív, éles környezetben működő üzleti webplatform HTML, CSS, PHP, JavaScript és MySQL alapokon. Többnyelvű felületet, tranzakciós levélküldést és strukturált adatbázis-kezelést tartalmaz.'
      },
      saigon: {
        tag: 'Szabadúszó / éles projekt',
        point1: 'Kereskedelmi működésre tervezett és sikeresen élesített webplatform szerveroldali PHP-logikával és optimalizált adatbázis-architektúrával.',
        point2: 'Letisztult, teljesen reszponzív felhasználói felület Bootstrap és egyedi CSS használatával.',
        point3: 'Gördülékeny adatbázis-szinkronizáció és dinamikus adatkiszolgálás a háttérrendszerek között.'
      },
      citrom: {
        tag: 'Egyedi weboldal',
        point1: 'Az első összetett, nagyléptékű webes projektem teljes körű tervezése és kivitelezése a specifikációtól az élesítésig.',
        point2: 'Saját, strukturált kódbázis kialakítása.',
        point3: 'Reszponzív elrendezés és átlátható navigációs architektúra a hatékony felhasználói élmény érdekében.'
      },
      rubberduck: {
        tag: 'Önálló fejlesztés / nyílt projekt',
        point1: 'Egyedi Discord bot tervezése és fejlesztése Python alapon, eseményvezérelt és aszinkron architektúrával.',
        point2: 'Dinamikus magyar–angol nyelvváltás egyetlen felhasználói paranccsal.',
        point3: 'Parancsértelmezési logika, hibakezelés és állapotkezelés kidolgozása a gördülékeny felhasználói élményért.'
      },
      vision: {
        tag: 'Iskolai / önálló Python-projekt',
        title: 'Valós idejű számítógépes látás és arcfelismerés',
        point1: 'Valós idejű videóstream- és képfeldolgozó alkalmazás fejlesztése Python és OpenCV használatával.',
        point2: 'Haar Cascade-alapú arcdetektálás, kijelölés és automatikus létszámlálás.',
        point3: 'Saját konvolúciós mátrixok és NumPy-műveletek dinamikus szűréshez, élkiemeléshez és elmosáshoz.',
        point4: 'Szelektív régióhomályosítás a háttér anonimizálására az észlelt arcok megtartása mellett.',
        point5: 'Billentyűzet-vezérelt GUI, valós idejű FPS- és HUD-kijelzés, valamint pillanatkép-készítés.'
      },
      loligochi: {
        tag: 'Iskolai projekt / privát repó',
        title: 'C# virtuális kisállat-játék',
        point1: 'Virtuális kisállat-nevelő játék tervezése és fejlesztése objektumorientált elvek és állapotgép alkalmazásával.',
        point2: 'Az éhség, jókedv és energia dinamikus követése, időalapú események és interaktív visszajelzések megvalósítása.',
        point3: 'Átlátható grafikus felület és állapotfüggő logikai folyamatok kialakítása.'
      },
      travel: {
        tag: 'Iskolai projekt / privát repó',
        title: 'Utazástervező és foglalási webplatform',
        point1: 'Komplex utazási és foglalási weboldal koncepciójának megtervezése, prototípus-készítése és interaktív fejlesztése.',
        point2: 'Dinamikus szűrési és megjelenítési funkciók az utazási csomagok és információk áttekinthető bemutatásához.',
        point3: 'Reszponzív, felhasználóbarát kezelőfelület kialakítása Bootstrap segítségével.'
      },
      hardware: {
        tag: 'Iskolai csapatprojekt / privát repó',
        title: 'Informatikai hardverportál',
        point1: 'Számítógépes hardverösszetevőket bemutató, többoldalas ismeretterjesztő webplatform fejlesztése agilis csapatmunkában.',
        point2: 'Strukturált, moduláris elrendezés és konzisztens dizájnrendszer a hatékony csapaton belüli feladatelosztás érdekében.',
        point3: 'Kiemelt iskolai elismerés a látványos megvalósításért, a pontos felépítésért és az átgondolt elrendezésért.',
        teamwork: 'Csapatmunka'
      }
    },
    contact: { eyebrow: 'Kapcsolat', title: 'Dolgozzunk együtt.', text: 'Nyitott vagyok gyakornoki és junior fejlesztői lehetőségekre Ho Si Minh-városban vagy távmunkában. Keress meg LinkedInen.', linkedin: 'LinkedIn-profil megnyitása' },
    footer: { rights: 'Minden jog fenntartva.' },
    terminal: [
      { cmd: 'whoami', out: 'Molnár Márk — informatikushallgató @ RMIT Vietnam' },
      { cmd: 'cat focus.txt', out: 'Jövőbeli irány: Kiberbiztonság és hálózati védelem' },
      { cmd: 'cat qualifications.txt', out: 'Szoftverfejlesztő és Tesztelő (2025), ECDL IT Security' },
      { cmd: 'status', out: 'Nyitott gyakornoki és junior fejlesztői lehetőségekre' }
    ]
  },
  en: {
    meta: {
      title: 'Mark Molnar – Portfolio',
      description: 'Portfolio of Mark Molnar, an IT student at RMIT University Vietnam with a Software Developer and Tester qualification and future studies focused on Cybersecurity and Network Defense.'
    },
    language: { label: 'Language selector' },
    nav: { about: 'About', skills: 'Skills', credentials: 'Qualifications', projects: 'Projects', contact: 'Contact', toggle: 'Open navigation', close: 'Close navigation' },
    hero: {
      eyebrow: 'Mark Molnar · IT Student @ RMIT Vietnam',
      title1: 'Full-stack web solutions,',
      title2: 'built with security in mind.',
      description: 'I build modern web applications on the foundation of my five-year Hungarian <strong>Software Developer and Tester programme</strong>. I plan to continue my higher education in <strong>Cybersecurity and Network Defense</strong>.',
      projects: 'View projects',
      linkedin: 'Connect on LinkedIn',
      stack: 'Primary stack',
      university: 'University',
      major: 'Cybersecurity & Network Defense',
      scroll: 'SCROLL'
    },
    profile: {
      subtitle: 'IT student · Full-stack developer',
      code: '<span class="code-k">const</span> <span class="code-v">developer</span> = {<br>&nbsp;&nbsp;name: <span class="code-s">\'Mark Molnar\'</span>,<br>&nbsp;&nbsp;role: <span class="code-s">\'Junior Developer / IT Student\'</span>,<br>&nbsp;&nbsp;university: <span class="code-s">\'RMIT University Vietnam\'</span>,<br>&nbsp;&nbsp;plannedMajor: <span class="code-s">\'Cybersecurity & Network Defense\'</span>,<br>&nbsp;&nbsp;stack: [<span class="code-s">\'Python\'</span>, <span class="code-s">\'C#\'</span>, <span class="code-s">\'Java\'</span>, <span class="code-s">\'PHP\'</span>, <span class="code-s">\'JS\'</span>, <span class="code-s">\'SQL\'</span>],<br>&nbsp;&nbsp;status: <span class="code-s">\'Open to internship and junior roles\'</span><br>};'
    },
    about: {
      eyebrow: 'About me',
      title: 'European development foundations in an international university environment.',
      p1: 'I earned my <strong>Software Developer and Tester qualification</strong> in Hungary through the five-year programme at BMSZC Neumann János Informatikai Technikum between 2020 and 2025.',
      p2: 'I am currently an IT undergraduate at RMIT University Vietnam and work on full-stack web applications. I plan to continue my higher education in <strong>Cybersecurity and Network Defense</strong>.',
      tag1: 'Software Developer and Tester',
      tag2: 'Cybersecurity & Network Defense',
      languagesLabel: 'Languages',
      hungarian: 'Hungarian',
      hungarianLevel: 'Native or bilingual',
      english: 'English',
      englishLevel: 'Professional working proficiency'
    },
    experience: {
      eyebrow: 'Practical school experience',
      title: 'Programming projects and technical support.',
      subtitle: 'I gained experience in collaborative development, peer tutoring, event technology, and IT support across different school environments.',
      neumann: {
        intro: 'During each year of the five-year programme, we usually completed five programming projects in groups.',
        projects: { title: 'Around five projects per year', text: 'The recurring assignments primarily focused on solving programming problems collaboratively.' },
        teamwork: { title: 'Collaborative development', text: 'We planned, divided, and implemented the assignments as a team.' },
        tutoring: { title: 'Peer tutoring and exam preparation', text: 'I regularly tutored classmates across our weekly IT subjects, including programming, networking, digital culture, IT fundamentals, and project work. I also prepared several classmates for the Hungarian IT school-leaving examination.' }
      },
      primary: {
        date: 'Elementary school years',
        title: 'Event technology and IT support',
        intro: 'As part of the school’s technical team, I supported event delivery and provided IT assistance to the teaching staff.',
        events: { title: 'Event technology & media', text: 'As a team, we handled sound reinforcement, technical delivery, and video production for school events.' },
        support: { title: 'Technical & IT support', text: 'The teaching staff came to our team first with hardware, software, and network-related problems.' }
      }
    },
    skills: {
      eyebrow: 'Technical skills',
      title: 'Development, data and creative tools.',
      subtitle: 'Technologies and applications I use for development, learning and digital content creation.',
      programming: { title: 'Programming & web', text: 'Software development and responsive web solutions.' },
      data: { title: 'Databases & developer tools', text: 'Data management, version control and development workflows.' },
      office: { title: 'Microsoft Office', text: 'Confident use of documents, spreadsheets, presentations, databases, and digital notes.' },
      adobe: { title: 'Adobe Creative', text: 'Creating image, video, motion and web content.' }
    },
    credentials: {
      eyebrow: 'Certificates & qualifications',
      title: 'What do ECDL IT Security and the five-year programme cover?',
      subtitle: 'A clear overview of the practical knowledge behind the certificate and qualification.',
      ecdl: {
        label: 'Certificate · 2023',
        text: 'The ECDL IT Security certificate demonstrates knowledge of information security fundamentals: recognising digital threats and malware, using networks safely, and protecting data, accounts, and devices.',
        topic1: 'Digital threats',
        topic2: 'Network security',
        topic3: 'Data & account protection'
      },
      fullstack: {
        label: 'Five-year programme · 2020–2025',
        title: 'Software Developer and Tester',
        text: 'The qualification earned at BMSZC Neumann János Informatikai Technikum covered the development lifecycle from object-oriented programming and full-stack web development to database management and software testing.',
        topic: 'Databases',
        topic2: 'Testing'
      }
    },
    projects: {
      eyebrow: 'Featured work',
      title: 'Production, individual and team projects',
      subtitle: 'Business web platforms, independent developments and technical-school projects across multiple technology areas.',
      groups: { production: 'Production and freelance projects', development: 'Independent and academic development' },
      links: { website: 'Live website', repository: 'GitHub repository' },
      rdr: {
        tag: 'Freelance business web platform',
        text: 'A responsive, production-deployed business web platform built with HTML, CSS, PHP, JavaScript and MySQL. It includes multilingual options, transactional email handling and structured database management.'
      },
      saigon: {
        tag: 'Freelance / production project',
        point1: 'Designed for commercial operation and successfully deployed, with server-side PHP logic and an optimized database architecture.',
        point2: 'Created a clean, fully responsive interface using Bootstrap and custom CSS.',
        point3: 'Implemented reliable database synchronization and dynamic data delivery between backend systems.'
      },
      citrom: {
        tag: 'Custom website',
        point1: 'Planned and delivered my first complex, large-scale web project from specification through production deployment.',
        point2: 'Built a custom, structured codebase.',
        point3: 'Implemented a responsive layout and clear navigation architecture to support an efficient user experience.'
      },
      rubberduck: {
        tag: 'Independent development / open project',
        point1: 'Designed and developed a custom Discord bot in Python using an event-driven, asynchronous architecture.',
        point2: 'Implemented dynamic Hungarian–English language switching through a single user command.',
        point3: 'Built command parsing, error handling and state management for a smooth user experience.'
      },
      vision: {
        tag: 'Academic / independent Python project',
        title: 'Real-time computer vision and face detection',
        point1: 'Developed a real-time video-stream and image-processing application with Python and OpenCV.',
        point2: 'Integrated Haar Cascade-based face detection, visual marking and automatic person counting.',
        point3: 'Applied custom convolution kernels and NumPy operations for dynamic filtering, edge enhancement and blur effects.',
        point4: 'Implemented selective region blurring to anonymize the background while preserving detected faces.',
        point5: 'Created a keyboard-controlled GUI with real-time FPS and HUD display plus snapshot capture.'
      },
      loligochi: {
        tag: 'Academic project / private repository',
        title: 'C# virtual pet game',
        point1: 'Designed and developed a virtual pet game using object-oriented principles and a state-machine architecture.',
        point2: 'Implemented dynamic tracking of hunger, happiness and energy, time-based events and interactive feedback.',
        point3: 'Created a clear graphical interface and state-dependent logic flows.'
      },
      travel: {
        tag: 'Academic project / private repository',
        title: 'Travel planning and booking web platform',
        point1: 'Designed, prototyped and interactively developed the concept for a complex travel and booking website.',
        point2: 'Built dynamic filtering and display features for presenting travel packages and information clearly.',
        point3: 'Created a responsive, user-friendly interface with Bootstrap.'
      },
      hardware: {
        tag: 'Academic team project / private repository',
        title: 'Computer hardware portal',
        point1: 'Developed a multi-page educational web platform about computer hardware components in an agile team.',
        point2: 'Created a structured, modular layout and consistent design system to support efficient task distribution within the team.',
        point3: 'Received special recognition at school for its visual execution, precise structure and thoughtful layout.',
        teamwork: 'Teamwork'
      }
    },
    contact: { eyebrow: 'Get in touch', title: 'Let\'s work together.', text: 'I am open to internship and junior developer opportunities in Ho Chi Minh City or remotely. Connect with me on LinkedIn.', linkedin: 'Open LinkedIn profile' },
    footer: { rights: 'All rights reserved.' },
    terminal: [
      { cmd: 'whoami', out: 'Mark Molnar — IT Student @ RMIT Vietnam' },
      { cmd: 'cat focus.txt', out: 'Future direction: Cybersecurity and Network Defense' },
      { cmd: 'cat qualifications.txt', out: 'Software Developer and Tester (2025), ECDL IT Security' },
      { cmd: 'status', out: 'Open to internship and junior developer opportunities' }
    ]
  }
};

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
const storedLanguage = localStorage.getItem('portfolio-language');
let currentLanguage = storedLanguage || (navigator.language.toLowerCase().startsWith('hu') ? 'hu' : 'en');
let terminalVersion = 0;

const getTranslation = (language, path) => path.split('.').reduce((value, key) => value?.[key], translations[language]);

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : 'hu';
  const dictionary = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = dictionary.meta.title;
  document.querySelector('meta[name="description"]').setAttribute('content', dictionary.meta.description);

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = getTranslation(currentLanguage, element.dataset.i18n);
    if (typeof value === 'string') element.textContent = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    const value = getTranslation(currentLanguage, element.dataset.i18nHtml);
    if (typeof value === 'string') element.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
    const value = getTranslation(currentLanguage, element.dataset.i18nAriaLabel);
    if (typeof value === 'string') element.setAttribute('aria-label', value);
  });

  document.querySelectorAll('[data-language]').forEach(button => {
    const active = button.dataset.language === currentLanguage;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  localStorage.setItem('portfolio-language', currentLanguage);
  updateNavigationButton();
  typeTerminal();
}

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

function updateNavigationButton() {
  const open = navLinks.classList.contains('open');
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', translations[currentLanguage].nav[open ? 'close' : 'toggle']);
  navToggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
}

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  updateNavigationButton();
});

document.querySelectorAll('[data-nav]').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    updateNavigationButton();
  });
});

document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => applyLanguage(button.dataset.language));
});

function typeTerminal() {
  const body = document.getElementById('terminalBody');
  const lines = translations[currentLanguage].terminal;
  const version = ++terminalVersion;
  body.innerHTML = '';
  let lineIndex = 0;

  function typeLine() {
    if (version !== terminalVersion) return;
    if (lineIndex >= lines.length) {
      const row = document.createElement('div');
      row.className = 'row';
      row.innerHTML = '<span class="prompt">mark@molmardo</span><span class="path">:~$</span> <span class="type-cursor"></span>';
      body.appendChild(row);
      return;
    }

    const line = lines[lineIndex];
    const row = document.createElement('div');
    const command = document.createElement('span');
    row.className = 'row';
    row.innerHTML = '<span class="prompt">mark@molmardo</span><span class="path">:~$</span> ';
    row.appendChild(command);
    body.appendChild(row);
    let characterIndex = 0;
    const speed = prefersReducedMotion ? 0 : 28;

    function typeCharacter() {
      if (version !== terminalVersion) return;
      if (characterIndex <= line.cmd.length) {
        command.textContent = line.cmd.slice(0, characterIndex);
        characterIndex += 1;
        if (speed > 0) {
          setTimeout(typeCharacter, speed);
          return;
        }
      } else {
        const output = document.createElement('div');
        output.className = 'out';
        const text = document.createElement('span');
        text.className = 'dim';
        text.textContent = line.out;
        output.appendChild(text);
        row.appendChild(output);
        lineIndex += 1;
        setTimeout(typeLine, prefersReducedMotion ? 0 : 380);
        return;
      }
      typeCharacter();
    }

    typeCharacter();
  }

  typeLine();
}

document.getElementById('year').textContent = new Date().getFullYear();
applyLanguage(currentLanguage);

if (!isTouch) {
  document.querySelectorAll('.tilt-card').forEach(card => {
    let rect;
    card.addEventListener('mouseenter', () => { rect = card.getBoundingClientRect(); });
    card.addEventListener('mousemove', event => {
      if (!rect) rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 12;
      const rotateX = (0.5 - y) * 12;
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

gsap.registerPlugin(ScrollTrigger);

if (!prefersReducedMotion) {
  const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
  timeline.from('.hero-title .line span', { yPercent: 120, duration: 1, stagger: 0.12 })
    .from('.hero .eyebrow', { opacity: 0, y: 10, duration: 0.6 }, '-=0.9')
    .from('.hero-desc', { opacity: 0, y: 16, duration: 0.8 }, '-=0.6')
    .from('.hero-actions', { opacity: 0, y: 16, duration: 0.8 }, '-=0.55')
    .from('.hero-meta-item', { opacity: 0, y: 12, duration: 0.6, stagger: 0.1 }, '-=0.5')
    .from('.profile-3d-card', { opacity: 0, scale: 0.9, duration: 0.8 }, '-=0.6');

  gsap.utils.toArray('.section-head').forEach(element => {
    gsap.from(element, { scrollTrigger: { trigger: element, start: 'top 82%' }, opacity: 0, y: 34, duration: 0.9, ease: 'power3.out' });
  });

  gsap.from('.about-text p', { scrollTrigger: { trigger: '.about-text', start: 'top 80%' }, opacity: 0, y: 24, duration: 0.8, stagger: 0.15, ease: 'power3.out' });
  gsap.from('.terminal', { scrollTrigger: { trigger: '.terminal', start: 'top 82%' }, opacity: 0, x: 30, duration: 0.9, ease: 'power3.out' });
  gsap.from('.experience-panel', { scrollTrigger: { trigger: '.experience-panel', start: 'top 82%' }, opacity: 0, y: 36, duration: 0.9, ease: 'power3.out' });
  gsap.from('.experience-item', { scrollTrigger: { trigger: '.experience-grid', start: 'top 84%' }, opacity: 0, y: 24, duration: 0.7, stagger: 0.12, ease: 'power3.out' });
  gsap.from('.skill-card', { scrollTrigger: { trigger: '.skills-grid', start: 'top 80%' }, opacity: 0, y: 40, duration: 0.8, stagger: 0.12, ease: 'power3.out' });
  gsap.from('.credential-card', { scrollTrigger: { trigger: '.credentials-grid', start: 'top 80%' }, opacity: 0, y: 40, duration: 0.8, stagger: 0.14, ease: 'power3.out' });

  gsap.utils.toArray('.project-card').forEach(card => {
    gsap.from(card, { scrollTrigger: { trigger: card, start: 'top 84%' }, opacity: 0, y: 50, duration: 0.9, ease: 'power3.out' });
  });

  gsap.from('.contact-panel', { scrollTrigger: { trigger: '.contact-panel', start: 'top 85%' }, opacity: 0, y: 30, duration: 0.9, ease: 'power3.out' });
}

(function initNetwork() {
  const canvas = document.getElementById('bg-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 260;

  const isMobile = window.innerWidth < 760;
  const nodeCount = isMobile ? 55 : 120;
  const spread = { x: 420, y: 260, z: 200 };
  const linkDistance = isMobile ? 70 : 95;

  function makeGlowTexture() {
    const size = 128;
    const textureCanvas = document.createElement('canvas');
    textureCanvas.width = size;
    textureCanvas.height = size;
    const context = textureCanvas.getContext('2d');
    const gradient = context.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.4, 'rgba(0,242,254,0.6)');
    gradient.addColorStop(1, 'rgba(0,242,254,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(textureCanvas);
  }

  const nodes = [];
  for (let index = 0; index < nodeCount; index += 1) {
    nodes.push({
      position: new THREE.Vector3((Math.random() - 0.5) * spread.x, (Math.random() - 0.5) * spread.y, (Math.random() - 0.5) * spread.z),
      velocity: new THREE.Vector3((Math.random() - 0.5) * 0.12, (Math.random() - 0.5) * 0.12, (Math.random() - 0.5) * 0.08)
    });
  }

  const pointPositions = new Float32Array(nodeCount * 3);
  const pointGeometry = new THREE.BufferGeometry();
  pointGeometry.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
  const pointMaterial = new THREE.PointsMaterial({ size: isMobile ? 5 : 6.5, map: makeGlowTexture(), transparent: true, depthWrite: false, color: new THREE.Color(0x8fdcff), blending: THREE.AdditiveBlending });
  scene.add(new THREE.Points(pointGeometry, pointMaterial));

  const maxLines = nodeCount * 6;
  const lineGeometry = new THREE.BufferGeometry();
  const linePositions = new Float32Array(maxLines * 2 * 3);
  const lineColors = new Float32Array(maxLines * 2 * 3);
  lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
  const lineMaterial = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending });
  scene.add(new THREE.LineSegments(lineGeometry, lineMaterial));

  const cyan = new THREE.Color(0x00f2fe);
  const purple = new THREE.Color(0x6c5ce7);
  const temporaryColor = new THREE.Color();
  const mouse = new THREE.Vector2(0, 0);

  window.addEventListener('mousemove', event => {
    mouse.x = event.clientX / window.innerWidth - 0.5;
    mouse.y = event.clientY / window.innerHeight - 0.5;
  }, { passive: true });

  function animate() {
    requestAnimationFrame(animate);

    for (let index = 0; index < nodeCount; index += 1) {
      const node = nodes[index];
      node.position.addScaledVector(node.velocity, 1);
      if (node.position.x > spread.x / 2 || node.position.x < -spread.x / 2) node.velocity.x *= -1;
      if (node.position.y > spread.y / 2 || node.position.y < -spread.y / 2) node.velocity.y *= -1;
      if (node.position.z > spread.z / 2 || node.position.z < -spread.z / 2) node.velocity.z *= -1;
      pointPositions[index * 3] = node.position.x;
      pointPositions[index * 3 + 1] = node.position.y;
      pointPositions[index * 3 + 2] = node.position.z;
    }
    pointGeometry.attributes.position.needsUpdate = true;

    let vertexIndex = 0;
    for (let first = 0; first < nodeCount && vertexIndex < maxLines * 2 * 3 - 6; first += 1) {
      for (let second = first + 1; second < nodeCount; second += 1) {
        const deltaX = nodes[first].position.x - nodes[second].position.x;
        const deltaY = nodes[first].position.y - nodes[second].position.y;
        const deltaZ = nodes[first].position.z - nodes[second].position.z;
        const distanceSquared = deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ;
        if (distanceSquared < linkDistance * linkDistance) {
          const alpha = 1 - Math.sqrt(distanceSquared) / linkDistance;
          linePositions[vertexIndex] = nodes[first].position.x;
          linePositions[vertexIndex + 1] = nodes[first].position.y;
          linePositions[vertexIndex + 2] = nodes[first].position.z;
          linePositions[vertexIndex + 3] = nodes[second].position.x;
          linePositions[vertexIndex + 4] = nodes[second].position.y;
          linePositions[vertexIndex + 5] = nodes[second].position.z;
          temporaryColor.copy(cyan).lerp(purple, 1 - alpha).multiplyScalar(alpha * 0.8);
          lineColors[vertexIndex] = temporaryColor.r;
          lineColors[vertexIndex + 1] = temporaryColor.g;
          lineColors[vertexIndex + 2] = temporaryColor.b;
          lineColors[vertexIndex + 3] = temporaryColor.r;
          lineColors[vertexIndex + 4] = temporaryColor.g;
          lineColors[vertexIndex + 5] = temporaryColor.b;
          vertexIndex += 6;
        }
      }
    }

    for (let index = vertexIndex; index < maxLines * 2 * 3; index += 1) {
      linePositions[index] = 0;
      lineColors[index] = 0;
    }
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.color.needsUpdate = true;
    lineGeometry.setDrawRange(0, vertexIndex / 3);

    if (!prefersReducedMotion) {
      camera.position.x += (mouse.x * 35 - camera.position.x) * 0.02;
      camera.position.y += (-mouse.y * 25 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);
    }
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
})();
