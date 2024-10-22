import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleBookmarks,handleMarksAsRead}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
fetch('blog.json')
.then(res=>res.json())
.then(data=>setBlogs(data))
    },[])
  
    return (
        <div className=" md:w-2/3">
            <h1>blogs: {blogs.length}</h1>
            {
                blogs.map(blog=> <Blog 
                    handleBookmarks={ handleBookmarks}
                    handleMarksAsRead={handleMarksAsRead}
                    key={blog.id}
                    blog={blog}>
                        
                 </Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={

    handleBookmarks:PropTypes.func,
    handleMarksAsRead:PropTypes.func
    }

export default Blogs;