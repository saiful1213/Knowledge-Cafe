import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
   const {title} = bookmark;
   return (
      <div className='bg-slate-200 rounded-lg px-2'>
         <h2 className="text-lg font-bold mb-6 p-5">{title}</h2>
      </div>
   );
};

Bookmark.propTypes = {
   bookmark: PropTypes.object.isRequired
}

export default Bookmark;