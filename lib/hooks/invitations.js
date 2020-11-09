import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import InvitationsController from "../../controllers/InvitationsController";
import { UserContext } from "../context/UserContext";

const useInvitedUser = (token) => {
  const router = useRouter();
  const { isLoggedIn } = useContext(UserContext);
  const initialResponse = {
    data: null,
    status: null,
  };
  const [response, setResponse] = useState(initialResponse);
  const isLogged = isLoggedIn();

  useEffect(() => {
    if (isLogged) router.push("/");
    else {
      InvitationsController.getInvitedUser(token || "")
        .then(({ data: responseData, status: responseStatus }) =>
          setResponse({ data: responseData, status: responseStatus })
        )
        .catch(({ response = {} }) => {
          const { status: responseStatus } = response;
          setResponse({ data: null, status: responseStatus });
        });
    }
  }, [isLogged, token]);

  return response;
};

export default useInvitedUser;
