import styles from '../styles/ContactCode.module.css';

const contactItems = [
  
  {
    social: 'email',
    link: 'mishrapriyanshu555',
    href: 'mailto:mishrapriyanshu555@gmail.com',
  },
  {
    social: 'github',
    link: 'Kalyug5',
    href: 'https://github.com/Kalyug5',
  },
  {
    social: 'linkedin',
    link: 'PriyanshuMishra',
    href: 'https://www.linkedin.com/in/priyanshu-mishra-b022b021a/',
  },
  {
    social: 'LeetCode',
    link: 'impriyanshumishra',
    href: 'https://leetcode.com/mishrapriyanshu555/',
  },
  {
    social: 'instagram',
    link: 'im_priyanshumishra89',
    href: 'https://www.instagram.com/im_priyanshumishra89',
  },
  
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
