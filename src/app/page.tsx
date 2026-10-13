import Image from 'next/image';
import { Rubik_Bubbles, Londrina_Solid } from 'next/font/google';
import styles from './page.module.css';

const rubik = Rubik_Bubbles({ weight: '400', subsets: ['latin'], variable: '--font-rubik' });
const londrina = Londrina_Solid({ weight: '400', subsets: ['latin'], variable: '--font-londrina-solid' });

export default function Home() {
  return (
    <div className={`${styles.wrap} ${rubik.variable} ${londrina.variable}`}>
      
      {/* ẢNH NỀN TÁCH RA ĐÂY ĐỂ TRÀN FULL MÀN HÌNH (100VW/100VH) MÀ KHÔNG BỊ SCROLL */}
      <Image 
        className={styles.bg} 
        src="/image/background-home.png" 
        alt="Background" 
        fill 
        priority 
      />

      <div className={styles.home}>
        {/* ========================================= */}
        {/* BẠN HÃY DÁN CODE CÁC BONG BÓNG CỦA BẠN VÀO KHU VỰC NÀY */}
        {/* ========================================= */}


        {/* Khung Text phía trên cùng */}
        <div className={styles.box2}>
          <p className={styles.clickTheFishYou}>
            Click the fish you like to start Feeding Frenzy and explore Tram Anh&apos;s journey!
          </p>
        </div>

        {/* RƯƠNG KHO BÁU & MY RESUME ĐÃ ĐƯỢC GỘP CHUNG VÀO 1 CỤM */}
        <a 
          href="https://drive.google.com/file/d/1hltL2R5IbmWkMnyL2hnt8oKpac7PoT2f/view?usp=sharing" 
          className={styles.khoBauWrap} 
          aria-label="My Resume" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {/* Cặp ảnh rương */}
          <Image className={`${styles.khoImg} ${styles.khoImgClosed}`} src="/image/chest-closed.png" alt="Chest Closed" width={485} height={544} draggable={false} />
          <Image className={`${styles.khoImg} ${styles.khoImgOpen}`} src="/image/chest-open.png" alt="Chest Open" width={485} height={544} draggable={false} />
          
          {/* Bong bóng chữ MY RESUME - sẽ tự động nằm ngay giữa rương */}
          <div className={styles.box4}>
            <p className={styles.myResume}>MY<br />RESUME</p>
          </div>
        </a>

        {/* CÁ 1: ABOUT ME */}
        <a href="/about" className={styles.fishLink}>
          <div className={`${styles.fish} ${styles.ca1}`}>
            <Image src="/image/fish-about.png" alt="About Me" width={173} height={199} draggable={false} />
          </div>
          <p className={styles.aboutMe}>ABOUT ME</p>
        </a>

        {/* CÁ 2: CULTURE & ARTS */}
        <a href="/culture-arts" className={styles.fishLink}>
          <div className={`${styles.fish} ${styles.ca2}`}>
            <Image src="/image/fish-culture.png" alt="Culture & Arts" width={240} height={192} draggable={false} />
          </div>
          <p className={styles.cultureArts}>CULTURE &amp; ARTS</p>
        </a>

        {/* CÁ 3: EDUCATION & PSYCHOLOGY */}
        <a href="/education-psychology" className={styles.fishLink}>
          <div className={`${styles.fish} ${styles.ca3}`}>
            <Image src="/image/fish-education.png" alt="Education & Psychology" width={264} height={212} draggable={false} />
          </div>
          <p className={styles.educationPsychology}>EDUCATION &amp; PSYCHOLOGY</p>
        </a>

        {/* CÁ 4: ECONOMICS */}
        <a href="/economics" className={styles.fishLink}>
          <div className={`${styles.fish} ${styles.ca4}`}>
            <Image src="/image/fish-economics.png" alt="Economics" width={380} height={245} draggable={false} />
          </div>
          <p className={styles.economics}>ECONOMICS</p>
        </a>

        {/* CÁ 5: COMMUNITY SERVICE */}
        <a href="/community-service" className={styles.fishLink}>
          <div className={`${styles.fish} ${styles.ca5}`}>
            <Image src="/image/shark-community.png" alt="Community Service" width={345} height={488} draggable={false} />
          </div>
          <p className={styles.communityService}>COMMUNITY<br />SERVICE</p>
        </a>

      </div>
    </div>
  );
}