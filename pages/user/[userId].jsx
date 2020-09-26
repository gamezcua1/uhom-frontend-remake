import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Loading from "../../components/shared/loading";
import ProfileHeader from "../../components/user_profile/ProfileHeader";
import ProfilePanel from "../../components/user_profile/profile_panel/ProfilePanel";
import { UserContext } from "../../lib/context/UserContext";

const UserShow = () => {
  const router = useRouter();
  const { currentUser } = useContext(UserContext);
  const { userId } = router.query;
  const isAuthorized = () => currentUser && currentUser.uuid === userId;

  useEffect(() => {
    if (userId && !isAuthorized()) router.push("/");
  }, [userId]);

  if (!userId) return <Loading />;
  return (
    <>
      <ProfileHeader
        fullName={`${currentUser.names} ${currentUser.surnames}`}
      />
      <ProfilePanel />
    </>
  );
};

export default UserShow;
