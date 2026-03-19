const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  console.log(props)
  return <p>{props.part}: {props.exercise}</p>
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part = {props.content[0].part} exercise = {props.content[0].exercise} />
      <Part part = {props.content[1].part} exercise = {props.content[1].exercise} />
      <Part part = {props.content[2].part} exercise = {props.content[2].exercise} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>Number of exercises: {props.content[0].exercise + props.content[1].exercise + props.content[2].exercise}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const content = [
    {part: 'Fundamentals of React', exercise: 10},
    {part: 'Using props to pass data', exercise: 7},
    {part: 'State of a component', exercise: 14}
  ]

  return (
    <div>
      <Header course = {course} />
      <Content content = {content} />
      <Total content = {content} />
    </div>
  )
}

export default App