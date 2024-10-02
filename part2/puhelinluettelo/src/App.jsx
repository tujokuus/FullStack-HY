import { useEffect, useState } from 'react'

function checkAvailability(persons, newName) {
  return persons.some((person) => person.name === newName)
}

const Search = ({ value, onChange }) => {
  return (
    <div>
      search <input value={value} onChange={onChange} />
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('lisää nimi')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

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

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>search: <input value={search} onChange={handleSearchChange}/> </div>
      <form onSubmit={addName}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map(person => 
          <li key={person.id}> {person.name} {person.number} </li>)}
      </ul>
    </div>
  )

}

export default App