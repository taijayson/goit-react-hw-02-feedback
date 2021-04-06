import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <>
      <h1 className={styles.tittle}>{title}</h1>
      {children}
    </>
  )
}

export default Section

Section.propTypes = {
  title: PropTypes.string.isRequired,
}