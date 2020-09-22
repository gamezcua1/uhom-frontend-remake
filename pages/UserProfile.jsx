import React, { useState } from "react";
import { Redirect, useParams, withRouter } from "react-router-dom";
import useNavigation from "../../services/hooks/historyNavigation";
import { useSessionInfo } from "../../services/sessionInfo";
import ProfileHeader from "../smart/UserProfile.jsx/ProfileHeader";
import { ProfileOptions } from "../smart/UserProfile.jsx/ProfileOptions";

function UserProfile(){
  const validSections = ['my-likes', 'info']
  const session = useSessionInfo()
  const { user_uuid, section } = useParams();
  const goTo = useNavigation();
  const [ activeIndex, setActiveIndex ] = useState(validSections.indexOf(section));

  const handleSectionChange = (e, data) => {
    const newIndex = data.activeIndex
    const newSection = data.panes[newIndex].pane.key
    
    if(newIndex !== activeIndex){
      setActiveIndex(newIndex);
      goTo(`/user/${session.id}/${newSection}`)
    }
  }

  const isAuthorized = () => session && session.id === user_uuid

  const validSection = () => validSections.includes(section) ? true : false

  return(
    <>
      {
         isAuthorized() && validSection() ?
          <div>
            <ProfileHeader header={`${session.names} ${session.surnames}`}/>
            <ProfileOptions
              activeIndex={activeIndex}
              handleSectionChange={handleSectionChange}
            />
          </div>

          : <Redirect to="/"/>
      }
    </>
  )
}

export default withRouter(UserProfile);