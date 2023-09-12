import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
   return (
      <div className="md:w-1/3 ml-6 bg-[#1111110d]">
         <div className='border border-[#6047EC] rounded-lg px-1 mb-14 py-5'><h3 className='text-2xl font-bold text-[#6047EC] '>Spent time on read: {readingTime} min</h3></div>
         <h3 className='text-2xl font-bold mb-9'>Bookmarked Blogs: {bookmarks.length}</h3>
         <div className='px-7'>{bookmarks.map((bookmark,idx) => <Bookmark bookmark={bookmark} key={idx}></Bookmark>)}</div>
      </div>
   );
};

Bookmarks.propTypes = {
   bookmarks: PropTypes.array.isRequired,
   readingTime: PropTypes.number.isRequired
}

export default Bookmarks;