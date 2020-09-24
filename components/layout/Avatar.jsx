import React from "react";
import { Dropdown, Image } from "semantic-ui-react";
import { logoutHandler } from "../../lib/services/session/AuthService";
import { useSessionInfo } from "../../lib/services/SessionInfo";
import { useUserDispatch } from "../../lib/context/UserContext";
import { useRouter } from "next/router";
import { redirectTo } from "../../lib/helpers/pathValidations";

const Avatar = () => {
  const session = useSessionInfo();
  const dispatch = useUserDispatch();
  const BASE_URI = `/user/${session.id}`;

  const router = useRouter();

  const trigger = (
    <span>
      <Image
        avatar
        src="https://en.gravatar.com/userimage/191265949/d6b5b62c51acb05d460a4b6f39610410.png?size=100"
        size="mini"
      />
    </span>
  );

  const logout = () => {
    logoutHandler(session.authorization, dispatch);
    router.push(redirectTo(BASE_URI, "/"));
  };

  return (
    <div>
      <Dropdown trigger={trigger} pointing="top right" icon={null}>
        <Dropdown.Menu>
          <Dropdown.Header content={`¡Hola, ${session.names}! `} />

          <Dropdown.Divider />

          <Dropdown.Item
            icon="user"
            text="Mi Perfil"
            onClick={() => router.push(`${BASE_URI}/info`)}
          />
          <Dropdown.Item
            icon="heart"
            text="Mis Casas"
            onClick={() => router.push(`${BASE_URI}/my-likes`)}
          />

          <Dropdown.Divider />

          <Dropdown.Item icon="help circle" text="Centro de ayuda" />
          <Dropdown.Item icon="conversation" text="FAQ's" />
          <Dropdown.Divider />
          <Dropdown.Item
            onClick={logout}
            icon={{ name: "sign out", color: "red" }}
            text="Cerrar Sesión"
          />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Avatar;
