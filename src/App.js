import { Component } from "react"
import Statistics from "./components/Statistics/Statistics"
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions"
import Section from "./components/Section/Section"
import Notification from "./components/Notification/Notification"

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = (event) => {
    const { name } = event.target
    this.setState((state) => ({ [name]: state[name] + 1 }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  }

  countPositivePersentage = () => {
    const { good } = this.state
    return Math.floor((good / this.countTotalFeedback()) * 100)
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositivePersentage();
    const options = Object.keys(this.state)

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistic">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
              <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
          )}
        </Section>
      </div>
    )
  }
}
export default App;
