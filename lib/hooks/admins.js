import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const useAdminPermissions = () => {
  const router = useRouter();
  const { isAdmin } = useContext(UserContext);

  useEffect(() => {
    if (!isAdmin()) router.push("/");
  }, [UserContext]);
};

export default useAdminPermissions;
