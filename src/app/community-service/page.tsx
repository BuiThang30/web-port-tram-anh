'use client';

import { useState, type CSSProperties } from 'react';
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

type Tab = 'intro' | 'frames' | 'voice' | 'kitchen';
type Txt = { l: number; t: number; w: number; text: string };
type Pic = { src: string; l: number; t: number; w: number; h: number; free?: boolean };
type Ring = { src: string; l: number; t: number; d: number };
type Content = { texts: Txt[]; pics: Pic[]; rings: Ring[] };
type PanelRect = { left: number; top: number; width: number; height: number };

/* đổi số thiết kế (px trên khung 1440) thành giá trị co giãn theo màn hình */
const u = (n: number) => `calc(${n} * var(--u))`;

/* --o: thứ tự hiển thị trên mobile, lấy theo toạ độ top của thiết kế */
const ord = (t: number, isText = false): CSSProperties =>
  ({ '--o': Math.round(isText ? t - 5 : t) }) as CSSProperties;

const img = (p: string) => `/image/community/${p}.png`;

/* ====== NỘI DUNG ====== */
const INTRO = `At fifteen, I had encountered hundreds of struggling lives completely blind to the quiet injustices around me, until growing up taught me to stand beside those who had been silenced by stereotypes. As a shark who is still learning to weave toughness into compassion, I am striving to help vulnerable groups worldwide. Although my contribution is still insignificant when compared to the general problems societies may face, I believe that my effort will one day be paid off.`;

const FRAMES_1 = `Since eleventh grade, my Instagram blog has used stories and visuals to unpack emerging social issues, yet I quickly realized that advocacy feels hollow when it only lives on a screen.`;

const FRAMES_2 = `I began handcrafting and selling hundreds of Dó paper bookmarks and traditional Vietnamese brocade scented sachets through the page, which raised 7 million VND to bring over 70 gift sets of books, milk, and nutritious food directly to child patients at the National Institute of Hematology and Blood Transfusion (NIHBT).`;

const VOICE = `Leading Voice of Us Season 2 as Deputy Head of Organization and Head of Content has given me the space to champion equality for women, the LGBTQ+ community, and marginalized voices. Our collaboration with Lotte Mall West Lake for the "Chạm" handmade workshop also raised 12 million VND for hundreds of vulnerable children at Thanh Tam Orphanage, and it turned my longtime wish to uplift others into real leadership.`;

const KITCHEN_1 = `Wandering through countless street stalls across Vietnam taught my foodie heart a simple truth: just as every ingredient matters in a dish, the beauty of our culinary heritage belongs to everyone regardless of their status, income, or hometown. `;

const KITCHEN_2 = `That belief inspired me to become the head chef of a constantly "moving" kitchen, where I cooked and delivered over 150 portions of regional specialties to bring the warm nostalgia of home to migrant workers across Hanoi.`;

/* ====== VỊ TRÍ (Figma x 0.75) ====== */
const HEIGHT: Record<Tab, number> = { intro: 810, frames: 810, kitchen: 810, voice: 1610 };

const PANEL: Record<Tab, PanelRect> = {
  intro:   { left: 493.5, top: 33,    width: 888, height: 752.25 },
  frames:  { left: 493.5, top: 33,    width: 888, height: 634.5 },
  kitchen: { left: 493.5, top: 33,    width: 888, height: 538.5 },
  voice:   { left: 493.5, top: 32.25, width: 888, height: 1542 },
};

const CONTENT: Record<Tab, Content> = {
  intro: {
    texts: [{ l: 530.25, t: 63.75, w: 813, text: INTRO }],
    pics: [{ src: img('intro/collage'), l: 530.25, t: 192.75, w: 816, h: 579.75, free: true }],
    rings: [],
  },
  frames: {
    texts: [
      { l: 511.5,  t: 59.25,  w: 414.75, text: FRAMES_1 },
      { l: 947.25, t: 512.25, w: 410.25, text: FRAMES_2 },
    ],
    pics: [
      { src: img('frames/photo-1'), l: 511.5,  t: 162.75, w: 204,   h: 369.75 },
      { src: img('frames/photo-2'), l: 722.25, t: 165,    w: 206.25, h: 366 },
      { src: img('frames/photo-3'), l: 947.25, t: 57.75,  w: 199.5,  h: 266.25 },
      { src: img('frames/photo-4'), l: 1165.5, t: 57.75,  w: 199.5,  h: 266.25 },
    ],
    rings: [{ src: img('frames/ring'), l: 894, t: 297.75, d: 195 }],
  },
  kitchen: {
    texts: [
      { l: 511.5,  t: 69.75,  w: 416.25, text: KITCHEN_1 },
      { l: 947.25, t: 379.5,  w: 408,    text: KITCHEN_2 },
    ],
    pics: [
      { src: img('kitchen/photo-1'), l: 511.5,  t: 226.5, w: 203.25, h: 270.75 },
      { src: img('kitchen/photo-2'), l: 725.25, t: 226.5, w: 203.25, h: 270.75 },
      { src: img('kitchen/photo-3'), l: 947.25, t: 69,    w: 209.25, h: 279 },
      { src: img('kitchen/photo-4'), l: 1165.5, t: 69,    w: 198.75, h: 279 },
    ],
    rings: [{ src: img('kitchen/ring'), l: 450, t: 212.25, d: 195.75 }],
  },
  voice: {
    texts: [{ l: 547.5, t: 490.5, w: 780, text: VOICE }],
    pics: [{ src: img('voice/cover'), l: 728.7, t: 87, w: 417.75, h: 350.25 }],
    rings: [],
  },
};

// Lưới "My Recap Collection" (7 ảnh) của tab Voice of Us
const RECAP: Pic[] = [
  { src: img('voice/recap-1'), l: 576,    t: 731.9,  w: 480.3, h: 315.7 },
  { src: img('voice/recap-2'), l: 1063.3, t: 731.9,  w: 236.6, h: 315.7 },
  { src: img('voice/recap-3'), l: 576,    t: 1053.9, w: 176.4, h: 235.8 },
  { src: img('voice/recap-4'), l: 761.1,  t: 1053.9, w: 353.7, h: 235.8 },
  { src: img('voice/recap-5'), l: 1123.5, t: 1053.9, w: 176.4, h: 235.8 },
  { src: img('voice/recap-6'), l: 576,    t: 1296.8, w: 356.8, h: 238.1 },
  { src: img('voice/recap-7'), l: 943.9,  t: 1296.8, w: 356,   h: 238.1 },
];

const PILLS: { id: Exclude<Tab, 'intro'>; label: string; wrap?: boolean }[] = [
  { id: 'frames',  label: 'Between the Frames\nSocial blogging and Charity', wrap: true },
  { id: 'voice',   label: 'Voice of Us project' },
  { id: 'kitchen', label: 'The Migrating Kitchen' },
];

const NAV = [
  { href: '/about', label: 'About me' },
  { href: '/culture-arts', label: 'Culture and Arts' },
  { href: '/education-psychology', label: 'Education and Psychology' },
  { href: '/economics', label: 'Economics' },
  { href: '/community-service', label: 'Community Service', active: true },
];

export default function CommunityServicePage() {
  const [tab, setTab] = useState<Tab>('intro');
  const toggleTab = (id: Tab) => setTab((cur) => (cur === id ? 'intro' : id));
  const C = CONTENT[tab];
  const P = PANEL[tab];

  return (
    <main
      className={`${styles.page} ${rubik.variable} ${nexa.variable}`}
      style={{ height: u(HEIGHT[tab]), '--h': HEIGHT[tab] } as CSSProperties}
    >
      <Image className={styles.bg} src="/image/background.png" alt="" fill sizes="1440px" priority />

      {/* canvas: toàn bộ khung kính + nội dung, giữ nguyên toạ độ Figma */}
      <div className={styles.canvas}>
        <div
          className={`${styles.glass} ${styles.panel}`}
          style={{ left: u(P.left), top: u(P.top), width: u(P.width), height: u(P.height) }}
        />

        <div key={tab} className={styles.content}>
          {C.texts.map((t) => (
            <p
              key={t.text}
              className={styles.text}
              style={{ left: u(t.l), top: u(t.t), width: u(t.w), ...ord(t.t, true) }}
            >
              {t.text}
            </p>
          ))}

          <div className={styles.group}>
            {C.pics.map((p) => (
              <div
                key={p.src}
                className={`${styles.pic} ${p.free ? styles.free : ''}`}
                style={{ left: u(p.l), top: u(p.t), width: u(p.w), height: u(p.h), ...ord(p.t) }}
              >
                <Image
                  className={p.free ? styles.contain : styles.cover}
                  src={p.src}
                  alt=""
                  fill
                  sizes={`${Math.round(p.w)}px`}
                />
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
          </div>

          {tab === 'voice' && (
            <>
              <h3 className={styles.recapTitle} style={ord(679.5)}>My Recap Collection</h3>
              <div className={`${styles.group} ${styles.recap}`}>
                {RECAP.map((p) => (
                  <div
                    key={p.src}
                    className={styles.pic}
                    style={{ left: u(p.l), top: u(p.t), width: u(p.w), height: u(p.h), ...ord(p.t) }}
                  >
                    <Image className={styles.cover} src={p.src} alt="" fill sizes={`${Math.round(p.w)}px`} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className={`${styles.glass} ${styles.crumb}`}>
        <Link href="/">Homepage</Link>
        <span>&gt;</span>
        <span>Community Service</span>
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