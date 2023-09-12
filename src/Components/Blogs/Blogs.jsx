import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark }) => {

    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <div className="w-2/3 mt-10">
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                ></Blog>)
            }
        </div>
    );
};


Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired
}


export default Blogs;