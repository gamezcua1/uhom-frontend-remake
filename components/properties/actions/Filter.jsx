import React, { useState, useEffect } from "react";
import { Dropdown, Icon } from "semantic-ui-react";

const locations = [
  "Todos",
  "Armería",
  "Colima",
  "Comala",
  "Coquimatlán",
  "Cuauhtémoc",
  "Ixtlahuacán",
  "Manzanillo",
  "Minatitlan",
  "Tecomán",
  "Villa",
].map((e, i) => ({ key: `location_${i}`, value: i, text: e }));

const square_meters = [0, 100, 200, 300].map((e) => ({
  key: `square_${e}`,
  value: e,
  text: e === 0 ? "Todos" : e,
}));

const price = ["0", "500,000", "1,000,000", "1,500,000", "2,000,000"].map(
  (e) => ({
    key: `price_${e}`,
    value: parseInt(e.split(",").join("")),
    text: e == "0" ? "Todos" : e,
  })
);

const rooms = [0, 1, 2, 3, 4, 5, 6].map((_p, i) => ({
  key: `room_${i}`,
  value: i,
  text: i === 0 ? "Todos" : i,
}));
const bathrooms = [0, 1, 2, 3, 4, 5, 6].map((_p, i) => ({
  key: `bath_${i}`,
  value: i,
  text: i === 0 ? "Todos" : i,
}));

const Filter = ({ getProperties, filters }) => {
  const [query, setQuery] = useState({});
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    setShowFilter(Object.keys(filters).length > 1);
  }, [filters]);

  const handleFilter = () => getProperties({ filter: query });

  const onChange = ({ value, name }) => {
    if (value > 0) setQuery({ ...query, [name]: value });
    else {
      const new_query = { ...query };
      delete new_query[name];
      setQuery(new_query);
    }
  };

  return (
    <div>
      <div className="property-filter-button">
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
        options={square_meters}
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
        options={square_meters}
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

export default Filter;
