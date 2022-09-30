import { useRouter } from 'next/router'
import React from 'react'


function BlogDetail() {
   const router =  useRouter();
   const query = router.query

  return (
    <div>
       <h1> Blog detail {query.slug[0]}</h1> 
    </div>
  )
}

export default BlogDetail