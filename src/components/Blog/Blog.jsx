import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookMarks, handleMarkAsRead}) => {
   const {Id, blog_img, author_img, author_name, posted_date, title, reading_time, hashtags} = blog;
   return (
      <div className='mb-16'>
         <img src={blog_img} alt={`the cover img of ${title}`} className='rounded-lg h-auto md:h-[450px] w-full'/>
         <div className='flex justify-between items-center mt-8'>
            <div className='flex items-center gap-5'>
               <img src={author_img} className='w-14' />
               <div>
                  <h4>{author_name}</h4>
                  <p>{posted_date}</p>
               </div>
            </div>
            <div className='flex items-center'>
               <span className='text-[#11111199]'>{reading_time}min read</span>
               <button onClick={()=>{handleAddToBookMarks(blog)}}><FaBookmark className='text-red-600 text-2xl ml-2'></FaBookmark></button>
            </div>
         </div>
         <h2 className='text-4xl font-bold my-4 w-4/5'>{title}</h2>

         <p>{hashtags.map((hash, idx) => <span key={idx}><a href="#" className='text-[#11111199] ml-2'>#{hash}</a></span>)}</p>

         <button onClick={()=>{handleMarkAsRead(reading_time, Id)}} className='text-purple-600 font-bold underline mt-5'>Mark as read</button>
      </div>
   );
};

Blog.propTypes = {
   blog: PropTypes.object.isRequired,
   handleAddToBookMarks: PropTypes.func.isRequired,
   handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;