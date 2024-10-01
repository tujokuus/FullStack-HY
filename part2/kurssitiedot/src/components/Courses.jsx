const Header = ({ name }) => {
    return (
      <div>
        <h1>
          { name }
          
        </h1>
      </div>
    )
  }
  
  const Content = ({ parts }) => {
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

  export default Course