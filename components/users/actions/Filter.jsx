import React, { useState, useEffect } from "react";
import { Dropdown, Icon, Header, Input } from "semantic-ui-react";

const roles = [
  ["Todos", ""],
  ["Usuario", "user"],
  ["Agente", "real_estate_agent"],
  ["Administrador", "admin"],
].map(([text, value]) => ({
  key: `location_${value}`,
  value: value,
  text: text,
}));

const Filter = ({ getUsers, filters = {} }) => {
  const [query, setQuery] = useState({});
  const [showFilter, setShowFilter] = useState(true);

  useEffect(() => {
    setShowFilter(Object.keys(filters).length > 1);
  }, [filters]);

  const handleFilter = (e) => {
    e.preventDefault();
    getUsers({ filter: query });
  };

  const onChange = ({ value, name }) => {
    if (value.length > 0) setQuery({ ...query, [name]: value });
    else {
      const new_query = { ...query };
      delete new_query[name];
      setQuery(new_query);
    }
  };

  return (
    <div>
      <div className="users-filter-button">
        <Header as="h1">Usuarios registrados</Header>
        <button
          className="btn-primary"
          onClick={() => setShowFilter(!showFilter)}
        >
          <Icon name="filter" /> Filtrar
        </button>
      </div>

      {showFilter && (
        <FilterInputs
          onChange={onChange}
          handleFilter={handleFilter}
          filters={filters}
        />
      )}
    </div>
  );
};

const FilterInputs = ({ onChange, handleFilter, filters }) => (
  <form className="users-filters-container" onSubmit={handleFilter}>
    <div>
      <label htmlFor="name">Nombre</label>
      <Input
        placeholder="Nombre"
        onChange={(_e, { value }) => onChange({ value, name: "name" })}
        {...(filters.name && {
          defaultValue: filters.name,
        })}
      />
    </div>
    <div>
      <label htmlFor="role">Rol</label>
      <Dropdown
        clearable
        name="role"
        placeholder="Rol"
        search
        selection
        options={roles}
        onChange={(_e, { value }) => onChange({ value, name: "role" })}
        {...(filters.role && {
          defaultValue: filters.role,
        })}
      />
    </div>

    <button className="btn-primary" type="submit">
      Buscar
    </button>
  </form>
);

export default Filter;
