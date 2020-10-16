import Link from "next/link";
import React from "react";
import { Table } from "semantic-ui-react";
import { USER_ROLES } from "../../lib/hooks/users";
import BlockUser from "./actions/BlockUser";

const UserRow = ({ user }) => (
  <Table.Row negative={user.blocked}>
    <Table.Cell>
      <Link href={`users/${user.uuid}`}>
        {`${user.names} ${user.surnames}`}
      </Link>
    </Table.Cell>
    <Table.Cell>{user.phone_number}</Table.Cell>
    <Table.Cell>{user.email}</Table.Cell>
    <Table.Cell>{USER_ROLES[user.role]}</Table.Cell>
    <Table.Cell>
      <BlockUser user={user} />
    </Table.Cell>
  </Table.Row>
);

export default UserRow;
