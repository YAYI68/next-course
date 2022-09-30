
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import EventList from '../components/events/EventList';


const data = [
  {id:1, name: 'First event'},
  {id:2, name: 'Second event'},
  {id:3, name: 'Third event'},
];

export default function Home() {
  return (
    <div className={styles.container}>
     <h1>Home page</h1>
     <EventList items={data}/>
    </div>
  )
}
