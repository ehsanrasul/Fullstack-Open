import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
       <Button text="Good"  handleClick={() => setGood(good+1)}/>
       <Button text="Neutral" handleClick={() =>setNeutral(neutral+1) }/>
       <Button text="Bad" handleClick={() =>setBad(bad+1)}/>

        <h2>Statistics</h2>
       <Statistics good={good} bad={bad} neutral={neutral} all={neutral+bad+good}/>


    </div>
  )
}

export default App



const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>


const Statistics = (props) => {

  return(

    <div>
       <StatisticsLine text="Good" value={props.good} />
       <StatisticsLine text="Neutral" value={props.neutral} />
       <StatisticsLine text="Bad" value={props.bad} />
       <StatisticsLine text="Average" value={Avg(props.bad, props.good, props.neutral)} />
       <StatisticsLine text="Positive" value={Pos(props.bad, props.good, props.neutral)} />
    </div>

  )

}



const StatisticsLine = ({text, value}) => {

return(
<div>
<table>
  <tr>
      <td>{text}</td>
      <td> {value}</td>
  </tr>
</table>
</div>
)

}



const All = (bad, good, neutral) => good+bad+neutral
const Avg = (bad, good, neutral) => (good - bad)/All(bad, good, neutral)
const Pos = (bad, good, neutral) => (good)/All(bad, good, neutral)