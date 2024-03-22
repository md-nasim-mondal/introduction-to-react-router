import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Post = ({post}) => {
    const {id, title} = post;
    const postStyle = {
        border: "2px solid yellow",
        padding: "5px",
        borderRadius: "20px",
      };
    return (
        <div style={postStyle}>
            <h4>Post Of Id: {id} </h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.any,
}

export default Post;