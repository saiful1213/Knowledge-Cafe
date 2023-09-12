import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookMarks, handleMarkAsRead}) => {
   const [blogs, setBlogs] = useState([]);

   useEffect(()=>{
      fetch('blog.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
   },[])

   return (
      <div className="md:w-2/3">
         {blogs.map((blog,idx) => <Blog blog={blog} handleMarkAsRead={handleMarkAsRead} handleAddToBookMarks={handleAddToBookMarks} key={idx}></Blog>)}
      </div>
   );
};

Blogs.propTypes = {
   handleAddToBookMarks: PropTypes.func.isRequired,
   handleMarkAsRead: PropTypes.func.isRequired
}

export default Blogs;