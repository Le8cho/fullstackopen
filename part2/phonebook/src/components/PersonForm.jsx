import phonebookService from "../services/phonebook"

const PersonForm = ({
  newName,
  newNumber,
  persons,
  setPersons,
  setNewName,
  setNewNumber,
}) => {
  const checkDuplicated = (newPerson) => {
    return persons.findIndex((person) => newPerson.name === person.name) !== -1;
  };

  const handleNewPerson = (event) => {
    event.preventDefault();

    let newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    if (checkDuplicated(newPerson)) {
      alert(`${newPerson.name} is already added to the phonebook`);
      return;
    }

    //hacemos un post a la db.json
    phonebookService.addPerson(newPerson, setPersons, persons);

  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <form onSubmit={handleNewPerson}>
      <div>
        name: <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
