import phonebookService from "../services/phonebook";

const Person = ({ id, name, number, persons, setPersons }) => (
  <p>
    {name} {number}
    <button
      onClick={() => {
        if (window.confirm(`Do you want to eliminate ${name}`)) {
          phonebookService.deletePerson(id, setPersons, persons);
        }
      }}
    >
      delete
    </button>
  </p>
);

export default Person;
