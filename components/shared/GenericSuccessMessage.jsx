import React, { useEffect } from "react";
import { Message } from "semantic-ui-react";

const GenericSuccessMessage = ({
  icon,
  header,
  content,
  isVisible,
  setVisible,
}) => {
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
    <>
      {isVisible && (
        <Message icon={icon} content={content} header={header} success />
      )}
    </>
  );
};

export default GenericSuccessMessage;
