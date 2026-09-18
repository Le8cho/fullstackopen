import { useEffect, useState } from "react";
import phonebookService from "./services/phonebook"
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Agenda from "./components/Agenda";

const App = () => {

  const [persons, setPersons] = useState([]);
  const [hasFilter, setHasFilter] = useState(false);
  const [nameFilter, setNameFilter] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  let displayPersonsFilter = hasFilter
    ? persons.filter((person) => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
    : persons;

  useEffect(
    ()=>{
      phonebookService.getAllPersons().then(persons => setPersons(persons))
    },
    [])

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
      <Agenda displayPersonsFilter={displayPersonsFilter} setPersons={setPersons}></Agenda>
    </div>
  );
};

export default App;
