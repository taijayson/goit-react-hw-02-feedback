import PropTypes from "prop-types"
import styles from "./FeedbackOptions.module.css"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const { good, neutral, bad } = options
    return (
        <div className={styles.feedback_options}>
      <button className={styles.button} type="button" name="good" data-value={good} onClick={onLeaveFeedback}>
        Good
      </button>

      <button className={styles.button} type="button" name="neutral" data-value={neutral} onClick={onLeaveFeedback}>
        Neutral
      </button>

      <button className={styles.button} type="button" name="bad" data-value={bad} onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
    )
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions