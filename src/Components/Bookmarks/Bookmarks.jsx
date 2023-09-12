import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="w-full md:w-1/3 lg:w-1/3 mt-10">

            <div className='bg-gray-100 text-blue-600 py-10 px-5 rounded-2xl'>
                <h3 className='text-2xl md:text-2xl lg:text-3xl font-bold text-center'>Spend time on read: {readingTime}</h3>
            </div>

            <div className=' bg-gray-100  mt-5 p-7 rounded-2xl'>
                <h2 className='text-2xl md:text-2xl lg:text-3xl font-bold text-center'> Bookmarked Blogs: {bookmarks.length}</h2>

                {
                    bookmarks.map((bookmark, idx) => <Bookmark
                        key={idx}
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;