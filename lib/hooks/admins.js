import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const useAdminPermissions = () => {
  const router = useRouter();
  const { isAdmin } = useContext(UserContext);

  useEffect(() => {
    const hasPermission = isAdmin();
    if (hasPermission !== null && !hasPermission) router.push("/");
  }, [UserContext]);
};

export default useAdminPermissions;
