//Header komponentti joka tulostaa otsikon. Käytetään propseja tiedon välittämiseen
const Header = ({ name }) => {
  console.log('headeria kutsuttu', name);
  return (
    <div>
      <h1>
        { name }
        
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
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const App = () => {
  const courses = [
    {
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      { courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  )
}

export default App