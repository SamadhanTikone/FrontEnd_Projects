import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


export default function NavBar() {

const[isMenuOpen , setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-around items-center py-6 px-4 md:p-10 text-start ">
      <h1 className="text-3xl font-bold text-yellow-400 w-full ">The Monkey Blogs </h1>
      <ul className=" hidden md:flex justify-between font-medium text-lg  ">
        
            <Link className="  hover:text-orange-600  mr-12 " to="/">Home</Link>

            <Link className=" hover:text-orange-600 mr-12" to="/about">About</Link>
        
            <Link className="hover:text-orange-600  mr-12 w-24" to="/newBlog">New Blog</Link>
       </ul>
      <button className="text-3xl md:hidden h-auto block sm:mx-12 cursor-pointer" onClick={()=> {setIsMenuOpen(!isMenuOpen);}}><GiHamburgerMenu /></button>

      <div className={`md:hidden  w-full py-16  top-20 bg-gray-700  left-0 flex p-6 flex-col z-30 absolute items-center gap-12 font-semibold text-lg transition-transform ${isMenuOpen ? "block" : "hidden" }`}>

      <Link className="  hover:text-orange-600 bg-transparent" to="/" onClick={()=> {setIsMenuOpen(!isMenuOpen)}} >Home</Link>

      <Link className=" hover:text-orange-600 bg-transparent" to="/about"  onClick={()=> {setIsMenuOpen(!isMenuOpen)}}>About</Link>

      <Link className="hover:text-orange-600 bg-transparent " to="/newBlog"  onClick={()=> {setIsMenuOpen(!isMenuOpen)}}>New Blog</Link>



      </div>
    </div>
  )
}
