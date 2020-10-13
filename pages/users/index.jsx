import React, { useContext } from "react";
import { useUserIndex } from "../../lib/hooks/users";
import { UserContext } from "../../lib/context/UserContext";
import UsersList from "../../components/users/UsersList";

const UsersIndex = () => {
  const { token } = useContext(UserContext);
  const { users, error } = useUserIndex(token);

  return <UsersList users={users} error={error} />;
};

export default UsersIndex;
