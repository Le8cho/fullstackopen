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

export default Filter;