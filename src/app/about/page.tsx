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

/* ====== NỘI DUNG ====== */
const INTRO_TITLE =
  '“Mom, I think I can never find a word that can describe myself accurately”';

const INTRO_BODY =
  'There used to be countless times I whispered to my mother in disappointment as I simply did not know how to define myself. As a child, I honestly wanted to pile every glorious adjective upon my shoulders, encompass it all and become the role model frequently appearing on my Facebook feed. Yet, I have finally found my own Tram Anh as I am gradually approaching the final stretch of my twelve years of formal education. Starting out as a tiny fish swimming around in a vast ocean, searching for a warm flow of water, I am now proudly growing into a brave shark that still embraces the genuine colour of myself and what I desire to become - a person who can balance between empathy and courage.';

const WANDERER_1 =
  'Far from being isolated, being a lonely introvert or anything people may think when it comes to traveling alone, I enjoy wandering on my own just because of something much simpler: This “sounds weird” habit gives me a pocket of peace to unwind and the space to observe how society functions around me. I used to be scared of the shouts of street vendors and the deafening blare of bus horns , since back then, I believed true peace could only be found in silence.';

const WANDERER_2 =
  'Yet, as time passed by, I have realized that real peace will blossom within us and stay firm no matter where we stand. Covering more than 10 kilometers, my first trip at the age of 17 has taken me from the buzzling banks of Hoan Kiem lake, through the peaceful sanctuary of West Lake and lastly to my family\'s cozy apartment, entirely on foot, and alone. I have grown up in that way, in the most peaceful yet experienceful manner. And at the same time, my love for Ha Noi and the ‘blood of adventurers’ within my veins has gradually grown stronger, becoming my passion, my spirit, and the compass that directs my life.';

const FOOD_1 =
  'Everything started from a piping hot bowl of Hue beef noodles that I wolfed down before English extra classes when I was in grade 8. The vendor usually gave me an extra piece of pork knuckle for each bowl, gently telling me “Just eat as much as possible, kids! You need the fuel for all that rigorous studying!”';

const FOOD_2 =
  'I want to bring the brimming bowl of Hue beef noodles and one thousand other Vietnamese dishes to other countries to help less fortunate people worldwide. And above all, I hope the taste of my growing-up journey will soothe the souls of those that have yet to be fairly loved.';

const SPIRIT_1 =
  'I have been ingrained with a deep - seated belief in Buddhism since I was just a child at the age of 5. From being taken to the pagodas every Tet holiday occasion by my parents, I now usually visit those sacred places on my own with no rigid schedule, whether while waiting for the SAT scores, IELTS scores or simply to let my hair down after the end-of-semester examinations.';

const SPIRIT_2 =
  'I also hold a strong faith in the law of cause and effect, which is mainly why I am still learning to restrain my anger, to accept the difference between individuals in society, and to practice my empathy as well. While being a spiritual believer does not necessarily mean being superstitious or unrealistic, it has actually soothed my disposition and helped me become a more thoughtful, compassionate shark than ever.';

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
    { left: 511.5,  top: 591.75, width: 417,    text: FOOD_1 },
    { left: 947.25, top: 591.75, width: 416.25, text: FOOD_2 },
  ],
  spiritual: [
    { left: 511.5, top: 581.25, width: 417,    text: SPIRIT_1 },
    { left: 948,   top: 581.25, width: 417.75, text: SPIRIT_2 },
  ],
};

const PILLS: { id: Exclude<Tab, 'intro'>; label: string }[] = [
  { id: 'wanderer', label: 'A solitary wanderer' },
  { id: 'food', label: 'A food enthusiast' },
  { id: 'spiritual', label: 'A spiritual believer' },
];

const NAV = [
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
          sizes={`${Math.round(d)}px`}
        />
      ))}
    </>
  );
}

export default function AboutPage() {
  const [tab, setTab] = useState<Tab>('intro');

  // bấm lại nút đang chọn -> quay về màn giới thiệu
  const toggle = (id: Tab) => setTab((cur) => (cur === id ? 'intro' : id));

  return (
    <main className={`${styles.about} ${rubik.variable} ${nexa.variable}`}>
      <Image className={styles.bg} src="/image/background.png" alt="" fill sizes="1440px" priority />

      {/* Khung kính bên phải */}
      <div className={`${styles.glass} ${styles.panel}`} style={PANEL[tab]} />

      {/* Nội dung đổi theo tab (key để chạy lại hiệu ứng fade) */}
      <div key={tab} className={styles.content}>
        {tab === 'intro' && <h1 className={styles.title}>{INTRO_TITLE}</h1>}

        {TEXTS[tab].map((t) => (
          <p key={t.left + '-' + t.top} className={styles.text} style={{ left: t.left, top: t.top, width: t.width }}>
            {t.text}
          </p>
        ))}

        {CIRCLES[tab].map((c) => (
          <div
            key={c.srcs[0]}
            className={`${styles.glass} ${styles.ring}`}
            style={{ left: c.left, top: c.top, width: c.d, height: c.d }}
          >
            <div className={styles.ringInner}>
              <Slides srcs={c.srcs} d={c.d} interval={c.interval} />
            </div>
          </div>
        ))}

        {tab === 'food' &&
          FOODS.map((f) => (
            <Image
              key={f.src}
              className={styles.food}
              src={f.src}
              alt=""
              width={Math.round(f.w * 2)}
              height={Math.round(f.h * 2)}
              sizes={`${Math.round(f.w)}px`}
              style={{ left: f.left, top: f.top, width: f.w, height: f.h }}
            />
          ))}

        {tab === 'spiritual' &&
          RECTS.map((r) => (
            <div key={r.src} className={styles.rect} style={{ left: r.left, top: r.top, width: r.w, height: r.h }}>
              <Image className={styles.cover} src={r.src} alt="" fill sizes={`${Math.round(r.w)}px`} />
            </div>
          ))}

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
        <a className={styles.navActive} href="/about">About me</a>
        {NAV.map((n) => (
          <Link key={n.href} href={n.href}>{n.label}</Link>
        ))}
      </nav>

      {/* 3 nút chuyển nội dung */}
      <div className={styles.pills}>
        {PILLS.map((p) => (
          <button
            key={p.id}
            type="button"
            aria-pressed={tab === p.id}
            className={`${styles.glass} ${styles.pill} ${tab === p.id ? styles.pillActive : ''}`}
            onClick={() => toggle(p.id)}
          >
            {p.label}
          </button>
        ))}
      </div>
    </main>
  );
}