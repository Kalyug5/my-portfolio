import styles from '../styles/Platform.module.css'
import Image from 'next/image'

export default function Platforms(){
    return (
        <>
        <div>
            <p className={styles.heading}>My Playing Grounds</p>
        </div>
        <div className={styles.container}>
            <div className={styles.leetcode}>
                <p className={styles.leet_head}>My Leetcode Profile</p>
                <Image src='/leetcode.png' width={400} height={300}/>
                <div className={styles.leet_cont}>
                    <p>
                    LeetCode is a popular online platform that offers a vast collection of coding challenges, algorithmic problems, and interview preparation resources for software engineers and developers. It provides a collaborative space for individuals to practice coding, enhance problem-solving skills, and prepare for technical interviews with top tech companies. 
                    </p>
                
                </div>
            </div>
            <div className={styles.leetcode}>
            <p className={styles.leet_head}>My W3Schools Profile</p>
            <Image src='/w3school.png' width={400} height={300}/>
            <div className={styles.leet_cont}>
                    <p>
                    W3Schools is a widely recognized online platform that offers a comprehensive range of tutorials, references, and learning materials for web development technologies. With a user-friendly interface, W3Schools caters to both beginners and experienced developers, providing easy-to-understand guides on HTML, CSS, JavaScript, SQL, and various other web-related technologies. 
                    </p>
                
                </div>


                
            </div>

        </div>
        </>
    )
}