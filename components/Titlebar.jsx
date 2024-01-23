import Image from 'next/image';
import styles from '../styles/Titlebar.module.css';
import Link from 'next/link';

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
    <Link href="/">
      <Image
        src="/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
    </Link>
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={styles.title}>Priyanshu Mishra - Visual Studio Code</p>
      
    </section>
  );
};

export default Titlebar;
