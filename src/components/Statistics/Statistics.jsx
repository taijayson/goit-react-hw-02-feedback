import PropTypes from "prop-types"
import styles from "./Statistics.module.css"

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Statistics = ({ good, neutral, bad, total, positive }) => {
    return (
        <div className={styles.wrap}>
      <p style={{color: getRandomColor()}} className={styles.label}>Good: {good}</p>
      <p style={{color: getRandomColor()}} className={styles.label}>Neutral: {neutral}</p>
      <p style={{color: getRandomColor()}} className={styles.label}>Bad: {bad}</p>
      <p style={{color: getRandomColor()}} className={styles.label}>Total: {total}</p>
      <p style={{color: getRandomColor()}} className={styles.label}>Positive feedback: {positive}%</p>
    </div>
    )
}

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
}

export default Statistics