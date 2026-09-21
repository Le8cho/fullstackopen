import axios from "axios";

const base_url = "http://localhost:3001/persons";

const getAllPersons = () => {
  return axios.get(base_url).then((response) => response.data);
};

const addPerson = (newPerson, setPersons, persons) => {
  return axios
    .post(base_url, newPerson)
    .then((response) => setPersons(persons.concat(response.data)));
};

const deletePerson = (id, setPersons, persons) => {
  return axios
    .delete(`${base_url}/${id}`)
    .then((response) =>
      setPersons(persons.filter((person) => person.id !== response.data.id)),
    );
};

const updatePerson = (updatedPerson, setPersons, persons) => {
  return axios
    .put(`${base_url}/${updatedPerson.id}`, updatedPerson)
    .then((response) =>
      setPersons(
        persons.map((person) =>
          response.data.id === person.id
            ? { ...person, number: response.data.number }
            : { ...person },
        ),
      ),
    );
};

export default {
  getAllPersons,
  addPerson,
  deletePerson,
  updatePerson,
};
