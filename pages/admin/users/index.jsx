import React, { useContext } from "react";
import { useUserIndex } from "../../../lib/hooks/users";
import { UserContext } from "../../../lib/context/UserContext";
import UsersList from "../../../components/users/UsersList";
import { useRouter } from "next/router";
import { Container } from "semantic-ui-react";
import Filter from "../../../components/users/actions/Filter";
import useAdminPermissions from "../../../lib/hooks/admins";

const UsersIndex = () => {
  const router = useRouter();
  const { token } = useContext(UserContext);
  const { users, error } = useUserIndex(
    router.asPath.replace("/admin", ""),
    token
  );

  useAdminPermissions();

  const getUsers = ({ page, filter }) =>
    router.push({
      pathname: "/admin/users",
      query: {
        ...(page ? router.query : {}),
        ...filter,
        page: filter ? 1 : page,
      },
    });

  return (
    <Container className="users-list">
      <Filter getUsers={getUsers} filters={router.query} />
      <UsersList getUsers={getUsers} users={users} error={error} />;
    </Container>
  );
};

export default UsersIndex;
