import Person from "./Person";

const Agenda = ({ displayPersonsFilter, setPersons }) =>
  displayPersonsFilter.map((person) => (
    <Person
      key={person.id}
      name={person.name}
      number={person.number}
      id={person.id}
      setPersons={setPersons}
    ></Person>
  ));

export default Agenda;
