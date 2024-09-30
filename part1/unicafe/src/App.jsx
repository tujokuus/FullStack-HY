import { useState } from 'react'

  const Header = (props) => {
    return (
      <div>
        <h2>{props.header}</h2>
      </div>
    )
  }

  const Statistics = ({ good, neutral, bad, total }) => {
    const average = (good * 1 + bad * -1) / total
    const positive = (good / total) * 100

    if (total === 0) {
    return(
      <p>No feedback given</p>
      )
    }
    return(
      <table>
        <StatisticsLine text='good' value={good}/>
        <StatisticsLine text='neutral' value={neutral}/>
        <StatisticsLine text='bad' value={bad}/>
        <StatisticsLine text='all' value={total}/>
        <StatisticsLine text='average' value={average}/>
        <StatisticsLine text='positive' value={positive + '%'}/>
      </table>
    )

  }

  const StatisticsLine = ({ text, value }) => {
    return(
      <tbody>
        <tr>
          <td>{text} </td>
          <td>{value}</td>
        </tr>
    </tbody>
    )
  }

  const Button = ({ handleClick, text }) => {
    return (
    <button onClick={handleClick}>
      {text}
    </button>
    )
  }



  const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)
    
    const average = (good * 1 + bad * -1) / total
    const positive = (good / total) * 100
    const header = ['give feedback', 'statistics']

    const handleGoodClick = () => {
      const updatedGood = good + 1
      setGood(updatedGood)
      setTotal(updatedGood + bad + neutral)
    }

    const handleBadClick = () => {
      const updatedBad = bad + 1
      setBad(updatedBad)
      setTotal(updatedBad + good + neutral)
    }
  
    const handleNeutralClick = () => {
      const updatedNeutral = neutral + 1
      setNeutral(updatedNeutral)
      setTotal(updatedNeutral + bad + good)
    }
    return (
      <div>
        <Header header={header[0]}/>
        <Button handleClick={handleGoodClick} text='good'/>
        <Button handleClick={handleNeutralClick} text='neutral'/>
        <Button handleClick={handleBadClick} text='bad'/>
        <Header header={header[1]}/>
        <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
      </div>
    )
  }
  
  export default App
