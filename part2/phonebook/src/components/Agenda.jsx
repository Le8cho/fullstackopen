import Person from "./Person";
import phonebookService from "../services/phonebook";

const Agenda = ({ displayPersonsFilter, setPersons }) =>
  displayPersonsFilter.map((person) => (
    <div key={person.id}>
      <Person name={person.name} number={person.number}></Person>
      <button
        onClick={() => {
          if (window.confirm(`Do you want to eliminate ${person.name}`)) {
            phonebookService
              .deletePerson(person.id)
              .then(
                phonebookService
                  .getAllPersons()
                  .then((persons) => setPersons(persons)),
              );
          }
        }}
      >
        delete
      </button>
    </div>
  ));

export default Agenda;
