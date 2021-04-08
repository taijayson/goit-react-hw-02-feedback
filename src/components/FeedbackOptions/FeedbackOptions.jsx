import PropTypes from "prop-types"
import styles from "./FeedbackOptions.module.css"
import shortid from "shortid"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    // const { good, neutral, bad } = options
    return (
        <div className={styles.feedback_options}>
            {options.map((option) => (
                <button className={styles.button} type="button" name={option} key={shortid.generate()} onClick={onLeaveFeedback}>
                    {option}
                </button>
            ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions