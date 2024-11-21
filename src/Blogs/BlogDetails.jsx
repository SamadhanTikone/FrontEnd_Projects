import { Link, useNavigate, useParams } from "react-router-dom"
import useFetch from "./useFetch"
import Icons from "./Icons"


export default function BlogDetails() {
    const{id} = useParams()
    const navigate = useNavigate()
    const{data: blog , loading, error} = useFetch("http://localhost:8000/blogs/" + id)


   
    function handleDelete(){
      fetch("http://localhost:8000/blogs/" + blog.id,{
      method : "DELETE"
      })
      .then(()=>{
        navigate("/")
      })

    }
  return (
    <div>
            {loading && <h1 className="mx-52 ">Loading</h1> }
            {error && <h1 className="mx-52">{error}</h1> }
            {blog && (

                <article className="mx-52  ">
                  {      <Link to="/"><Icons /></Link>                  }
                    <img src={blog.image} className="w-80 m-auto h-42" alt="blog image" />
                    <h2 className="text-3xl py-10 font-semibold">{blog.title}</h2>
                    <p className="pb-4">Written by {blog.author}</p>
                    <p className="text-xl leading-relaxed opacity-50">{blog.body}</p>
                    <button className="bg-red-600 px-4 py-2 rounded-lg my-10 font-semibold hover:bg-red-600" onClick={handleDelete}>Delete</button>
                </article>
            ) }

    </div>
  )
}
