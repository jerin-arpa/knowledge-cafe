import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md: w-1/3 mt-10 bg-gray-100 p-7 rounded-2xl">

            <h2 className="text-3xl font-bold text-center"> Bookmarked Blogs: {bookmarks.length}</h2>

            {
                bookmarks.map((bookmark, idx) => <Bookmark
                    key={idx}
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;