import Image from 'next/image';
import Link from 'next/link';
import { Rubik_Bubbles, Londrina_Solid } from 'next/font/google';
import styles from './page.module.css';

const rubik = Rubik_Bubbles({ weight: '400', subsets: ['latin'], variable: '--font-rubik' });
const londrina = Londrina_Solid({ weight: '400', subsets: ['latin'], variable: '--font-londrina-solid' });

export default function Home() {
  return (
    <div className={`${styles.wrap} ${rubik.variable} ${londrina.variable}`}>
      {/* Nền đại dương phủ kín toàn bộ chiều rộng/cao màn hình */}
      <Image className={styles.bg} src="/image/background-home.png" alt="Background" fill sizes="100vw" priority />
      <div className={styles.overlay} />

      {/* Khung nội dung (cá, nhãn, rương...) tự scale vừa trọn màn hình */}
      <div className={styles.home}>

        {/* Mũi tên nét đứt (vector) chỉ đường đi giữa các con cá */}
        <Image className={`${styles.vector} ${styles.vector1}`} src="/image/vector-1.svg" alt="" width={115} height={245} draggable={false} />
        <Image className={`${styles.vector} ${styles.vector2}`} src="/image/vector-2.svg" alt="" width={184} height={141} draggable={false} />
        <Image className={`${styles.vector} ${styles.vector3}`} src="/image/vector-3.svg" alt="" width={119} height={125} draggable={false} />
        <Image className={`${styles.vector} ${styles.vector4}`} src="/image/vector-4.svg" alt="" width={214} height={96} draggable={false} />
        <Image className={`${styles.vector} ${styles.vector5}`} src="/image/vector-5.svg" alt="" width={139} height={343} draggable={false} />

        {/* Khung text phía trên cùng */}
        <div className={styles.box2}>
          <p className={styles.clickTheFishYou}>
            Click the fish you like to start Feeding Frenzy and explore Tram Anh&apos;s journey!
          </p>
        </div>

        {/* RƯƠNG KHO BÁU + MY RESUME (hover: mở rương và phát sáng) */}
        <a
          href="https://drive.google.com/file/d/1glMa6InAyYpEPr57kD2A489sDIMhIcQ6/view"
          className={styles.khoBauWrap}
          aria-label="My Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className={`${styles.khoImg} ${styles.khoImgClosed}`} src="/image/chest-closed.png" alt="Chest Closed" width={485} height={544} draggable={false} />
          <Image className={`${styles.khoImg} ${styles.khoImgOpen}`} src="/image/chest-open.png" alt="Chest Open" width={485} height={544} draggable={false} />

          {/* Quầng sáng + đốm lấp lánh khi rương mở */}
          <span className={styles.chestGlow} aria-hidden="true" />
          <span className={`${styles.spark} ${styles.spark1}`} aria-hidden="true" />
          <span className={`${styles.spark} ${styles.spark2}`} aria-hidden="true" />
          <span className={`${styles.spark} ${styles.spark3}`} aria-hidden="true" />
          <span className={`${styles.spark} ${styles.spark4}`} aria-hidden="true" />
          <span className={`${styles.spark} ${styles.spark5}`} aria-hidden="true" />

          <div className={styles.box4}>
            <p className={styles.myResume}>MY<br />RESUME</p>
          </div>
        </a>

        {/* CÁ 1: ABOUT ME */}
        <Link href="/about" className={styles.fishLink}>
          <div className={`${styles.fish} ${styles.ca1}`}>
            <Image src="/image/fish-about.png" alt="About Me" width={173} height={199} draggable={false} />
          </div>
          <p className={`${styles.label} ${styles.aboutMe}`}>ABOUT ME</p>
        </Link>

        {/* CÁ 2: CULTURE & ARTS */}
        <Link href="/culture-arts" className={styles.fishLink}>
          <div className={`${styles.fish} ${styles.ca2}`}>
            <Image src="/image/fish-culture.png" alt="Culture & Arts" width={240} height={192} draggable={false} />
          </div>
          <p className={`${styles.label} ${styles.cultureArts}`}>CULTURE &amp; ARTS</p>
        </Link>

        {/* CÁ 3: EDUCATION & PSYCHOLOGY */}
        <Link href="/education-psychology" className={styles.fishLink}>
          <div className={`${styles.fish} ${styles.ca3}`}>
            <Image src="/image/fish-education.png" alt="Education & Psychology" width={264} height={212} draggable={false} />
          </div>
          <p className={`${styles.label} ${styles.educationPsychology}`}>EDUCATION &amp; PSYCHOLOGY</p>
        </Link>

        {/* CÁ 4: ECONOMICS */}
        <Link href="/economics" className={styles.fishLink}>
          <div className={`${styles.fish} ${styles.ca4}`}>
            <Image src="/image/fish-economics.png" alt="Economics" width={380} height={245} draggable={false} />
          </div>
          <p className={`${styles.label} ${styles.economics}`}>ECONOMICS</p>
        </Link>

        {/* CÁ 5: COMMUNITY SERVICE */}
        <Link href="/community-service" className={styles.fishLink}>
          <div className={`${styles.fish} ${styles.ca5}`}>
            <Image src="/image/shark-community.png" alt="Community Service" width={345} height={488} draggable={false} />
          </div>
          <p className={`${styles.label} ${styles.communityService}`}>COMMUNITY<br />SERVICE</p>
        </Link>
      </div>
    </div>
  );
}