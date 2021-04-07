import PropTypes from "prop-types";
import styles from "./Notification.module.css"

const Message = ({ message }) => <p className={styles.notification}>{message}</p>;

export default Message;

Message.propTypes = {
  message: PropTypes.string.isRequired,
};