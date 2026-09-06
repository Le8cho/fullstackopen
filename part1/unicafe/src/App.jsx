import { useState } from "react";

const Button = ({ setFeedBack, feedback, text, setAll, all }) => {
  return (
    <button
      onClick={() => {
        setFeedBack(feedback + 1);
        setAll(all + 1);
      }}
    >
      {text}
    </button>
  );
};

const Stadistics = ({ good, neutral, bad, all }) => {
  
  let average = (good - bad) / all
  
  if (all > 0) {
    return (
      <>

        <StatisticsLine text={"good"} value = {good}></StatisticsLine>
        <StatisticsLine text={"neutral"} value = {neutral}></StatisticsLine>
        <StatisticsLine text={"bad"} value = {bad}></StatisticsLine>
        <StatisticsLine text={"average"} value = {average}></StatisticsLine>
      </>
    );
  } else {
    return (
      <>

        <p>No feedback given</p>
      </>
    );
  }
};

const StatisticsLine = ({text, value}) => {
  return (
    <p>{text}: {value}</p>
  )
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        setFeedBack={setGood}
        feedback={good}
        text="good"
        setAll={setAll}
        all={all}
      ></Button>
      <Button
        setFeedBack={setNeutral}
        feedback={neutral}
        text="neutral"
        setAll={setAll}
        all={all}
      ></Button>
      <Button
        setFeedBack={setBad}
        feedback={bad}
        text="bad"
        setAll={setAll}
        all={all}
      ></Button>
              <h1>statistics</h1>
      <Stadistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
      ></Stadistics>
    </div>
  );
};

export default App;
