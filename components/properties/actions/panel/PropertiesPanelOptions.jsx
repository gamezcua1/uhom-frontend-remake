import React, { useContext, useEffect, useState } from "react";
import { Button, Menu } from "semantic-ui-react";
import { UserContext } from "../../../../lib/context/UserContext";
import AddPropetyButton from "./AddPropertyButton";
import FilterInputs from "./FilterInputs";

const PropertiesPanelOptions = ({ getProperties, filters }) => {
  const [query, setQuery] = useState({});
  const [showFilter, setShowFilter] = useState(false);
  const { isAdmin } = useContext(UserContext);

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
    <>
      <Menu secondary>
        <Menu.Item position="right">
          <Button
            id="propertiesFilter"
            className="btn-signin"
            content="Filtrar"
            icon="filter"
            onClick={() => setShowFilter(!showFilter)}
          />
        </Menu.Item>
        {isAdmin() && <AddPropetyButton />}
      </Menu>
      {showFilter && (
        <FilterInputs
          onChange={onChange}
          handleFilter={handleFilter}
          filters={filters}
        />
      )}
    </>
  );
};

export default PropertiesPanelOptions;
