import PropTypes from 'prop-types';

const Blog = ({ blog }) => {

    const { title, cover, reading_time, author_img, author, posted_date, hashtags } = blog;

    return (
        <div>
            <img src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired
}


export default Blog;