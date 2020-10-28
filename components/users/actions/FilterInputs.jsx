import React from "react";
import { Dropdown, Input } from "semantic-ui-react";
import { roles } from "../../../lib/services/UsersOptions";

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

export default FilterInputs;
