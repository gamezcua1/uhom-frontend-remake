import React, { useEffect } from "react";
import { Message } from "semantic-ui-react";

const GenericSuccessMessage = ({
  icon,
  header,
  content,
  isVisible,
  setVisible,
}) => {
  console.log(isVisible);
  useEffect(() => {
    if (isVisible) handleVisiblity();
  }, [isVisible]);

  const handleVisiblity = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    setTimeout(() => setVisible(false), 5000);
  };

  return (
    <Message
      icon={icon}
      content={content}
      header={header}
      success
      hidden={!isVisible}
    />
  );
};

export default GenericSuccessMessage;
