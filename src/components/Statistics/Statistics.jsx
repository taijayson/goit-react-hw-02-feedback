import PropTypes from "prop-types"
import styles from "./Statistics.module.css"

const Statistics = ({ good, neutral, bad, total, positive }) => {
    return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positive}%</p>
    </div>
    )
}

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
}

export default Statistics