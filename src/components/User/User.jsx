import PropTypes from 'prop-types';
const User = ({user}) => {
    const {id, name, email, phone} = user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h2>Name: {name} </h2>
            <p>Email: {email} </p>
            <p>Phone: {phone} </p>
        </div>
    );
};


User.propTypes = {
    user: PropTypes.array,
}

export default User;