import React, { useContext } from "react";
import { Dropdown, Image } from "semantic-ui-react";
import { LogoutService } from "../../lib/services/session/AuthService";
import { UserContext } from "../../lib/context/UserContext";
import { useRouter } from "next/router";

const Avatar = () => {
  const { logout, token, currentUser } = useContext(UserContext);
  const BASE_URI = `/user/${currentUser.uuid}`;

  console.log({ BASE_URI })

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

  const handleLogout = () => {
    LogoutService(token, logout);
    router.push("/");
  };

  return (
    <div>
      <Dropdown trigger={trigger} pointing="top right" icon={null}>
        <Dropdown.Menu>
          <Dropdown.Header content={`¡Hola, ${currentUser.names}! `} />

          <Dropdown.Divider />

          <Dropdown.Item
            icon="user"
            text="Mi Perfil"
            onClick={() => router.push(BASE_URI)}
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
            onClick={handleLogout}
            icon={{ name: "sign out", color: "red" }}
            text="Cerrar Sesión"
          />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Avatar;
