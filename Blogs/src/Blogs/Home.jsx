
import BlogList from "./BlogList";

import Loading from "./Loading";
import useFetch from "./useFetch";



export default function Home() {

  const {data : blogs, loading , error} = useFetch("http://localhost:8000/blogs");

  
  // function handleDelete(id){
  //   const newBlogs = blogs.filter((blog)=>blog.id !== id)
  //   setBlogs(newBlogs)

  //   }

    // http://localhost:8000/blogs

  return (
    <>

    {error && <h2 className="my-64 text-center text-3xl p-4 transition-all text-white font-bold ">{error} <h3 className="font-normal text-lg">Check Your Connection and try again</h3></h2> }

    {  blogs ? <BlogList blogs={blogs} /> : loading && <Loading/> }

  
    </>
  );
}
