import phonebookService from "../services/phonebook";

const PersonForm = ({
  newName,
  newNumber,
  persons,
  setPersons,
  setNewName,
  setNewNumber,
  setNewMessage
}) => {
  const searchDuplicated = (newPerson) => {
    return persons.find((person) => newPerson.name === person.name);
  };

  const notify = () => {
    setNewMessage(`Added ${newName}`)
    setTimeout(()=>{setNewMessage(null)},5000)
  }

  const handleNewPerson = (event) => {
    event.preventDefault();

    let newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    let foundPerson = searchDuplicated(newPerson);

    if (typeof foundPerson === "undefined") {
      //hacemos un post a la db.json
      phonebookService.addPerson(newPerson, setPersons, persons).then(response => notify());
      return;
    } else {

      foundPerson = {...foundPerson, number: newPerson.number};

      if (
        window.confirm(
          `${foundPerson.name} is already added to the phonebook, replace the old number with a new one`,
        )
      ) {
        phonebookService.updatePerson(foundPerson, setPersons, persons)
        .then(response => notify());
      }
    }
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
