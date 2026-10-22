'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
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

type Tab = 'intro' | 'vocarbit' | 'ulis' | 'granny' | 'pax';
/* Toạ độ của text / pic / ring giờ là TƯƠNG ĐỐI so với góc trên-trái của panel */
type Txt = { l: number; t: number; w: number; text: string; sm?: boolean };
type Pic = { src: string; l: number; t: number; w: number; h: number };
type Ring = { src: string; l: number; t: number; d: number };
type Content = { texts: Txt[]; pics: Pic[]; rings: Ring[] };
type PanelRect = { left: number; top: number; width: number; height: number };

const u = (n: number) => `calc(${n} * var(--u))`;
const ord = (t: number, isText = false): CSSProperties =>
  ({ '--o': Math.round(isText ? t - 5 : t) }) as CSSProperties;

const img = (p: string) => `/image/education/${p}.png`;

/* ====== NỘI DUNG ====== */
const INTRO = `I once lost my confidence in high school simply because I didn't understand myself well enough to choose the right subjects, leaving me struggling to match my classmates' pace. That stumble has inspired my passion for education and psychology. My goal isn't to pick a path for the next generation, because what truly matters to me is helping them spend twelve years growing up with joy, believing in their own abilities, and advocating for a fairer society.`;

const VOCARBIT = `That teenage misstep with my study track inspired me to create a Holland-based website that maps out students' initial personalities and career paths. What sets it apart from other platforms is how I tailored the questions to specific situations, connecting each result to detailed work settings, school subjects, college majors, and skill sets. Since over 300 students from various backgrounds in Vietnam and abroad have already validated its accuracy, I hope this tool helps young people find the right direction so every bit of effort they put into school truly counts.`;

const ULIS_1 = `Four golden years at ULIS Middle School has inspired me to become an admissions assistant to guide primary kids through the modern, holistic PSA test and pack snacks that showed the school's care. I also contributed to social science lesson plans and helped run activities twice a month for UMS's "Happy School" vision. Though my role felt tiny beside the school's progress, thanking my childhood home has shown me how equitable education works in real life.`;

const GRANNY = `In search of inner peace, I used to try knitting and crochet after a viral headline claimed youth loved "grannycore" crafts, yet weeks of calming practice proved the hobby wasn't for me. Because I wondered if the news was truly objective, I launched my iCAN research project - The Grannycore Hypothesis. Collecting data and uncovering unexpected results not only taught me economics and data science, but it also reminded me at the two Vietnamese news agencies where I work that honest journalism relies on systematic statistics rather than personal bias.`;

const PAX = `Seeing people suffer from mental issues has inspired me to pursue psychology for the good of our community, a wish that came alive during my internship at PAX Clinic in the heart of Hanoi. There, Professor Vo Van Ban shared heartfelt wisdom from his fifty years in psychiatry and psychotherapy as I observed consultations and practiced building trust with clients. Above all, I learned to offer a sympathetic ear and respect every person's differences without judging or hurting them.`;

const WEBSITE_URL = 'https://thevocarbit.com/home';

/* ====== VỊ TRÍ PANEL (Figma x 0.75, trang cao 810) ====== */
const PANEL: Record<Tab, PanelRect> = {
  intro:    { left: 634.5, top: 91.5, width: 765, height: 461 },
  vocarbit: { left: 649.5, top: 33,   width: 750, height: 577.5 },
  ulis:     { left: 649.5, top: 33,   width: 750, height: 660 },
  granny:   { left: 649.5, top: 15,   width: 750, height: 776 },
  pax:      { left: 649.5, top: 33,   width: 750, height: 572.25 },
};

/* ====== NỘI DUNG + VỊ TRÍ (tương đối so với panel) ====== */
const CONTENT: Record<Tab, Content> = {
  intro: {
    texts: [{ l: 165, t: 50, w: 555, text: INTRO, sm: true }],
    pics: [],
    rings: [
      { src: img('intro/speaker'),    l: -117, t: 32,  d: 258 },
      { src: img('intro/library'),    l: 85,   t: 284, d: 318 },
      { src: img('intro/graduation'), l: 463,  t: 270, d: 229 },
    ],
  },
  vocarbit: {
    texts: [{ l: 33, t: 270, w: 682.5, text: VOCARBIT }],
    pics: [
      { src: img('vocarbit/site-1'), l: 33,    t: 36, w: 339,    h: 201 },
      { src: img('vocarbit/site-2'), l: 382.5, t: 36, w: 339.75, h: 201 },
    ],
    rings: [],
  },
  ulis: {
    texts: [{ l: 24, t: 18, w: 702, text: ULIS_1, sm: true }],
    pics: [
      { src: img('ulis/ulis-1'), l: 24,  t: 150, w: 326, h: 184 },
      { src: img('ulis/ulis-4'), l: 356, t: 150, w: 170, h: 184 },
      { src: img('ulis/ulis-2'), l: 532, t: 150, w: 194, h: 184 },
      { src: img('ulis/ulis-3'), l: 24,  t: 344, w: 290, h: 292 },
      { src: img('ulis/ulis-5'), l: 320, t: 344, w: 406, h: 292 },
    ],
    rings: [],
  },
  granny: {
    texts: [{ l: 24, t: 14, w: 702, text: GRANNY, sm: true }],
    pics: [
      { src: img('granny/poster'),     l: 24, t: 150, w: 702, h: 316 },
      { src: img('granny/presenting'), l: 24, t: 476, w: 702, h: 276 },
    ],
    rings: [],
  },
  pax: {
    texts: [{ l: 24, t: 20, w: 702, text: PAX }],
    pics: [],
    rings: [],
  },
};

const PILLS: { id: Exclude<Tab, 'intro'>; label: string }[] = [
  { id: 'vocarbit', label: 'The Vocarbit - Career Orientation website' },
  { id: 'ulis',     label: 'ULIS Middle School Admissions Assistant' },
  { id: 'granny',   label: 'The Grannycore Hypothesis' },
  { id: 'pax',      label: 'PAX Clinic - Internship' },
];

const NAV = [
  { href: '/about', label: 'About me' },
  { href: '/culture-arts', label: 'Culture and Arts' },
  { href: '/education-psychology', label: 'Education and Psychology', active: true },
  { href: '/economics', label: 'Economics' },
  { href: '/community-service', label: 'Community Service' },
];

const PAX_IMGS = Array.from({ length: 5 }, (_, i) => img(`pax/pax-${i + 1}`));

/* ====== Dải ảnh tự chạy ngang (kéo chuột / cuộn để xem, rê chuột vào thì dừng) ====== */
function Strip({ srcs, panel }: { srcs: string[]; panel: PanelRect }) {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const drag = useRef<{ x: number; s: number } | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let pos = 0;
    let raf = 0;
    const tick = () => {
      if (paused.current) {
        pos = el.scrollLeft;
      } else {
        pos += 0.6;
        if (pos >= el.scrollWidth / 2) pos -= el.scrollWidth / 2;
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const L = 24;
  const T = 296;
  const W = 702;
  const H = 260;

  return (
    <div
      ref={ref}
      className={styles.strip}
      style={{ left: u(panel.left + L), top: u(panel.top + T), width: u(W), height: u(H), ...ord(T) }}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => { paused.current = false; drag.current = null; }}
      onPointerDown={(e) => { drag.current = { x: e.clientX, s: ref.current?.scrollLeft ?? 0 }; }}
      onPointerUp={() => { drag.current = null; }}
      onPointerMove={(e) => {
        if (drag.current && ref.current) ref.current.scrollLeft = drag.current.s - (e.clientX - drag.current.x);
      }}
    >
      {[...srcs, ...srcs].map((s, i) => (
        <Image key={s + i} className={styles.stripImg} src={s} alt="" width={400} height={356} draggable={false} />
      ))}
    </div>
  );
}

export default function EducationPsychologyPage() {
  const [tab, setTab] = useState<Tab>('intro');
  const toggleTab = (id: Tab) => setTab((cur) => (cur === id ? 'intro' : id));
  const C = CONTENT[tab];
  const P = PANEL[tab];

  return (
    <main className={`${styles.page} ${rubik.variable} ${nexa.variable} ${body.variable}`}>
      <Image className={styles.bg} src="/image/background.png" alt="" fill sizes="100vw" priority />

      {/* .stage = khung thiết kế 1440x810, tự scale theo màn hình và căn giữa */}
      <div className={styles.stage}>
        <div className={styles.canvas}>
          <div
            className={`${styles.glass} ${styles.panel}`}
            style={{ left: u(P.left), top: u(P.top), width: u(P.width), height: u(P.height) }}
          />

          <div key={tab} className={styles.content}>
            {C.texts.map((t) => (
              <p
                key={t.text}
                className={`${styles.text} ${t.sm ? styles.textSm : ''}`}
                style={{
                  left: u(P.left + t.l),
                  top: u(P.top + t.t),
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
                style={{
                  left: u(P.left + p.l),
                  top: u(P.top + p.t),
                  width: u(p.w),
                  height: u(p.h),
                  ...ord(p.t),
                }}
              >
                <Image className={styles.cover} src={p.src} alt="" fill sizes="(max-width: 1023px) 50vw, 40vw" />
              </div>
            ))}

            {C.rings.map((r) => (
              <div
                key={r.src}
                className={`${styles.glass} ${styles.ring}`}
                style={{
                  left: u(P.left + r.l),
                  top: u(P.top + r.t),
                  width: u(r.d),
                  height: u(r.d),
                  ...ord(r.t),
                }}
              >
                <div className={styles.ringInner}>
                  <Image className={styles.cover} src={r.src} alt="" fill sizes="(max-width: 1023px) 200px, 25vw" />
                </div>
              </div>
            ))}

            {tab === 'vocarbit' && (
              <a
                className={`${styles.glass} ${styles.btn}`}
                style={{ left: u(947.25), top: u(542.25), ...ord(542.25) }}
                href={WEBSITE_URL}
                target="_blank"
                rel="noreferrer"
              >
                My Website
                <svg width="21" height="12" viewBox="0 0 28 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 8h26M20 1l7 7-7 7" />
                </svg>
              </a>
            )}

            {tab === 'pax' && <Strip srcs={PAX_IMGS} panel={P} />}
          </div>
        </div>

        <div className={`${styles.glass} ${styles.crumb}`}>
          <Link href="/">Homepage</Link>
          <span>&gt;</span>
          <span>Education and Psychology</span>
        </div>

        <nav className={styles.nav}>
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={n.active ? styles.navActive : undefined}
              /* Đang ở trang này mà bấm lại => không điều hướng, chỉ quay về tab intro */
              onClick={
                n.active
                  ? (e) => {
                      e.preventDefault();
                      setTab('intro');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  : undefined
              }
            >
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
              className={`${styles.glass} ${styles.pill} ${tab === p.id ? styles.pillActive : ''}`}
              onClick={() => toggleTab(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}