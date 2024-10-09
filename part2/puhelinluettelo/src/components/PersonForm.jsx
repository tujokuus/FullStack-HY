const PersonForm = ({ formData, formHandlers }) => {
    const { newName, newNumber } = formData
    const { handleNameChange, handleNumberChange, addName } = formHandlers
  
    return (
      <form onSubmit={addName}>
          <div>name: <input value={newName} onChange={handleNameChange}/></div>
          <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
  }

export default PersonForm