import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Button, Divider, Header, Menu } from "semantic-ui-react";
import FilterInputs from "./FilterInputs";

const UsersPanelOptions = ({ getUsers, filters = {} }) => {
  const [query, setQuery] = useState({});
  const [showFilter, setShowFilter] = useState(true);
  const router = useRouter();

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
        <Header as="h1" textAlign="center" content="Usuarios registrados" />
        <Divider />
        <Menu secondary>
          <Menu.Item position="right">
            <Button
              id="userFilter"
              className="btn-signin"
              onClick={() => setShowFilter(!showFilter)}
              icon="filter"
              content="Filtrar"
            />
          </Menu.Item>

          <Menu.Item>
            <Button
              id="inviteCollaborators"
              className="btn-login"
              icon="envelope"
              content="Invitar colaboradores"
              onClick={() => router.push("/admin/users/invite")}
            />
          </Menu.Item>
        </Menu>
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

export default UsersPanelOptions;
