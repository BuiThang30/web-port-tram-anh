'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Rubik_Bubbles } from 'next/font/google';
import localFont from 'next/font/local';
import styles from './page.module.css';

const rubik = Rubik_Bubbles({ weight: '400', subsets: ['latin'], variable: '--font-rubik' });
const nexa = localFont({
  src: '../../../public/fonts/SVN-Nexa Bold.ttf',
  weight: '400',
  variable: '--font-nexa',
});

type Tab = 'intro' | 'vocarbit' | 'ulis' | 'granny' | 'pax';
type Txt = { l: number; t: number; w: number; text: string; sm?: boolean };
type Pic = { src: string; l: number; t: number; w: number; h: number };
type Ring = { src: string; l: number; t: number; d: number };
type Content = { texts: Txt[]; pics: Pic[]; rings: Ring[] };
type PanelRect = { left: number; top: number; width: number; height: number };

/* Các hàm tiện ích chuyển đổi pixel sang tỷ lệ responsive & gán thứ tự order trên mobile */
const u = (n: number) => `calc(${n} * var(--u))`;
const ord = (t: number, isText = false): CSSProperties =>
  ({ '--o': Math.round(isText ? t - 5 : t) }) as CSSProperties;

const img = (p: string) => `/image/education/${p}.png`;

/* ====== NỘI DUNG ====== */
const INTRO = `I used to be a confused high school student who was torn between two contrasting subject combinations and eventually chose the unsuitable one because of a lack of understanding of my own preference. That stark reality was why I decided to adopt education and psychology as other serious interests, not because I want to direct the younger generation to choose any specific fields, but I want them to experience their 12 years of academic pursuit without any disbelief in their own competency. Education, to me, is about learning with joy, growing up day by day, and ultimately helping to change a sense of inequality still existing in this world and advocate for the better.`;

const VOCARBIT = `My teenage stumble of choosing an unsuitable subject combination has motivated me to establish a website that is based on the Holland occupational themes with an eye to identifying student’s personality on the surface level, from that direct career paths for them. But what makes them stand out from other websites available on the Internet is that I have redesigned all the questions so it will stick to a specific context as well as analyze specific work environments, career options, high school subject combinations, university majors, and skill development for each personality code. After publication, the website has been tested and confirmed about its accuracy by over 300 students from different social backgrounds in Vietnam and worldwide. Ultimately, I hope this website can help students head in the right direction and positively pursue their academic milestones, making every little effort they spare totally worthwhile.`;

const ULIS_1 = `Having had the best four years of secondary school at ULIS Middle School (UMS), I was inspired to become an assistant for the school admission phase through helping students to familiarize with the PSA test - an advanced testing system that evaluates primary students’ ability in a modern and holistic way, as well as preparing each portion of snack for youngsters as an action of caring from the school committee.`;

const ULIS_2 = `Moreover, I also dived into how my old school strives to become “An happy school” by directly contributing to the lesson plan of social science subjects and helping to organize extracurricular activities for students that happen two times a month. Although my participation seems minimal when compared to how the school has progressed, I believe it can express my gratitude for all those lovely childhood memories and help me gain insight into equitable education in the most practical way.`;

const GRANNY = `I used to give knitting and crochet a try after reading a viral headline about their increasing popularity, but eventually realized yarn crafts just aren't my thing. That is why I chose the Grannycore Hypothesis as the topic for iCAN and my serious research project as well - to discover if the news was objective enough. The whole process of collecting and analyzing data has taught me knowledge about economics and data science, and most importantly, the significance of impartiality in journalism. It reminds me to remain unbiased, systematic and depend on statistics instead of personal views whenever conveying any information to the community, a thing that also resonates with me during my collaboration at 2 news agencies in Vietnam.`;

const PAX = `Having encountered a lot of individuals who struggle with mental issues, I wish to take up psychology seriously to improve the social mental well-being. My little desire was partly fulfilled during my internship at PAX clinic - a prestigious mental healthcare center at the heart of Hanoi city. I have had the chance to listen to a heartfelt guidance from professor Vo Van Ban, a leading expert in psychiatry and psychotherapy in Vietnam with over 50 years of experience, observe the psychological consultation process, and  practice trust-building with clients. But above all, I have learned to lend a sympathetic ear when necessary and most importantly, to respect others’ differences without judging and hurting them.`;

const WEBSITE_URL = 'https://thevocarbit.com/home';

/* ====== VỊ TRÍ (Figma x 0.75, trang cao 810) ====== */
const PANEL: Record<Tab, PanelRect> = {
  intro:    { left: 634.5, top: 91.5, width: 765, height: 378 },
  vocarbit: { left: 649.5, top: 33,   width: 750, height: 577.5 },
  ulis:     { left: 649.5, top: 33,   width: 750, height: 741.75 },
  granny:   { left: 649.5, top: 33,   width: 750, height: 741.75 },
  pax:      { left: 649.5, top: 33,   width: 750, height: 572.25 },
};

const CONTENT: Record<Tab, Content> = {
  intro: {
    texts: [{ l: 802.5, t: 144.75, w: 552, text: INTRO, sm: true }],
    pics: [],
    rings: [
      { src: img('intro/speaker'),    l: 519.75, t: 125.25, d: 258 },
      { src: img('intro/library'),    l: 720.75, t: 382.5,  d: 320.25 },
      { src: img('intro/graduation'), l: 1099.5, t: 362.25, d: 229.5 },
    ],
  },
  vocarbit: {
    texts: [{ l: 682.5, t: 303, w: 682.5, text: VOCARBIT }],
    pics: [
      { src: img('vocarbit/site-1'), l: 682.5, t: 69, w: 339,    h: 201 },
      { src: img('vocarbit/site-2'), l: 1032,  t: 69, w: 339.75, h: 201 },
    ],
    rings: [],
  },
  ulis: {
    texts: [
      { l: 684, t: 65.25,  w: 681, text: ULIS_1 },
      { l: 684, t: 405.75, w: 681, text: ULIS_2 },
    ],
    pics: [
      { src: img('ulis/ulis-1'), l: 809.25, t: 174.75, w: 270,   h: 204.75 },
      { src: img('ulis/ulis-2'), l: 1086,   t: 174.75, w: 153,   h: 204.75 },
      { src: img('ulis/ulis-3'), l: 782.25, t: 542.25, w: 157.5, h: 210 },
      { src: img('ulis/ulis-4'), l: 945.75, t: 542.25, w: 157.5, h: 210 },
      { src: img('ulis/ulis-5'), l: 1110,   t: 542.25, w: 157.5, h: 210 },
    ],
    rings: [],
  },
  granny: {
    texts: [{ l: 681, t: 57.75, w: 661.5, text: GRANNY }],
    pics: [
      { src: img('granny/poster'),     l: 789, t: 252.75, w: 503.25, h: 239.25 },
      { src: img('granny/presenting'), l: 789, t: 503.25, w: 503.25, h: 249 },
    ],
    rings: [],
  },
  pax: {
    texts: [{ l: 682.5, t: 57, w: 671.25, text: PAX }],
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
function Strip({ srcs }: { srcs: string[] }) {
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

  return (
    <div
      ref={ref}
      className={styles.strip}
      style={{ left: u(683.25), top: u(259.5), width: u(689.25), height: u(267), ...ord(259.5) }}
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
    <main 
      className={`${styles.page} ${rubik.variable} ${nexa.variable}`}
      style={{ height: u(810), '--h': 810 } as CSSProperties}
    >
      <Image className={styles.bg} src="/image/background.png" alt="" fill sizes="1440px" priority />

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
              style={{ left: u(t.l), top: u(t.t), width: u(t.w), ...ord(t.t, true) }}
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

          {C.rings.map((r) => (
            <div 
              key={r.src} 
              className={`${styles.glass} ${styles.ring}`} 
              style={{ left: u(r.l), top: u(r.t), width: u(r.d), height: u(r.d), ...ord(r.t) }}
            >
              <div className={styles.ringInner}>
                <Image className={styles.cover} src={r.src} alt="" fill sizes={`${Math.round(r.d)}px`} />
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

          {tab === 'pax' && <Strip srcs={PAX_IMGS} />}
        </div>
      </div>

      <div className={`${styles.glass} ${styles.crumb}`}>
        <Link href="/">Homepage</Link>
        <span>&gt;</span>
        <span>Education and Psychology</span>
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
            className={`${styles.glass} ${styles.pill} ${tab === p.id ? styles.pillActive : ''}`}
            onClick={() => toggleTab(p.id)}
          >
            {p.label}
          </button>
        ))}
      </div>
    </main>
  );
}