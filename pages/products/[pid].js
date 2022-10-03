import fs from 'fs/promises';
import path from 'path';
import React from 'react';


 function ProductDetail(props) {
    const { productDetail } = props;

    // if (!productDetail){
    //     return <p>Loading...</p>
    // }

  return (
    <div>
        <h1>{productDetail.name}</h1>
        <p>{productDetail.description}</p>
    </div>
  )
}

async function getData(){
    const filePath = path.join(process.cwd(), 'data','dummy-data.json');
    const jsonData =  await fs.readFile(filePath)
    const data = JSON.parse(jsonData);
    return data;
}


export async function getStaticProps(context){
    const { params } = context
    const productId = params.pid
    const data = await getData()
   const product = data.products.find((product)=>product.id === productId);

    return{
        props:{
            productDetail:product
        },
        revalidate:10,
    }
}




export async function getStaticPaths(){
    const data = await getData();
    // const ids = data.products.map(product =>product.id); 
    // const pathWithparams = ids.map(id =>({params:{pid:id}}));
      const paramsPath = data.products.map(product => ({params:{pid:product.id}}));
    return {
        paths:paramsPath,
        fallback:false,
    }
}


// export async function getStaticPaths(){

//     return {
//         paths:[
//             {params:{pid:'p1'}}
//         ],
//         fallback:'blocking',
//     }
// }

export default ProductDetail