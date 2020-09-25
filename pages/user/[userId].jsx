import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../../components/shared/loading";
import session from "../../components/user_profile/fakeSession";
import ProfileHeader from "../../components/user_profile/ProfileHeader";
import ProfilePanel from "../../components/user_profile/profile_panel/ProfilePanel";

const UserShow = () => {
  const router = useRouter();
  const { userId } = router.query;
  const isAuthorized = () => session && session.id === userId;

  useEffect(() => {
    if (userId && !isAuthorized()) router.push("/");
  }, [userId]);

  if (!userId) return <Loading />;
  return (
    <>
      <ProfileHeader fullName={`${session.names} ${session.surnames}`} />
      <ProfilePanel />
    </>
  );
};

export default UserShow;
