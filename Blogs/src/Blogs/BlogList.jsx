import PropType from 'prop-types'
import { Link } from 'react-router-dom'

export default function BlogList({blogs}) {

  
  return (

    <>
   
    <div className=' flex flex-wrap gap-4 mt-12 m-4 sm:text-lg mb-12'>


    {
        blogs.map((blog)=>(
            <div key={blog.id} className="border-none w-80 flex flex-col h-auto relative m-auto hover:shadow-custom shadow-xl rounded-lg  p-2   ">
                <img src={blog.image} className='w-80 h-42 rounded-lg' alt="" />
                <Link to={`/blogs/${blog.id}`}>
                <h2 className="p-2 text-xl hover:text-green-600 cursor-pointer  font-semibold "> {blog.title}</h2>
                
                </Link>
                
                <h2 className="p-2 text-md text-white  "> {  blog.body.split(' ').slice(0, 10).join(' ') + '...'}</h2>
                <h2 className="p-2 text-sm ">by {blog.author} </h2>
               

            </div>
        ))

    }
    </div>


    </>
  )
}

BlogList.propTypes= {
    blogs:PropType.array,
    allBlogs : PropType.string,
    handleDelete : PropType.func,
    handleReset: PropType.func
}
