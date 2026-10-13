import Image from 'next/image';
import { Rubik_Bubbles, Londrina_Solid } from 'next/font/google';
import styles from './page.module.css';

// Font nạp bằng next/font (không cần @import trong CSS)
const rubik = Rubik_Bubbles({ weight: '400', subsets: ['latin'], variable: '--font-rubik' });
const londrina = Londrina_Solid({ weight: '400', subsets: ['latin'], variable: '--font-londrina-solid' });

export default function Home() {
  return (
    <div className={`${styles.wrap} ${rubik.variable} ${londrina.variable}`}>
      <div className={styles.home}>
        <Image className={styles.bg} src="/image/background-home.png" alt="" width={1920} height={2156} priority />

        <div className={styles.box1}>
          <p className={styles.clickText}>
            Click the fish you like to start Feeding Frenzy and explore Tram Anh&apos;s journey!
          </p>
        </div>

        <a href="https://drive.google.com/file/d/1hltL2R5IbmWkMnyL2hnt8oKpac7PoT2f/view?usp=sharing" className={styles.khoBau} aria-label="My Resume" target="_blank" rel="noopener noreferrer">
          <Image className={`${styles.khoImg} ${styles.khoImgClosed}`} src="/image/chest-closed.png" alt="" width={485} height={544} draggable={false} />
          <Image className={`${styles.khoImg} ${styles.khoImgOpen}`} src="/image/chest-open.png" alt="" width={485} height={544} draggable={false} />
          <div className={styles.box4}>
            <p className={styles.myResume}>MY<br />RESUME</p>
          </div>
        </a>

        {/* Mỗi cá + nhãn chung 1 link: hover cá hoặc chữ đều làm cá mờ */}
        <a href="/about" className={styles.fishLink}>
          <div className={`${styles.fish} ${styles.ca1}`}>
            <Image src="/image/fish-about.png" alt="" width={205} height={235} draggable={false} />
          </div>
          <p className={styles.aboutMe}>ABOUT ME</p>
        </a>

        <a href="/culture-arts" className={styles.fishLink}>
          <div className={`${styles.fish} ${styles.ca2}`}>
            <Image src="/image/fish-culture.png" alt="" width={326} height={260} draggable={false} />
          </div>
          <p className={styles.cultureArts}>CULTURE &amp; ARTS</p>
        </a>

        <a href="/education-psychology" className={styles.fishLink}>
          <div className={`${styles.fish} ${styles.ca3}`}>
            <Image src="/image/fish-education.png" alt="" width={348} height={279} draggable={false} />
          </div>
          <p className={styles.educationPsychology}>EDUCATION &amp; PSYCHOLOGY</p>
        </a>

        <a href="/economics" className={styles.fishLink}>
          <div className={`${styles.fish} ${styles.ca4}`}>
            <Image src="/image/fish-economics.png" alt="" width={556} height={358} draggable={false} />
          </div>
          <p className={styles.economics}>ECONOMICS</p>
        </a>

        <a href="/community-service" className={styles.fishLink}>
          <div className={`${styles.fish} ${styles.ca5}`}>
            <Image src="/image/shark-community.png" alt="" width={450} height={636} draggable={false} />
          </div>
          <p className={styles.communityService}>COMMUNITY<br />SERVICE</p>
        </a>
      </div>
    </div>
  );
}