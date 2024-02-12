import Image from "next/image";
import styles from '../styles/AboutCard.module.css'

const AboutPage = () => {
  return (
    <>
      <h2>Nice to meet you!</h2>
      <div className={styles.cardContainer}>
      <div>
        <p className={styles.heading}>Priyanshu Mishra -> </p>
        <i>Software Developer </i>
      </div>
      <div>
        <a className ={styles.mail}href="mailto:mishrapriyanshu555@gmail.com">mishrapriyanshu555@gmail.com</a>
      </div>
      </div>
      
      <p className={styles.edu}>My Education Journey!</p>
      <div className={styles.edu__content}>
        <div className={styles.junior}>
          <p className={styles.sub_heading}>Kendriya Vidyalaya No 2 Delhi Cantt</p>
          <div>I did my 10th from KV no-2 which is afflieated to CBSE.</div>
          <p>CGPA->><i>9.2</i></p>
        </div>
        <div className={styles.junior}>
          <p className={styles.sub_heading}>Kendriya Vidyalaya ONGC Dehradun</p>
          <div>I did my Higher secondary from KV ONGC which is aflieated to CBSE.</div>
          <p>CGPA->><i>9.25</i></p>

        </div>
        <div className={styles.junior}>
        <p className={styles.sub_heading}>JSSATE Bengaluru</p>
          <div>Currently, I'm final year student doing Bachelor of Engineering in Information Science and Engineering</div>
          <p>CGPA->><i>9.275</i></p>
          </div>

        </div>
        <a className={styles.resume_a} href="https://drive.google.com/file/d/1FWZquD1LRIMQUOwGk65gtKOGpzqdRg90/view?usp=drive_link" target="_blank"><p className={styles.resume}>My Resume!!</p></a>

    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
