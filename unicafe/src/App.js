import React, { useState } from 'react'

const FeedBackButton = (props) => {
  const {name, handleClick} = props.content;

  return (
    <>
      <button onClick={handleClick}>{name}</button>
    </>
  );
};


const Buttons = (props) => {
  const {contents} = props;
  return (
    <div>
      <FeedBackButton content={contents[0]}></FeedBackButton>
      <FeedBackButton content={contents[1]}></FeedBackButton>
      <FeedBackButton content={contents[2]}></FeedBackButton>
    </div>
  );
};

const Statistic = props => {

  const {name, number} = props.info;

  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{number}</td>
      </tr>
    </tbody>
  );
};

const Statistics = props => {
  const {infos} = props;
  const sum = infos[0].number + infos[1].number + infos[2].number;
  const avg = (infos[0].number - infos[2].number)/sum;
  const positivePercentage = infos[0].number/sum + ' %';

  if (sum < 1){
    return (
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  }

  return (
    <div>
      <Statistic info={infos[0]}></Statistic>
      <Statistic info={infos[1]}></Statistic>
      <Statistic info={infos[2]}></Statistic>
      <Statistic info={{name: "all", number:sum}}></Statistic>
      <Statistic info={{name: "avg", number:avg}}></Statistic>
      <Statistic info={{name: "positive", number:positivePercentage}}></Statistic>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedbackButtonContents = [
    {
      name: "good",
      handleClick: () => setGood(good + 1),
      number: good
    },
    {
      name: "neutral",
      handleClick: () => setNeutral(neutral + 1),
      number: neutral
    },
    {
      name: "bad",
      handleClick: () => setBad(bad + 1),
      number: bad
    }
  ];
  return (
    <div>
      <h1>give feedback</h1>
      <Buttons contents={feedbackButtonContents}></Buttons>
      <h1>statistics</h1>
      <Statistics infos={feedbackButtonContents}></Statistics>
    </div>
  )
}

export default App