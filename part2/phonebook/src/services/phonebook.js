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

const deletePerson = (id) => {
  return axios.delete(`${base_url}/${id}`);
};

export default {
  getAllPersons,
  addPerson,
  deletePerson,
};
