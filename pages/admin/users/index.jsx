import React, { useContext } from "react";
import { useUserIndex } from "../../../lib/hooks/users";
import { UserContext } from "../../../lib/context/UserContext";
import UsersList from "../../../components/users/UsersList";
import { useRouter } from "next/router";
import useAdminPermissions from "../../../lib/hooks/admins";
import UsersPanelOptions from "../../../components/users/actions/UsersPanelOptions";
import GenericContainer from "../../../components/shared/Container";

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
    <GenericContainer>
      <UsersPanelOptions getUsers={getUsers} filters={router.query} />
      <UsersList getUsers={getUsers} users={users} error={error} />
    </GenericContainer>
  );
};

export default UsersIndex;
