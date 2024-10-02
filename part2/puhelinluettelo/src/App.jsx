import { useEffect, useState } from 'react'

function checkAvailability(persons, newName) {
  return persons.some((person) => person.name === newName)
}


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('lisää nimi')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()

    if (checkAvailability(persons, newName)){
      alert(`${newName} is already added to phonebook`)
    } else {
      const noteObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    }
    setPersons(persons.concat(noteObject))
    setNewName('')
    }
    
  }

  const handleNumberChange = (evet) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <li key={person.id}> {person.name} {person.number} </li>)}
      </ul>
    </div>
  )

}

export default App