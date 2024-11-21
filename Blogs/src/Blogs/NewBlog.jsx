import {  useState } from "react"
import styles from "./Blogs.module.css"
import { useNavigate } from "react-router-dom"
export default function NewBlog() {

  const[title , setTitle ] = useState("");
  const[author , setAuthor ] = useState("");
  const[body , setBody ] = useState("");
  const[image , setImage ] = useState("");
  const[isPending , setIsPending] = useState(false);
  const[isAdded , setIsAdded] = useState(false);
  const history = useNavigate();
 


   function handleSubmit(e){
  
    e.preventDefault();
  
   
    setIsAdded(true)
    setTimeout(()=>{
      setIsPending(true)
    const blog = {title,author,body,image}

    fetch("http://localhost:8000/blogs",{
      method : "POST",
      headers : {"content-Type" : "application/json"},
      body: JSON.stringify(blog)
    })
    
    .then(()=> 
      setIsAdded(false),
     setTimeout(()=>{
      history("/")
     },1000)
        
    )
  },2000)

      

}




  return (
    <>
      <div>
       
      {isPending ? <h1 className="text-center text-2xl font-semibold ">✅Your Blog is Added..</h1> : <form onSubmit={handleSubmit} className={`${styles.form} flex justify-center items-center mt-12`} >

        <div className="border-blue-300 border-4 p-4 rounded-lg mb-12">
          
      <h1 className="font-bold text-yellow-400 text-2xl text-center">Add New Blog</h1>
        <ul>
        <label htmlFor="title">Title : </label> <li> <input type="text" required  onChange={(e)=>setTitle(e.target.value)} value={title} id="title"/></li>
          <label htmlFor="author" >Author :  </label>  <li> <input type="text" required  onChange={(e)=>setAuthor(e.target.value)} value={author} id="author" /></li>
          <label htmlFor="info">Blog Info :</label><li> <textarea title="" required onChange={(e)=> setBody(e.target.value)} value={body} id="info"></textarea></li>
          <label htmlFor="info">Image :</label><li> <input type="text" required onChange={(e)=> setImage(e.target.value)} value={image} id="info"></input></li>
        </ul>
        <div className="flex justify-center items-center">
        { isAdded ? <button className="bg-green-500 px-4 py-1 rounded-lg mt-2"> Adding Blog...</button> : <button  className="bg-green-500 px-4 py-1 rounded-lg mt-2 " > Add Blog</button> }

        </div>

        </div>

      </form>}
    
     </div>

    </>
  )
}
