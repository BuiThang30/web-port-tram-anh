'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Rubik_Bubbles, Be_Vietnam_Pro } from 'next/font/google';
import localFont from 'next/font/local';
import styles from './page.module.css';

const rubik = Rubik_Bubbles({ weight: '400', subsets: ['latin'], variable: '--font-rubik' });
/* Font cho đoạn văn: chữ "a" hiển thị đúng (SVN-Nexa Bold làm "a" thành "o") */
const body = Be_Vietnam_Pro({
  weight: ['500', '600'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-body',
});
const nexa = localFont({
  src: '../../../public/fonts/SVN-Nexa Bold.ttf',
  weight: '400',
  variable: '--font-nexa',
});

type Tab = 'intro' | 'project' | 'magazine';
type Txt = { l: number; t: number; w: number; text: string };
type Pic = { src: string; l: number; t: number; w: number; h: number };
type PanelRect = { left: number; top: number; width: number; height: number };

/* Các hàm tiện ích chuyển đổi pixel sang tỷ lệ responsive & gán thứ tự order trên mobile */
const u = (n: number) => `calc(${n} * var(--u))`;
const ord = (t: number, isText = false): CSSProperties =>
  ({ '--o': Math.round(isText ? t - 5 : t) }) as CSSProperties;

const img = (p: string) => `/image/economics/${p}.png`;

/* ====== NỘI DUNG ====== */
const INTRO = `My friends always ask why a shark is the mascot for my first economics project. It actually began as a quiet thank you for a birthday plushie from someone special, before I realized that sharks and economics share the same misunderstood nature: intimidating from afar, yet approachable and deeply impactful once you look closely. I now believe that economics can be explored in a creative way, and it can be used as a tool to narrow social differentiation. I hope my serious interest can contribute to the elimination of inequality among disadvantaged groups and the overall thriving.`;

const PROJECT_1 = `I began my dive into sociology and economics by founding The Econobuzz, where our signature shark mascot wears a new costume for every chapter. Two years alongside over 200 students worldwide taught me how to lead and balance very different opinions. `;

const PROJECT_2 = `Season one featured an online business study abroad talk show with Miyork Education founder Anh Tuyet, while season two brought an offline personal finance workshop with specialist Jackie Nhat and six companies alongside a major economics competition that drew hundreds of contestants and sponsors.`;

const PROJECT_3 = `Ultimately, I hope our work shares meaningful knowledge and advocates for a better society.`;

const MAGAZINE = `As a co-founder, I launched an online magazine where economics, sociology, and education meet. Across three quarterly issues from April to October, each edition interviews people from three different age groups and unpacks their financial lives through a socio-economic lens. We also designed the website like an interactive game so younger readers can playfully explore social science and spread that knowledge to a wider community.`;

const MAGAZINE_URL = 'https://www.theicption.com/';

/* ====== VỊ TRÍ (Figma x 0.75, trang cao 810) ====== */
const BIG: PanelRect = { left: 493.5, top: 33, width: 888, height: 728.25 };
const PANELS: Record<Tab, PanelRect[]> = {
  intro: [
    { left: 493.5, top: 33,    width: 888, height: 273 },
    { left: 493.5, top: 322.5, width: 888, height: 297 },
  ],
  project: [BIG],
  magazine: [BIG],
};

const CONTENT: Record<Tab, { texts: Txt[]; pics: Pic[] }> = {
  intro: {
    texts: [{ l: 798, t: 372.75, w: 564, text: INTRO }],
    pics: [
      { src: img('intro/photo-1'), l: 511.5, t: 54.75, w: 417,   h: 234.75 },
      { src: img('intro/photo-2'), l: 946.5, t: 54.75, w: 418.5, h: 234.75 },
    ],
  },
  /* Bố cục theo hình mẫu: ảnh team + text 2 + slide talkshow ở cột trái,
     text 1 + ảnh GenZ + text 3 ở cột phải */
  project: {
    texts: [
      { l: 958, t: 52,  w: 410, text: PROJECT_1 },
      { l: 513, t: 308, w: 415, text: PROJECT_2 },
      { l: 958, t: 606, w: 410, text: PROJECT_3 },
    ],
    pics: [
      { src: img('project/team'), l: 527, t: 55,  w: 380, h: 235 },
      { src: img('project/genz'), l: 984, t: 217, w: 380, h: 376 },
    ],
  },
  magazine: {
    texts: [{ l: 838.5, t: 67.5, w: 525, text: MAGAZINE }],
    pics: [
      { src: img('magazine/interview'), l: 562.5, t: 66,     w: 258.75, h: 258.75 },
    ],
  },
};

type Box = { l: number; t: number; w: number; h: number };
const trio = (dir: string, name: string) => [1, 2, 3].map((n) => img(`${dir}/${name}-${n}`));

const SHARKS = trio('intro', 'shark');
const SHARK_BOX: Box = { l: 511.5, t: 342, w: 258, h: 256.5 };

const TALKSHOWS = trio('project', 'talkshow');
const TALKSHOW_BOX: Box = { l: 523, t: 474, w: 390, h: 212 };

const GAMES = trio('magazine', 'game');
const GAME_BOX: Box = { l: 562.5, t: 341.25, w: 750, h: 378.75 };

const PILLS: { id: Exclude<Tab, 'intro'>; label: string; wrap?: boolean }[] = [
  { id: 'project',  label: 'The Econobuzz Project' },
  { id: 'magazine', label: 'The Icption - Economics & Sociology Magazine', wrap: true },
];

const NAV = [
  { href: '/about', label: 'About me' },
  { href: '/culture-arts', label: 'Culture and Arts' },
  { href: '/education-psychology', label: 'Education and Psychology' },
  { href: '/economics', label: 'Economics', active: true },
  { href: '/community-service', label: 'Community Service' },
];

/* ====== Khung ảnh tự đổi qua lại (crossfade) ====== */
function Slides({ srcs, box, interval = 3500 }: { srcs: string[]; box: Box; interval?: number }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((n) => (n + 1) % srcs.length), interval);
    return () => clearInterval(id);
  }, [srcs.length, interval]);

  return (
    <div
      className={styles.slideBox}
      style={{ left: u(box.l), top: u(box.t), width: u(box.w), height: u(box.h), ...ord(box.t) }}
    >
      {srcs.map((s, i) => (
        <Image
          key={s}
          className={`${styles.slide} ${i === current ? styles.slideOn : ''}`}
          src={s}
          alt=""
          fill
          sizes={`${Math.round(box.w)}px`}
        />
      ))}
    </div>
  );
}

export default function EconomicsPage() {
  const [tab, setTab] = useState<Tab>('intro');
  const toggleTab = (id: Tab) => setTab((cur) => (cur === id ? 'intro' : id));
  const C = CONTENT[tab];

  return (
    <main
      className={`${styles.page} ${rubik.variable} ${nexa.variable} ${body.variable}`}
      style={{ height: u(810), '--h': 810 } as CSSProperties}
    >
      <Image className={styles.bg} src="/image/background.png" alt="" fill sizes="1440px" priority />

      <div className={styles.canvas}>
        {PANELS[tab].map((p, i) => (
          <div
            key={i}
            className={`${styles.glass} ${styles.panel}`}
            style={{ left: u(p.left), top: u(p.top), width: u(p.width), height: u(p.height) }}
          />
        ))}

        <div key={tab} className={styles.content}>
          {C.texts.map((t) => (
            <p
              key={t.text}
              className={styles.text}
              style={{
                left: u(t.l),
                top: u(t.t),
                width: u(t.w),
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 600,
                ...ord(t.t, true),
              }}
            >
              {t.text}
            </p>
          ))}

          {C.pics.map((p) => (
            <div
              key={p.src}
              className={styles.pic}
              style={{ left: u(p.l), top: u(p.t), width: u(p.w), height: u(p.h), ...ord(p.t) }}
            >
              <Image className={styles.cover} src={p.src} alt="" fill sizes={`${Math.round(p.w)}px`} />
            </div>
          ))}

          {tab === 'intro' && <Slides srcs={SHARKS} box={SHARK_BOX} interval={3500} />}
          {tab === 'project' && <Slides srcs={TALKSHOWS} box={TALKSHOW_BOX} interval={4000} />}
          {tab === 'magazine' && <Slides srcs={GAMES} box={GAME_BOX} interval={4500} />}

          {tab === 'magazine' && (
            <a
              className={`${styles.glass} ${styles.btn}`}
              style={{ left: u(838.5), top: u(280.5), ...ord(280.5) }}
              href={MAGAZINE_URL}
              target="_blank"
              rel="noreferrer"
            >
              My Magazine
              <svg width="21" height="12" viewBox="0 0 28 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M1 8h26M20 1l7 7-7 7" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <div className={`${styles.glass} ${styles.crumb}`}>
        <Link href="/">Homepage</Link>
        <span>&gt;</span>
        <span>Economics</span>
      </div>

      <nav className={styles.nav}>
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} className={n.active ? styles.navActive : undefined}>
            {n.label}
          </Link>
        ))}
      </nav>

      <div className={styles.pills}>
        {PILLS.map((p) => (
          <button
            key={p.id}
            type="button"
            aria-pressed={tab === p.id}
            className={`${styles.glass} ${styles.pill} ${p.wrap ? styles.pillWrap : ''} ${tab === p.id ? styles.pillActive : ''}`}
            onClick={() => toggleTab(p.id)}
          >
            {p.label}
          </button>
        ))}
      </div>
    </main>
  );
}