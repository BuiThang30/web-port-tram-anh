'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Rubik_Bubbles } from 'next/font/google';
import localFont from 'next/font/local';
import styles from './page.module.css';
import { SUBS, type Sub } from './data';

const rubik = Rubik_Bubbles({ weight: '400', subsets: ['latin'], variable: '--font-rubik' });
const nexa = localFont({ src: '../../../public/fonts/SVN-Nexa Bold.ttf', weight: '400', variable: '--font-nexa' });

type Tab = 'intro' | 'press' | 'essay' | 'incense' | 'pantheon' | 'concert';
type Txt = { l: number; t: number; w: number; text: string; href?: string; center?: boolean };
type Pic = { src: string; l: number; t: number; w: number; h: number; round?: boolean; z?: number };
type Ring = { src: string; l: number; t: number; d: number; z?: number };
type Content = { texts: Txt[]; pics: Pic[]; rings: Ring[] };
type Box = { l: number; t: number; w: number; h: number };
type PanelRect = { left: number; top: number; width: number; height: number };

const img = (p: string) => `/image/culture/${p}.png`;

const INTRO = `To my younger self in my grandparents’ house, “culture” was simply the red wooden doll they brought back from graduate school in Russia and the crimson “Ao yem” in my birthday photos. Yet time has nurtured that early affection for art into a true compass that reaches far beyond the idea of customs. Those childhood memories now guide my hands to create projects that mark my personal journey and offer wandering souls like me a peaceful way back to their roots.`;

const PRESS_1 = `Since early 2026, my work at two prestigious press agencies in Vietnam, the Agriculture and Environment Newspaper and the Voice of Vietnam, has centered on urgent social, environmental, and economic issues.`;

const PRESS_2 = `From sociologists and veteran journalists of over 15 years, I learned to integrate literary grace with accuracy and impartiality in cultural and economic stories. Above all, the lesson that stays longest is moral: a reporter must serve the people and reflect reality honestly rather than suppress the disadvantaged.`;

const ESSAY = `I have always believed that how a nation reads and writes shows how far it has come. That belief carried me from the Vietnam Museum of Ethnology to the Hanoi Museum, then south to Linh Ung Non Nuoc Pagoda in Da Nang and Thien Mu Temple in Hue, where heritage fed my adventurous spirit and filled my chest with pride. So while reading my essay and lingering over the 80+ pictures I took, I hope people will slow down, admire Vietnam’s thousand years of history, and hold their brush a little more firmly each day, to lay one more stone in the cultural foundation of my beloved hometown.`;

const INCENSE = `As a spiritual believer, I grew up with the aroma of incense at my family altar at Tet—something that also accompanied me on a solo trip to Quan Thanh Pagoda. I always wondered why its scent soothes my nerves, so at 17 I traced it to Quang Phu Cau Incense Village - Ung Hoa, my parents’ hometown in Hanoi. I wanted the world to know this village and my generation to keep its craft alive, so I made a news reportage with the headman and famous artisans and ran a workshop for 70+ students. Along the way, I talked, learned, and ultimately, grew up a lot.`;

const PANTHEON_1 = `As a spiritual believer, I love wondering how people of different creeds let graceful lines on paper carry their prayers. That curiosity pushed me to photograph traditional worship paintings on my own and write poems, both traditional and modern, to read each painting closely. I hope those who cannot travel far to see them can still admire them from home, and come to love the religious diversity of our homeland.`;

const CONCERT_1 = `As Head of Content, Media and English MC for the “Viet Nam tinh hoa” concert in the second season of Aria Project - a music initiative founded by Hanoi high school students, I have come to appreciate how music can make meaningful changes to society. But above all, what stays with me longest is my MC debut, when I made my first mistake in public. My face burned, but I kept going, and that night taught me to welcome mistakes and let myself stumble, because that is how I grow stronger.`;

const VIEWER_PAD = 60;
const EXTRA = 28;
/* essay được thêm vào để panel co lại theo nội dung (dải ảnh sát text) */
const SHRINK: Tab[] = ['pantheon', 'concert', 'essay'];

/* Vị trí top của dải ảnh ở tab essay (hệ toạ độ canvas). Giảm số này nếu muốn sát text hơn. */
const ESSAY_STRIP_TOP = 265;

const HEIGHT: Record<Tab, number> = {
  intro: 810, press: 987, essay: 810, incense: 1559, pantheon: 810, concert: 810,
};

const PANEL: Record<Tab, PanelRect> = {
  intro:    { left: 688.5, top: 37.5,  width: 693, height: 693 },
  press:    { left: 688.5, top: 37.5,  width: 693, height: 923.25 },
  essay:    { left: 688.5, top: 37.5,  width: 693, height: 682.5 },
  incense:  { left: 688.5, top: 36.75, width: 693, height: 1481 },
  pantheon: { left: 688.5, top: 115.5, width: 693, height: 588 },
  concert:  { left: 688.5, top: 33,    width: 693, height: 753 },
};
const VIEWER_PANEL: PanelRect = { left: 690.75, top: 108, width: 693, height: 675 };

const CONTENT: Record<Tab, Content> = {
  intro: {
    texts: [{ l: 721.5, t: 69, w: 628.5, text: INTRO }],
    pics: [{ src: img('intro/collage'), l: 657.75, t: 264, w: 762, h: 477 }],
    rings: [],
  },
  press: {
    texts: [
      { l: 688.5, t: 361.5, w: 693, center: true, href: 'https://nongnghiepmoitruong.vn/ban-tinh-ca-le-hoi-va-hoa-tren-cao-nguyen-da-d799027.html', text: 'The Festival Love Song and Flowers on the Rocky Plateau' },
      { l: 717.75, t: 399, w: 619.5, text: PRESS_1 },
      { l: 688.5, t: 767.25, w: 693, center: true, href: 'https://vov.vn/thi-truong/gia-bac-hom-nay-93-gia-bac-trong-nuoc-giam-trong-phien-dau-tuan-post1274172.vov', text: 'VOV | Silver prices today, March 9: Domestic silver prices fell at the start of the week.' },
      { l: 717, t: 822.75, w: 620, text: PRESS_2 },
    ],
    pics: [
      { src: img('press/press-1'), l: 826.5, t: 61.5, w: 417, h: 286.5 },
      { src: img('press/press-2'), l: 826.5, t: 513,  w: 417, h: 242.25 },
    ],
    rings: [],
  },
  essay: { texts: [{ l: 717.75, t: 67.5, w: 627, text: ESSAY }], pics: [], rings: [] },
  incense: {
    texts: [{ l: 722.25, t: 307, w: 625.5, text: INCENSE }],
    pics: [],
    rings: [
      { src: img('incense/circle-1'), l: 723.75,  t: 75.6, d: 196.5 },
      { src: img('incense/circle-2'), l: 939,     t: 75.6, d: 196.5 },
      { src: img('incense/circle-3'), l: 1155.75, t: 75.6, d: 198 },
    ],
  },
  pantheon: {
    texts: [{ l: 729.75, t: 156.5, w: 245, text: PANTHEON_1 }],
    pics: [
      { src: img('pantheon/intro-2'), l: 1008,    t: 156.5, w: 153,    h: 203.25, round: true },
      { src: img('pantheon/intro-3'), l: 1167.75, t: 156.5, w: 197.25, h: 203.25, round: true },
      { src: img('pantheon/intro-1'), l: 1008,    t: 372,   w: 357,    h: 264,    round: true },
    ],
    rings: [
      { src: img('pantheon/intro-ring-1'), l: 1284, t: 278, d: 160.5 },
      { src: img('pantheon/intro-ring-2'), l: 912,  t: 521, d: 160.5 },
    ],
  },
  concert: {
    texts: [{ l: 720.6, t: 419, w: 643, text: CONCERT_1 }],
    pics: [],
    rings: [
      { src: img('concert/ring-1'), l: 711.4, t: 241.6, d: 177 },
      { src: img('concert/ring-2'), l: 1179,  t: 148,   d: 189 },
    ],
  },
};

const CONCERT_SLIDES = [1, 2, 3, 4].map((n) => img(`concert/poster-${n}`));
const CONCERT_BOX: Box = { l: 790.5, t: 61.5, w: 489, h: 325.5 };
const CONCERT_INTERVAL = 4000;

const PILLS: { id: Exclude<Tab, 'intro'>; label: string }[] = [
  { id: 'press',    label: 'Writer at State-run press agencies' },
  { id: 'essay',    label: '“Between Stone And Light” Photo Essay' },
  { id: 'incense',  label: 'Quang Phu Cau Incense Village Promotion' },
  { id: 'pantheon', label: 'The Lyrical Patheon' },
  { id: 'concert',  label: '“Viet Nam Tinh Hoa” Concert' },
];

const NAV = [
  { href: '/about', label: 'About me' },
  { href: '/culture-arts', label: 'Culture and Arts', active: true },
  { href: '/education-psychology', label: 'Education and Psychology' },
  { href: '/economics', label: 'Economics' },
  { href: '/community-service', label: 'Community Service' },
];

const ESSAY_IMGS = Array.from({ length: 6 }, (_, i) => img(`essay/essay-${i + 1}`));
const RECAP_IMGS = Array.from({ length: 6 }, (_, i) => img(`incense/recap-${i + 1}`));

function Slides({ srcs, box, interval = 4000 }: { srcs: string[]; box: Box; interval?: number }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((n) => (n + 1) % srcs.length), interval);
    return () => clearInterval(id);
  }, [srcs.length, interval]);

  return (
    <div className={styles.fadeBox} style={{ left: box.l, top: box.t, width: box.w, height: box.h }}>
      {srcs.map((s, i) => (
        <Image
          key={s}
          className={`${styles.fadeImg} ${i === current ? styles.fadeOn : ''}`}
          src={s}
          alt=""
          fill
          sizes={`${Math.round(box.w)}px`}
        />
      ))}
    </div>
  );
}

function Strip({ srcs, top }: { srcs: string[]; top?: number }) {
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
      style={top !== undefined ? { top } : undefined}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => { paused.current = false; drag.current = null; }}
      onPointerDown={(e) => { drag.current = { x: e.clientX, s: ref.current?.scrollLeft ?? 0 }; }}
      onPointerUp={() => { drag.current = null; }}
      onPointerMove={(e) => {
        if (drag.current && ref.current) ref.current.scrollLeft = drag.current.s - (e.clientX - drag.current.x);
      }}
    >
      {[...srcs, ...srcs].map((s, i) => (
        <Image key={s + i} className={styles.stripImg} src={s} alt="" width={400} height={296} draggable={false} />
      ))}
    </div>
  );
}

function Viewer({ sub, top, arrowTop, onHeight }: { sub: Sub; top: number; arrowTop: number; onHeight: (h: number) => void }) {
  const [i, setI] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = slideRef.current;
    if (!el) return;
    const report = () => onHeight(el.offsetHeight);
    report();
    const ro = new ResizeObserver(report);
    ro.observe(el);
    document.fonts?.ready.then(report);
    return () => ro.disconnect();
  }, [i, onHeight]);

  const n = sub.slides.length;
  const s = sub.slides[i];
  const src = img(`pantheon/${sub.key}-${i + 1}`);

  return (
    <>
      <button type="button" aria-label="Previous" className={`${styles.arrow} ${styles.arrowL}`} style={{ top: arrowTop }} onClick={() => setI((i + n - 1) % n)} />
      <button type="button" aria-label="Next" className={`${styles.arrow} ${styles.arrowR}`} style={{ top: arrowTop }} onClick={() => setI((i + 1) % n)} />
      <div key={i} ref={slideRef} style={{ top }} className={`${styles.slide} ${styles['slide_' + s.layout]} ${s.wide ? styles.wide : ''}`}>
        {s.wide && <h2 className={styles.slideTitle + ' ' + styles.titleWide}>{s.title}</h2>}
        {s.layout === 'right' ? (
          <div className={styles.slideSide}>
            <div className={styles.slideImg} style={s.imgH ? { height: s.imgH } : undefined}>
              <Image className={styles.contain} src={src} alt={s.title} fill sizes="300px" />
            </div>
            {s.poem2 && <p className={styles.poem}>{s.poem2}</p>}
          </div>
        ) : (
          <div className={styles.slideImg}>
            <Image className={styles.contain} src={src} alt={s.title} fill sizes="300px" />
          </div>
        )}
        <div className={styles.slideText}>
          {!s.wide && <h2 className={styles.slideTitle}>{s.title}</h2>}
          {s.poem2 && (s.layout === 'top' || s.layout === 'bottom') ? (
            <div className={styles.cols}>
              <p className={styles.poem}>{s.poem}</p>
              <p className={styles.poem}>{s.poem2}</p>
            </div>
          ) : (
            <p className={styles.poem}>{s.poem ?? 'Poem coming soon…'}</p>
          )}
        </div>
      </div>
    </>
  );
}

const DESIGN_X0 = 657.75;
const DESIGN_W = 1420 - DESIGN_X0;

function useFit() {
  const [fit, setFit] = useState({ s: 1, cx: -DESIGN_X0, left: 300 });

  useEffect(() => {
    const calc = () => {
      const w = document.documentElement.clientWidth;
      const wide = w >= 1024;
      const pad = wide ? 24 : 16;
      const left = Math.min(400, Math.max(250, w * 0.26));
      const colW = wide ? w - pad * 2 - left - 24 : w - pad * 2;
      const s = colW / DESIGN_W;
      setFit({ s, cx: -DESIGN_X0 * s, left });
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  return fit;
}

export default function CultureArtsPage() {
  const [tab, setTab] = useState<Tab>('intro');
  const [subKey, setSubKey] = useState<string | null>(null);
  const fit = useFit();

  const toggleTab = (id: Tab) => { setTab((cur) => (cur === id ? 'intro' : id)); setSubKey(null); };
  const toggleSub = (k: string) => setSubKey((cur) => (cur === k ? null : k));

  const contentRef = useRef<HTMLDivElement>(null);
  const [bottom, setBottom] = useState(0);
  const [slideH, setSlideH] = useState(540);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const measure = () => {
      let b = 0;
      Array.from(el.children).forEach((n) => {
        const h = n as HTMLElement;
        b = Math.max(b, h.offsetTop + h.offsetHeight);
      });
      setBottom(b);
    };
    const ro = new ResizeObserver(measure);
    const observe = () => {
      ro.disconnect();
      Array.from(el.children).forEach((n) => ro.observe(n));
      measure();
    };
    const mo = new MutationObserver(observe);
    mo.observe(el, { childList: true });
    observe();
    document.fonts?.ready.then(measure);
    return () => { ro.disconnect(); mo.disconnect(); };
  }, [tab, subKey]);

  const sub = tab === 'pantheon' ? SUBS.find((s) => s.key === subKey) ?? null : null;
  const C = sub ? null : CONTENT[tab];

  let panel: PanelRect;
  let slideTop = 0;
  if (sub) {
    const h = Math.max(VIEWER_PANEL.height, slideH + 2 * VIEWER_PAD);
    panel = { ...VIEWER_PANEL, height: h };
    slideTop = VIEWER_PANEL.top + (h - slideH) / 2;
  } else {
    const base = PANEL[tab];
    const fitted = bottom + EXTRA - base.top;
    const h = SHRINK.includes(tab) && bottom > 0 ? fitted : Math.max(base.height, fitted);
    panel = { ...base, height: h };
  }
  const pageH = Math.max(HEIGHT[tab], panel.top + panel.height + 27);
  const arrowTop = panel.top + panel.height / 2 - 11;

  const vars = {
    height: pageH,
    '--h': pageH,
    '--s': fit.s,
    '--cx': `${fit.cx}px`,
    '--left': `${fit.left}px`,
  } as CSSProperties;

  return (
    <main className={`${styles.page} ${rubik.variable} ${nexa.variable}`} style={vars}>
      <Image className={styles.bg} src="/image/background.png" alt="" fill sizes="1440px" priority />

      <div className={styles.stage}>
        <div className={styles.canvas}>
          <div className={`${styles.glass} ${styles.panel} ${sub ? styles.dark : ''}`} style={panel} />

          <div key={tab + (sub?.key ?? '')} ref={contentRef} className={styles.content}>
            {C?.texts.map((t) => {
              const style = { left: t.l, top: t.t, width: t.w };
              const cls = `${styles.text} ${t.center ? styles.center : ''}`;
              return t.href ? (
                <a key={t.text} className={`${cls} ${styles.caption}`} style={style} href={t.href} target="_blank" rel="noreferrer">{t.text}</a>
              ) : (
                <p key={t.text} className={cls} style={style}>{t.text}</p>
              );
            })}

            {C?.pics.map((p) => (
              <div key={p.src} className={`${styles.pic} ${p.round ? styles.round : ''}`} style={{ left: p.l, top: p.t, width: p.w, height: p.h, zIndex: p.z ?? 1 }}>
                <Image className={p.round ? styles.cover : styles.contain} src={p.src} alt="" fill sizes={`${Math.round(p.w)}px`} />
              </div>
            ))}

            {C?.rings.map((r) => (
              <div key={r.src} className={`${styles.glass} ${styles.ring}`} style={{ left: r.l, top: r.t, width: r.d, height: r.d, zIndex: r.z ?? 2 }}>
                <div className={styles.ringInner}>
                  <Image className={styles.cover} src={r.src} alt="" fill sizes={`${Math.round(r.d)}px`} />
                </div>
              </div>
            ))}

            {tab === 'essay' && <Strip srcs={ESSAY_IMGS} top={ESSAY_STRIP_TOP} />}

            {tab === 'concert' && <Slides srcs={CONCERT_SLIDES} box={CONCERT_BOX} interval={CONCERT_INTERVAL} />}

            {tab === 'incense' && (
              <>
                <iframe
                  className={styles.video}
                  src="https://www.youtube.com/embed/MFxD5XiWAeY"
                  title="Quang Phu Cau - the story of a traditional incense village"
                  loading="lazy"
                  allowFullScreen
                />
                <h3 className={styles.recapTitle}>My Recap Collection</h3>
                <div className={styles.recap}>
                  {RECAP_IMGS.map((s) => (
                    <div key={s} className={styles.recapItem}>
                      <Image className={styles.cover} src={s} alt="" fill sizes="320px" />
                    </div>
                  ))}
                </div>
              </>
            )}

            {sub && <Viewer key={sub.key} sub={sub} top={slideTop} arrowTop={arrowTop} onHeight={setSlideH} />}
          </div>

          {tab === 'pantheon' &&
            SUBS.map((s) => (
              <button
                key={s.key}
                type="button"
                className={`${styles.sub} ${subKey === s.key ? styles.subOn : ''}`}
                style={{ left: s.left, top: s.top }}
                onClick={() => toggleSub(s.key)}
              >
                {s.label}
              </button>
            ))}
        </div>
      </div>

      <div className={`${styles.glass} ${styles.crumb}`}>
        <Link href="/">Homepage</Link>
        <span>&gt;</span>
        <span>Culture and Arts</span>
      </div>

      <nav className={styles.nav}>
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} className={n.active ? styles.navActive : undefined}>{n.label}</Link>
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