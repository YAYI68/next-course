Getting Started with next js 

Create a dynamic route with [id] or [id].js folder or file
get the params  from useRouter()
import { useRouter } from "next/router"

const router = useRouter();
console.log(router.query)

Creating a 404 page is simply by adding 404.js to the root folder which is the 

getStaticProps function is use to pre-generate the pages during build process before it's deployed.

getStaticPaths function is used to create a dynamic path to the static pages pregenerated 

getServerSideProps function is used to pre-render pages on the server side before it's  deployed to the client side anytime the client makes a request.

useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))
