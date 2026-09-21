import Person from "./Person";


const Agenda = ({ displayPersonsFilter, persons, setPersons }) =>
  displayPersonsFilter.map((person) => (
    <Person key={person.id} name={person.name} number={person.number} setPersons={setPersons} persons={persons} id={person.id}></Person>
    
  ));

export default Agenda;
