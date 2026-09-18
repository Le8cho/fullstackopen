import Person from "./Person";

const Agenda = ({ displayPersonsFilter }) =>
  displayPersonsFilter.map((person) => (
    <Person key={person.id} name={person.name} number={person.number}></Person>
  ));

  export default Agenda;