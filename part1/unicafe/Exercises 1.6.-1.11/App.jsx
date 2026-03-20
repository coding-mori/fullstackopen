import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  console.log({text, value})
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({statGood, statNeutral, statBad}) => {
  console.log({statGood, statNeutral, statBad})
  const all = statGood + statNeutral + statBad

  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  const average = (statGood - statBad)/all
  const positive = statGood/all * 100
  return (
    <table>
      <tbody>
      <StatisticLine text = "good" value = {statGood} />
      <StatisticLine text = "neutral" value = {statNeutral} />
      <StatisticLine text = "bad" value = {statBad} />
      <StatisticLine text = "all" value = {all} />
      <StatisticLine text = "average" value = {average.toFixed(1)} />
      <StatisticLine text = "positive" value = {positive.toFixed(1) + " %"} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <h1>statistics</h1>
      <Statistics statGood = {good} statNeutral = {neutral} statBad = {bad}/>
      <div>

      </div>
    </div>
  )
}

export default App