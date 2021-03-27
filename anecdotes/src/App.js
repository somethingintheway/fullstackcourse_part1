import React, { useState } from 'react'


const Button = props => {
  const {name, handleClick} = props;

  return (
    <>
      <button onClick={handleClick}>{name}</button>
    </>
  );
};

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const getIndexOfMaxValue = (arr) => {
  return arr.indexOf(Math.max(...arr));
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0);
  const clickNextAncedote = () => {
    const n = getRandomNum(0, anecdotes.length - 1);
    console.log(n);
    setSelected(n);
  };

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));


  const clickVote = () => {
    const pointsCopy = [...points];
    pointsCopy[selected]++;
    setPoints(pointsCopy);
  }

  return (
    <div>
      <h1>Ancecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <Button name="vote" handleClick={clickVote}></Button>
      <Button name="next anecdote" handleClick={clickNextAncedote}></Button>

      <h1>Ancecdote with most votes</h1>
      {anecdotes[getIndexOfMaxValue(points)]}
    </div>
  )
}

export default App