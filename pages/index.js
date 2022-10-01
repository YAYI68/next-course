
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import EventList from '../components/events/EventList';
import { data } from '../data/dummy';



export default function Home() {
  return (
    <div className={styles.container}>
     <h1>Home page</h1>
     <EventList items={data}/>
    </div>
  )
}
