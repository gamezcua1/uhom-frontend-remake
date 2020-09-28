import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Tab } from "semantic-ui-react";
import { UserContext } from "../../../lib/context/UserContext";
import { useCurrentTab } from "../../../lib/hooks/dataFormater";
import panes from "./options/profilePanes";

const ProfilePanel = () => {
  const { currentUser, token } = useContext(UserContext);
  const router = useRouter();
  const { currentIndex, validTabs } = useCurrentTab(router.query.tab);

  const handleTabChange = (_event, data) => {
    const { activeIndex } = data;
    router.push(`/user/${router.query.userId}?tab=${validTabs[activeIndex]}`);
  };

  return (
    <Tab
      menu={{ secondary: true, pointing: true }}
      panes={panes(currentUser.uuid, token)}
      activeIndex={currentIndex}
      onTabChange={handleTabChange}
    />
  );
};

export default ProfilePanel;
