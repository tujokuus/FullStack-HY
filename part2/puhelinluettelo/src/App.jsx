import { useEffect, useState } from 'react'
import axios from 'axios'
import personsService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

function checkAvailability(persons, newName) {
  return persons.some((person) => person.name === newName)
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('lisää nimi')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()

    if (checkAvailability(persons, newName)){
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
      name: newName,
      number: newNumber,
    }

    personsService
      .create(personObject)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
    })
    }
    
  }

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleDelete = (id) => {
    const personToDelete = persons.find((p) => p.id === id)

    if (!personToDelete) {
      alert('Person not fould in phonebook')
      return
    }

    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      personsService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== id))
        })
        .catch(error => {
          console.error('Failed to delete person:', error)
          alert('Failed to delete person. They may have already been removed.')
          setPersons(persons.filter(p => p.id !== id)) // Päivitä näkyvyys myös jos poistaminen epäonnistuu
        })
    }
  }

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
      <Persons
        persons={filteredPersons}
        onDelete={handleDelete} />

    </div>
  )

}

export default App