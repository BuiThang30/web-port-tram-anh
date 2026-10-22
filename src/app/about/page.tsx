'use client';

import { useEffect, useState } from 'react';
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

type Tab = 'intro' | 'wanderer' | 'food' | 'spiritual';

/* đổi số thiết kế (px trên khung 1440) thành giá trị co giãn theo màn hình */
const u = (n: number) => `calc(${n} * var(--u))`;

/* ====== NỘI DUNG ====== */
const INTRO_TITLE =
  '“Mom, I think I can never find a word that can describe myself accurately”';

const INTRO_BODY =
  'I used to whisper to Mom in disappointment, as I simply did not know how to define myself. As a child, I just wanted to have it all like the role models on my Facebook feed, yet nearing the end of my twelve school years has finally led me to my own Tram Anh. Starting out as a tiny fish in a vast ocean, I am now proudly growing into a brave shark that still embraces the genuine colour of myself and what I desire to become - a person who can balance between empathy and courage.';

const WANDERER_1 =
  'Far from being isolated or lonely, I wander on my own for a much simpler reason: this “weird” habit gives me a pocket of peace to unwind and observe society. Loud bus horns and street vendors’ shouts once scared me because I thought peace required silence.';

const WANDERER_2 =
  'Yet, as time passed, I have realized that real peace blossoms within us anywhere we stand. My first ten-kilometer walk alone at seventeen has led me from bustling Hoan Kiem Lake, past serene West Lake, and straight to my family’s cozy apartment. Since that day, those solitary walks have become my compass, nurturing  my love for Hanoi and the adventurer’s blood in my veins.';

const FOOD_1 =
  'My story began in grade eight with a piping hot bowl of Hue beef noodles before extra English class. The vendor usually gave me extra pork knuckle and gently said, “Eat up, kids! You need fuel for studying!”. Time has made me fall deeply for the fermented shrimp paste, the tender trotter, and hardest with her warmth, which inspired my dream to bring this brimming bowl and a thousand Vietnamese dishes to less fortunate people worldwide. Above all, I hope the taste of my growing-up journey will soothe the souls that have yet to be fairly loved.';

const SPIRIT_1 =
  'Since I was five, I have carried a deep belief in Buddhism that grew from Tet pagoda visits with my parents into my own unscheduled habit whenever I await SAT and IELTS scores or unwind after exams. I also hold a strong faith in the law of cause and effect, which is mainly why I am still learning to restrain my anger, accept human differences, and practice empathy. Being spiritual never means being superstitious or unrealistic, as it has calmed my spirit and made me a more thoughtful, compassionate shark than ever.';


/* ====== VỊ TRÍ (Figma x 0.75) ====== */
const PANEL: Record<Tab, { left: number; top: number; width: number; height: number }> = {
  intro:     { left: 477.75, top: 24.75, width: 921.75, height: 752.25 },
  wanderer:  { left: 468,    top: 62.25, width: 921,    height: 675 },
  food:      { left: 468.75, top: 68.25, width: 920.25, height: 669 },
  spiritual: { left: 482.25, top: 67.5,  width: 921,    height: 682.5 },
};

/*
  Ảnh tròn có viền kính.
  srcs: 1 ảnh = đứng yên, nhiều ảnh = tự thay phiên (crossfade).
  d: đường kính vòng ngoài (gồm viền kính). interval: mỗi ảnh hiện bao nhiêu ms.
*/
type Circle = { srcs: string[]; left: number; top: number; d: number; interval?: number };

const CIRCLES: Record<Tab, Circle[]> = {
  intro: [
    { srcs: ['/image/about/baby.png'],        left: 519,     top: 379.5,  d: 153.3 },
    { srcs: ['/image/about/incense-hat.png'], left: 738.75,  top: 294,    d: 218.1 },
    { srcs: ['/image/about/carousel.png'],    left: 1092.75, top: 259.5,  d: 267.5 },
    { srcs: ['/image/about/graduation.png'],  left: 904.5,   top: 506.25, d: 256.3 },
    { srcs: ['/image/about/writing.png'],     left: 636.75,  top: 552,    d: 185.2 },
  ],
  wanderer: [
    {
      // khung giữa-trái: 4 ảnh cột phải trong file Figma
      srcs: [
        '/image/about/wanderer/rock.png',
        '/image/about/wanderer/hills.png',
        '/image/about/wanderer/town.png',
        '/image/about/wanderer/hue.png',
      ],
      left: 552, top: 294.75, d: 331.5, interval: 4200,
    },
    {
      // khung trên-phải: 4 ảnh cột trái trong file Figma
      srcs: [
        '/image/about/wanderer/incense.png',
        '/image/about/wanderer/viewpoint.png',
        '/image/about/wanderer/forest.png',
        '/image/about/wanderer/kayak.png',
      ],
      left: 990, top: 88.5, d: 332.25, interval: 3500,
    },
  ],
  food: [],
  spiritual: [],
};

// Ảnh mục Food: xuất từ Figma (hình không vuông hẳn) -> đặt đúng khung, không cắt
const FOODS = [
  { src: '/image/about/food/food-1.png', left: 494.25, top: 98.25,  w: 435,    h: 487.5 },
  { src: '/image/about/food/food-2.png', left: 947.25, top: 102,    w: 416.25, h: 215.25 },
  { src: '/image/about/food/food-3.png', left: 947.25, top: 330.75, w: 416.25, h: 225 },
];

// Ảnh chữ nhật mục Spiritual
const RECTS = [
  { src: '/image/about/spirit-cave.png',     left: 511.5,  top: 93.75,  w: 208.5,  h: 277.5 },
  { src: '/image/about/spirit-corridor.png', left: 733.5,  top: 93.75,  w: 195,    h: 277.5 },
  { src: '/image/about/spirit-pray.png',     left: 511.5,  top: 389.25, w: 417,    h: 158.25 },
  { src: '/image/about/spirit-roof.png',     left: 942.75, top: 93.75,  w: 422.25, h: 453.75 },
];

const TEXTS: Record<Tab, { left: number; top: number; width: number; text: string }[]> = {
  intro: [{ left: 511.5, top: 128.25, width: 853.5, text: INTRO_BODY }],
  wanderer: [
    { left: 514.5,  top: 91.5,   width: 416.25, text: WANDERER_1 },
    { left: 947.25, top: 474.75, width: 417.75, text: WANDERER_2 },
  ],
  food: [
    { left: 511.5,  top: 594.75, width: 853.5,    text: FOOD_1 },
  ],
  spiritual: [
    { left: 511.5, top: 581.25, width: 853.5,    text: SPIRIT_1 },
  ],
};

const PILLS: { id: Exclude<Tab, 'intro'>; label: string }[] = [
  { id: 'wanderer', label: 'A solitary wanderer' },
  { id: 'food', label: 'A food enthusiast' },
  { id: 'spiritual', label: 'A spiritual believer' },
];

const NAV = [
  { href: '/about', label: 'About me', active: true },
  { href: '/culture-arts', label: 'Culture and Arts' },
  { href: '/education-psychology', label: 'Education and Psychology' },
  { href: '/economics', label: 'Economics' },
  { href: '/community-service', label: 'Community Service' },
];

/* ====== Slideshow trong 1 khung tròn: các ảnh xếp chồng, đổi opacity ====== */
function Slides({ srcs, d, interval = 3500 }: { srcs: string[]; d: number; interval?: number }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (srcs.length < 2) return;
    const id = setInterval(() => setCurrent((n) => (n + 1) % srcs.length), interval);
    return () => clearInterval(id);
  }, [srcs.length, interval]);

  return (
    <>
      {srcs.map((s, i) => (
        <Image
          key={s}
          className={`${styles.cover} ${styles.slide} ${i === current ? styles.slideOn : ''}`}
          src={s}
          alt=""
          fill
          sizes="(max-width: 1199px) 300px, 25vw"
        />
      ))}
    </>
  );
}

export default function AboutPage() {
  const [tab, setTab] = useState<Tab>('intro');

  // bấm lại nút đang chọn -> quay về màn giới thiệu
  const toggle = (id: Tab) => setTab((cur) => (cur === id ? 'intro' : id));

  const p = PANEL[tab];
  const circles = CIRCLES[tab];

  return (
    <main className={`${styles.about} ${rubik.variable} ${nexa.variable}`}>
      <Image className={styles.bg} src="/image/background.png" alt="" fill sizes="100vw" priority />

      {/* .stage = khung thiết kế 1440x810, tự scale theo màn hình và căn giữa */}
      <div className={styles.stage}>
        {/* Khung kính bên phải */}
        <div
          className={`${styles.glass} ${styles.panel}`}
          style={{ left: u(p.left), top: u(p.top), width: u(p.width), height: u(p.height) }}
        />

        {/* Nội dung đổi theo tab (key để chạy lại hiệu ứng fade) */}
        <div key={tab} className={styles.content}>
          {tab === 'intro' && <h1 className={styles.title}>{INTRO_TITLE}</h1>}

          {TEXTS[tab].map((t) => (
            <p
              key={t.left + '-' + t.top}
              className={styles.text}
              style={{ left: u(t.left), top: u(t.top), width: u(t.width) }}
            >
              {t.text}
            </p>
          ))}

          {circles.length > 0 && (
            <div className={`${styles.group} ${tab === 'wanderer' ? styles.big : ''}`}>
              {circles.map((c) => (
                <div
                  key={c.srcs[0]}
                  className={`${styles.glass} ${styles.ring}`}
                  style={{ left: u(c.left), top: u(c.top), width: u(c.d), height: u(c.d) }}
                >
                  <div className={styles.ringInner}>
                    <Slides srcs={c.srcs} d={c.d} interval={c.interval} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === 'food' && (
            <div className={`${styles.group} ${styles.foods}`}>
              {FOODS.map((f) => (
                <Image
                  key={f.src}
                  className={styles.food}
                  src={f.src}
                  alt=""
                  width={Math.round(f.w * 2)}
                  height={Math.round(f.h * 2)}
                  sizes="(max-width: 1199px) 460px, 35vw"
                  style={{ left: u(f.left), top: u(f.top), width: u(f.w), height: u(f.h) }}
                />
              ))}
            </div>
          )}

          {tab === 'spiritual' && (
            <div className={`${styles.group} ${styles.rects}`}>
              {RECTS.map((r) => (
                <div
                  key={r.src}
                  className={styles.rect}
                  style={{ left: u(r.left), top: u(r.top), width: u(r.w), height: u(r.h) }}
                >
                  <Image className={styles.cover} src={r.src} alt="" fill sizes="(max-width: 1199px) 50vw, 30vw" />
                </div>
              ))}
            </div>
          )}

          {tab === 'intro' && (
            <Image className={styles.fish} src="/image/fish-about.png" alt="" width={205} height={235} />
          )}
        </div>

        {/* Breadcrumb */}
        <div className={`${styles.glass} ${styles.crumb}`}>
          <Link href="/">Homepage</Link>
          <span>&gt;</span>
          <span>About me</span>
        </div>

        {/* Menu trái */}
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

        {/* 3 nút chuyển nội dung */}
        <div className={styles.pills}>
          {PILLS.map((pl) => (
            <button
              key={pl.id}
              type="button"
              aria-pressed={tab === pl.id}
              className={`${styles.glass} ${styles.pill} ${tab === pl.id ? styles.pillActive : ''}`}
              onClick={() => toggle(pl.id)}
            >
              {pl.label}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}