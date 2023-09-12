import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {

    const { title, cover, reading_time, author_img, author, posted_date, hashtags } = blog;

    return (
        <div className='mb-14'>
            <img className='w-full mb-8 rounded-2xl' src={cover} alt="" />

            <div className='flex flex-wrap justify-between mb-5'>
                <div className='flex gap-3'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='
                    ml-2 text-red-600'><FaBookmark ></FaBookmark></button>
                </div>
            </div>

            <h2 className='text-4xl font-bold mb-5'>{title}</h2>

            <p className='text-xl mb-5'>
                {
                    hashtags.map((hash, idx) => <span className='mr-3' key={idx}><a href="">#{hash}</a></span>)
                }
            </p>

            <button className='text-purple-800 text-xl font-bold underline' onClick={() => handleMarkAsRead(reading_time)}>
                Mark as Reads
            </button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}


export default Blog;