
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.container}>
     <h1>Home</h1>
     <ul>
        <li>
           <Link href="/product" > Product </Link>
        </li>
        <li>
           <Link href="/about" > About </Link>
        </li>
     </ul>
    </div>
  )
}
