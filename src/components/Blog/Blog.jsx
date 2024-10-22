import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title,courseThumbnail,readingTime,authorName,authorImageAvatar,postDate,tags}=blog
    console.log(blog)
    return (
        <div className=''>
            <img src={courseThumbnail} alt={`cover picture of the title${title}`} />
            <div className='flex justify-between'>
<div className='flex my-4 space-x-4'>
<img className='w-14' src={authorImageAvatar} alt="" />
<div className=''>
<div className='font-bold' >{authorName}</div>
<div >{postDate}</div>
</div>


</div>

<div className='my-8 items-center'>
<span> {readingTime} min read</span>
</div>


            </div>
            <h2 className='text-4xl font-bold my-8'>{title}</h2>
            {
                tags.map((hash,idx)=> <span key={idx}><a href="">#{tags}</a></span>)
            }
        </div>
    );
};
Blog.propTypes ={
blog: PropTypes.object.isRequired
}
export default Blog;