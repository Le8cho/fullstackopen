import phonebookService from "../services/phonebook";

const Person = ({ name, number, id, setPersons }) => (
  <p>
    {name} {number}
    <button
      onClick={() => {
        phonebookService.deletePerson(id);
        phonebookService.getAllPersons().then((persons) => setPersons(persons));
      }}
    >
      delete
    </button>
  </p>
);

export default Person;
