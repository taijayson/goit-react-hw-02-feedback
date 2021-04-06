import PropTypes from "prop-types";

const Message = ({ message }) => <p>{message}</p>;

export default Message;

Message.propTypes = {
  message: PropTypes.string.isRequired,
};