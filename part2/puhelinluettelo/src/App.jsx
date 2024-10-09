import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

function checkAvailability(persons, newName) {
  return persons.some((person) => person.name === newName)
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

      <Filter value={search} handleSearchChange={handleSearchChange} />
      <h3>add a new</h3>
      <PersonForm 
        formData={{ newName, newNumber }}
        formHandlers={{ handleNameChange, handleNumberChange, addName }}
      />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />

    </div>
  )

}

export default App