import fs from 'fs/promises';
import path from 'path'; 
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import EventList from '../components/events/EventList';
import { data } from '../data/dummy';



export default function Home(props) {
  const { products} = props;
  return (
    <div className={styles.container}>
     <h1>Home page</h1>
     {/* <EventList items={data}/> */}
     <ul>
      {products.map((product,index)=>(
       <li key={index}>
        <Link href={`/products/${product.id}`}>{product.name}</Link> </li>
      ))}
       {/* <li>Product 2</li>
       <li>product 3</li> */}
     </ul>
    </div>
  )
}


export async function getStaticProps(context){
    const filePath = path.join(process.cwd(),'data','dummy-data.json');
    const jsonData =  await fs.readFile(filePath)
    const data = JSON.parse(jsonData);
    
    if(!data){
      return {
        redirect:{
          destination:'/product'
        }
      }
    }

    if(data.products.length === 0){
      return{
        notFound: true,
      }
    }

   return{
    props:{
      products: data.products,
    },
    revalidate:10,
    // NotFound:true,
   }

}

// export async function getStaticProps( ){
//   return{
//     props:{
//       products:[
//         {"id":"p1","name":"product1"},
//         {"id":"p2","name":"product2"},
//         {"id":"p3","name":"product3"}
//       ]
//     }
//   }
// }
