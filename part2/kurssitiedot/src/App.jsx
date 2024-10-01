//Header komponentti joka tulostaa otsikon. Käytetään propseja tiedon välittämiseen
const Header = (props) => {
//  console.log('headeria kutsuttu', props);
//  const { courses } = props
  return (
    <div>
      <h1>
        { props.course.name }
        
      </h1>
    </div>
  )
}

const Content = ({ parts }) => {
  console.log('Content props arvo on', parts);

  return(
    <div>
      <ul>
        {parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
      </ul>
    </div>
  )
}

const Total = ({ parts }) => {
  console.log('Total parts ', parts);
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
  console.log(totalExercises);
  return  (
  <div>
    <p>
      Number of exercises {totalExercises}
    </p>
  </div>
)
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    },
    {
      name: 'testi123',
      exercises: 14,
      id: 4
    },
    ]
  }

  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

export default App