import PropTypes from "prop-types";
// import { Link, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();
    const postStyle = {
        border: "2px solid yellow",
        padding: "5px",
        borderRadius: "20px",
      };
    const handleShowDetail = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h4>Post Of Id: {id} </h4>
            <p>{title}</p>
            {/* <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}>
                <button>Post Details</button>
            </Link> */}
            {/* Doing same things in button by using onClick function */}
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.any,
}

export default Post;