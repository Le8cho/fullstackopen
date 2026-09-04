import { useState } from 'react'

const Button = ({setFeedBack, feedback, text}) => <button onClick={() => setFeedBack(feedback + 1)}>{text}</button>



const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button setFeedBack={setGood} feedback={good} text="good"></Button>
      <Button setFeedBack={setNeutral} feedback={neutral} text="neutral"></Button>
      <Button setFeedBack={setBad} feedback={bad} text="bad"></Button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App