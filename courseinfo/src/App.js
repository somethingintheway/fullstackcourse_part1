import React from 'react'


const Header = (props) =>{
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

const Part = (props) =>{
  return (
    <div>
      <p>{props.partNum} {props.exercisesNum}</p>
    </div>
  );
}

const Content = (props) =>{
  return (
    <div>
      <Part partNum={props.course.parts[0].name} exercisesNum={props.course.parts[0].exercises}></Part>
      <Part partNum={props.course.parts[1].name} exercisesNum={props.course.parts[1].exercises}></Part>
      <Part partNum={props.course.parts[2].name} exercisesNum={props.course.parts[2].exercises}></Part>
    </div>
  );
}

const Total = (props) =>{
  const numAllParts = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises;
  return (
    <div>
        <p>Number of exercises {numAllParts}</p>
    </div>
  );
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}></Header>
      <Content course={course}></Content>
      <Total course={course}></Total>
    </div>
  )
}

export default App