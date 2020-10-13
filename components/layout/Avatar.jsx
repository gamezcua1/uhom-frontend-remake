import React, { useContext } from "react";
import { Dropdown, Image } from "semantic-ui-react";
import { LogoutService } from "../../lib/services/session/AuthService";
import { UserContext } from "../../lib/context/UserContext";
import { useRouter } from "next/router";
import { useUserAvatar } from "../../lib/hooks/users";

const Avatar = () => {
  const { logout, token, currentUser } = useContext(UserContext);
  const BASE_URI = `/users/${currentUser.uuid}`;
  const avatar = useUserAvatar(currentUser);

  const router = useRouter();

  const trigger = (
    <span>
      <Image avatar src={avatar} size="mini" />
    </span>
  );

  const handleLogout = () => {
    LogoutService(token, logout);
    router.push("/");
  };

  return (
    <div>
      <Dropdown
        id="loggedUserAvatar"
        trigger={trigger}
        pointing="top right"
        icon={null}
      >
        <Dropdown.Menu id="loggedUserMenu">
          <Dropdown.Header content={`¡Hola, ${currentUser.names}! `} />

          <Dropdown.Divider />

          <Dropdown.Item
            id="userProfile"
            icon="user"
            text="Mi Perfil"
            onClick={() => router.push(`${BASE_URI}?tab=info`)}
          />
          <Dropdown.Item
            icon="heart"
            text="Mis Casas"
            onClick={() => router.push(`${BASE_URI}?tab=my-likes`)}
          />

          <Dropdown.Divider />

          <Dropdown.Item icon="help circle" text="Centro de ayuda" />
          <Dropdown.Item icon="conversation" text="FAQ's" />
          <Dropdown.Divider />
          <Dropdown.Item
            className="logout"
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
