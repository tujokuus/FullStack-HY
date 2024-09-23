//Header komponentti joka tulostaa otsikon. Käytetään propseja tiedon välittämiseen
const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <p key={index}>
          {part.part} {part.exercises}
        </p>
      ))}
    </div>
  )
}

const Total = (props) => {
  console.log(props.parts[0].exercises)
  return  (
  <div>
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  </div>
)
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { part: 'Fundamentals of React', exercises: 10},
    { part: 'Using props to pass data', exercises: 7},
    { part: 'State of a component', exercises: 14}
  ]

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

//Refaktoroi koodi siten, että se koostuu kolmesta uudesta komponentista: Header, Content ja Total. Komponentti App
//välittää tarpeelliset tiedot kullekin komponentille propsien avulla. Header, CONTENT JA TOTAL

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App