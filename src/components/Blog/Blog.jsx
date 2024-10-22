import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleBookmarks,handleMarksAsRead}) => {
    const {title,courseThumbnail,readingTime,authorName,authorImageAvatar,id,postDate,tags}=blog
    console.log(blog)
    return (
        <div className= 'my-4'>
            <img className='w-full' src={courseThumbnail} alt={`cover picture of the title${title}`} />
            <div className='flex justify-between'>
<div className='flex my-4 space-x-4'>
<img className='w-14' src={authorImageAvatar} alt="" />
<div className=''>
<div className='font-bold' >{authorName}</div>
<div >{postDate}</div>
</div>


</div>

<div className='my-8 items-center inline-flex'>
<span> {readingTime} min read  </span>
<button
onClick={()=> handleBookmarks(blog)}
className='text-2xl text-red-400 ml-2'><FaBookmark></FaBookmark> </button>
</div>
            </div>
            <h2 className='text-4xl font-bold my-8'>{title}</h2>
          <div className='my-8 items-center '>
          {
                tags.map((hash,idx)=> <span key={idx}><a href="">#{tags}</a></span>)
            }
             
          </div>
          <button
              onClick={()=>handleMarksAsRead( id,readingTime)}
              className='text-purple-600'>Marks as read</button>
        </div>
    );
};
Blog.propTypes ={
blog: PropTypes.object.isRequired,
handleBookmarks:PropTypes.func,
handleMarksAsRead:PropTypes.func

}
export default Blog;