'use client';

import { useEffect, useRef, useState } from 'react';
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

const img = (p: string) => `/image/culture/${p}.png`;

/* ====== NỘI DUNG ====== */
const INTRO = `I have had the honor to brush against the word “culture” from a very young age when I was living with my beloved grandparents. Back then it was nothing more than a red, wooden doll engraved with some traditional patterns that they bought me from their graduate studies in Russia or the bright red set of “Ao yem” I wore for a birthday photoshoot. As time passed by, I have been nurtured with a deep love for the concepts of “culture” and “arts”, which later became my compass for realizing that these words extend far beyond customs. Those precious childhood memories ultimately guide my hands to build my own projects with the hope that they will become distinctive milestones along my personal journey and also a peaceful stop for those who are exploring the world - where any wandering souls like me can return to roots and their homelands.`;

const PRESS_1 = `From the start of 2026, I have had the valuable opportunity to work with the Agriculture and Environment Newspaper as well as the Voice of Vietnam Newspaper - two prestigious press agencies in Vietnam that are specialized in national social problems, environmental issues and up-to-date economic news.`;

const PRESS_2 = `Through communicating with experts in sociology and professional journalists that have had more than 15 years of experience, I have learned to use literary language as a tool to convey valuable insights into culture and economics while maintaining impartiality and accuracy in journalism. But what stays the longest after all is probably the moral conduct, that a reporter must serve the people and reflect on the exact social state instead of suppressing the disadvantaged in society.`;

const ESSAY = `For a long time, I have been holding the belief that reading and writing culture is the representative of a nation’s cultural heritage. That is exactly what motivates me to build up this photo essay: to explore how Vietnamese people preserve their culture within each fragile word they write on page or read aloud. Traveling from the Vietnam Museum of Ethnology, through Hanoi Museum, Dinh Le bookstreet, and further to Linh Ung Non Nuoc Pagoda in Da Nang and Thien Mu temple in Hue, my adventurous spirit has been entirely satisfied with overwhelming knowledge about culture, national heritage and above all, a profound sense of pride and patriotism. I hope while reading the essay I wrote and poring over 80+ pictures I took with my iPhone 11, people can slow down to admire Vietnam’s 1000 - year history and ultimately hold the brush more firmly each day to develop my beloved hometown’s cultural foundation.`;

const INCENSE = `As a spiritual believer, I have had the chance to touch the incense stick from a very young age - whether at my family's altar room, during Tet holiday or during my solo trip to Quan Thanh Pagoda to pray for my SAT score. I used to wonder a lot about the magical scent of incense, which holds immense power that can wind down my soul and soothe my nerves. Eventually, at the age of 17, I had the chance to visit the root of those simple incense sticks - my parental hometown Ung Hoa, Ha Noi. I wish to promote this traditional village to people worldwide and preserve the long-standing custom to the young generation, including me. That is why my reportage in which I collaborated with the village headman and famous artisans was produced and the skill-sharing workshop with over 70 students was organized. Through that experience, I have talked a lot, learned a lot, and most importantly, grown up a lot during my journey towards the origin.`;

const PANTHEON_1 = `As a spiritual believer, I love to explore how people across different creeds use graceful lines carefully painted on paper to express their worship. Driven by this burning curiosity, I decided to set up this project by collecting photos of traditional worship paintings on my own and composing poems of both traditional and modern, contemporary types to analyze them respectively.`;

const PANTHEON_2 = `I hope my effort can disseminate traditional knowledge to others who are unable to travel far to admire those beautiful paintings and ultimately cultivate a deep love for our homeland’s religious diversity.`;

const CONCERT_1 = `Accompanying with Aria Project, a music initiative founded by high school students in Ha Noi,  throughout the second season, I have had the opportunity to contribute positively to Vietnamese cultural beauty by participating in the “Viet Nam tinh hoa” concert. During that experience as the head of media and English Master of ceremonies, I have learned a lot, especially about how music can make considerable meaningful changes to the society as a whole.`;

const CONCERT_2 = `But above all, what stays longest is my debut as the MC for an event - the first time I made a mistake in public, and how I handled my embarrassment to continue the performance, and by that I have grown up a lot - ready to welcome the mistake and allow myself to stumble sometimes just to grow stronger.`;

/* ====== VỊ TRÍ (Figma x 0.75) ====== */
const VIEWER_PAD = 60; // khoảng trống trên/dưới slide trong khung kính
const EXTRA = 28; // chừa dưới nội dung khi khung tự kéo dài
const HEIGHT: Record<Tab, number> = {
  intro: 810, press: 987, essay: 745.5, incense: 1559, pantheon: 810, concert: 810,
};

type PanelRect = { left: number; top: number; width: number; height: number };
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
    // 1 ảnh xuất sẵn từ Figma (đã gồm collage + 5 vòng tròn) -> chỉ cần đặt vào khung, không xếp riêng từng ảnh
    pics: [{ src: img('intro/collage'), l: 657.75, t: 264, w: 762, h: 477 }],
    rings: [],
  },
  press: {
    texts: [
      // href: thay bằng link bài báo thật
      { l: 688.5, t: 361.5, w: 693, center: true, href: 'https://nongnghiepmoitruong.vn/ban-tinh-ca-le-hoi-va-hoa-tren-cao-nguyen-da-d799027.html', text: 'The Festival Love Song and Flowers on the Rocky Plateau' },
      { l: 717.75, t: 399, w: 619.5, text: PRESS_1 },
      { l: 895.5, t: 767.25, w: 279, center: true, href: 'https://vov.vn/thi-truong/gia-bac-hom-nay-93-gia-bac-trong-nuoc-giam-trong-phien-dau-tuan-post1274172.vov', text: 'VOV | Silver prices today, March 9: Domestic silver prices fell at the start of the week.' },
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
    texts: [
      { l: 729.75, t: 156.5, w: 417.75, text: PANTHEON_1 },
      { l: 947.25, t: 558.4, w: 385.5,  text: PANTHEON_2 },
    ],
    pics: [
      { src: img('pantheon/intro-1'), l: 729.75,  t: 314.25, w: 271.5, h: 203.25, round: true },
      { src: img('pantheon/intro-2'), l: 1008,    t: 314.25, w: 153,   h: 203.25, round: true },
      { src: img('pantheon/intro-3'), l: 1167.75, t: 314.25, w: 197.25, h: 203.25, round: true },
    ],
    rings: [
      { src: img('pantheon/intro-ring-1'), l: 1177.5, t: 174.75, d: 160.5 },
      { src: img('pantheon/intro-ring-2'), l: 752.25, t: 488.25, d: 160.5 },
    ],
  },
  concert: {
    texts: [
      { l: 711,    t: 414.75, w: 411.75, text: CONCERT_1 },
      { l: 947.25, t: 646.9,  w: 415.5,  text: CONCERT_2 },
    ],
    pics: [], // ảnh trên cùng là slideshow (xem CONCERT_SLIDES)
    rings: [
      { src: img('concert/ring-1'), l: 1148.25, t: 421.5, d: 193.5 },
      { src: img('concert/ring-2'), l: 729.75,  t: 577.5, d: 178.5 },
    ],
  },
};

/* Concert: 4 ảnh trên cùng tự đổi qua lại (crossfade) -> public/image/culture/concert/poster-1..4.png */
type Box = { l: number; t: number; w: number; h: number };
const CONCERT_SLIDES = [1, 2, 3, 4].map((n) => img(`concert/poster-${n}`));
const CONCERT_BOX: Box = { l: 790.5, t: 61.5, w: 489, h: 325.5 };
const CONCERT_INTERVAL = 4000; // ms mỗi ảnh

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

const ESSAY_IMGS = Array.from({ length: 6 }, (_, i) => img(`essay/essay-${i + 1}`)); // đổi số lượng ảnh ở đây
const RECAP_IMGS = Array.from({ length: 6 }, (_, i) => img(`incense/recap-${i + 1}`));

/* ====== Khung ảnh tự đổi qua lại (crossfade) ====== */
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
        if (pos >= el.scrollWidth / 2) pos -= el.scrollWidth / 2; // lặp vô hạn (danh sách nhân đôi)
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

/* ====== Slide tranh thờ (Patheon): mũi tên trái/phải ====== */
function Viewer({ sub, top, arrowTop, onHeight }: { sub: Sub; top: number; arrowTop: number; onHeight: (h: number) => void }) {
  const [i, setI] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  // đo chiều cao slide hiện tại -> cha căn giữa slide trong khung kính
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
          // layout right: cột phải = ảnh + (poem2 nằm dưới ảnh)
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

export default function CultureArtsPage() {
  const [tab, setTab] = useState<Tab>('intro');
  const [subKey, setSubKey] = useState<string | null>(null);

  const toggleTab = (id: Tab) => { setTab((cur) => (cur === id ? 'intro' : id)); setSubKey(null); };
  const toggleSub = (k: string) => setSubKey((cur) => (cur === k ? null : k));

  // Đo đáy của nội dung (chữ, ảnh, slide) -> khung kính và trang tự kéo dài theo
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
    const mo = new MutationObserver(observe); // slide đổi -> đo lại
    mo.observe(el, { childList: true });
    observe();
    document.fonts?.ready.then(measure); // đo lại khi font nạp xong
    return () => { ro.disconnect(); mo.disconnect(); };
  }, [tab, subKey]);

  const sub = tab === 'pantheon' ? SUBS.find((s) => s.key === subKey) ?? null : null;
  const C = sub ? null : CONTENT[tab];
  // Màn xem slide: khung cao tối thiểu 675, slide luôn nằm GIỮA khung (cao hơn thì khung tự kéo dài)
  let panel: PanelRect;
  let slideTop = 0;
  if (sub) {
    const h = Math.max(VIEWER_PANEL.height, slideH + 2 * VIEWER_PAD);
    panel = { ...VIEWER_PANEL, height: h };
    slideTop = VIEWER_PANEL.top + (h - slideH) / 2;
  } else {
    const base = PANEL[tab];
    panel = { ...base, height: Math.max(base.height, bottom + EXTRA - base.top) };
  }
  const pageH = Math.max(HEIGHT[tab], panel.top + panel.height + 27);
  const arrowTop = panel.top + panel.height / 2 - 11;

  return (
    <main className={`${styles.page} ${rubik.variable} ${nexa.variable}`} style={{ height: pageH }}>
      <Image className={styles.bg} src="/image/background.png" alt="" fill sizes="1440px" priority />

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

        {tab === 'essay' && <Strip srcs={ESSAY_IMGS} />}

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

      {/* Menu con của Patheon */}
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