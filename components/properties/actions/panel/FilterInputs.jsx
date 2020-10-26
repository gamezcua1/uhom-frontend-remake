import React from "react";
import { Dropdown } from "semantic-ui-react";
import {
  bathrooms,
  construction_area,
  locations,
  price,
  rooms,
} from "../../../../lib/services/PropertiesOptions";

const FilterInputs = ({ onChange, handleFilter, filters }) => (
  <div className="property-filter">
    <div>
      <label htmlFor="ubication">Ubicación</label>
      <Dropdown
        clearable
        name="ubication"
        placeholder="Ubicacion"
        search
        selection
        options={locations}
        onChange={(_e, { value }) => onChange({ value, name: "location_id" })}
        {...(filters.location_id && {
          defaultValue: parseInt(filters.location_id),
        })}
      />
    </div>

    <div>
      <label htmlFor="roomNumber">Número de cuartos</label>
      <Dropdown
        clearable
        name="roomNumber"
        placeholder="Número de cuartos"
        search
        selection
        options={rooms}
        onChange={(_e, { value }) => onChange({ value, name: "bedrooms" })}
        {...(filters.bedrooms && { defaultValue: parseInt(filters.bedrooms) })}
      />
    </div>

    <div>
      <label htmlFor="bathnumber">Número de baños</label>
      <Dropdown
        clearable
        name="bathnumber"
        placeholder="Número de baños"
        search
        selection
        options={bathrooms}
        onChange={(_e, { value }) => onChange({ value, name: "bathrooms" })}
        {...(filters.bathrooms && {
          defaultValue: parseInt(filters.bathrooms),
        })}
      />
    </div>

    <div>
      <label htmlFor="squareMeters">Superficie mínima</label>
      <Dropdown
        clearable
        name="squareMeters"
        placeholder="Superficie mínima"
        search
        selection
        options={construction_area}
        onChange={(_e, { value }) => onChange({ value, name: "greater_than" })}
        {...(filters.greater_than && {
          defaultValue: parseInt(filters.greater_than),
        })}
      />
    </div>

    <div>
      <label htmlFor="squareMetersMax">Superficie máxima</label>
      <Dropdown
        clearable
        name="squareMetersMax"
        placeholder="Superficie máxima"
        search
        selection
        options={construction_area}
        onChange={(_e, { value }) => onChange({ value, name: "less_than" })}
        {...(filters.less_than && {
          defaultValue: parseInt(filters.less_than),
        })}
      />
    </div>

    <div>
      <label htmlFor="maxPrice">Precio máximo</label>
      <Dropdown
        clearable
        name="maxPrice"
        placeholder="Precio máximo"
        search
        selection
        options={price}
        onChange={(_e, { value }) => onChange({ value, name: "price_max" })}
        {...(filters.price_max && {
          defaultValue: parseInt(filters.price_max),
        })}
      />
    </div>

    <button className="btn-primary" onClick={handleFilter}>
      Buscar
    </button>
  </div>
);

export default FilterInputs;
