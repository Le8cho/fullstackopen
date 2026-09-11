import { useState } from "react";

const Filter = ({ nameFilter, setNameFilter, setHasFilter }) => {
  const handleNameFilter = (event) => {
    setNameFilter(event.target.value);
    if (event.target.value !== "") setHasFilter(true); //si no es vacío filtrar
  };
  return (
    <div>
      filter shown with{" "}
      <input type="text" value={nameFilter} onChange={handleNameFilter} />
    </div>
  );
};

const PersonForm = ({ newName, newNumber, persons, setPersons, setNewName, setNewNumber}) => {
  const checkDuplicated = (newPerson) => {
    return persons.findIndex((person) => newPerson.name === person.name) !== -1;
  };

  const addPerson = (event) => {
    event.preventDefault();

    let newPerson = {
      id : persons.length + 1,
      name: newName,
      number: newNumber,
    };

    if (checkDuplicated(newPerson)) {
      alert(`${newPerson.name} is already added to the phonebook`);
      return;
    }

    setPersons(persons.concat(newPerson));
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <form onSubmit={addPerson}>
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

const Agenda = ({ displayPersonsFilter }) =>
  displayPersonsFilter.map((person) => (
    <Person key={person.id} name={person.name} number={person.number}></Person>
  ));

const Person = ({ name, number }) => <p> {name} {number} </p>
;
const App = () => {

  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [hasFilter, setHasFilter] = useState(false);
  const [nameFilter, setNameFilter] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  let displayPersonsFilter = hasFilter
    ? persons.filter((person) => person.name.toLowerCase().includes(nameFilter))
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        setHasFilter={setHasFilter}
      ></Filter>
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        persons={persons}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      ></PersonForm>
      <h2>Numbers</h2>
      <Agenda displayPersonsFilter={displayPersonsFilter}></Agenda>
    </div>
  );
};

export default App;
