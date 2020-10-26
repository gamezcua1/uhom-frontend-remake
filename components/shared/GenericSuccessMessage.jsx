import React, { useEffect } from "react";
import { Message } from "semantic-ui-react";

const GenericSuccessMessage = ({
  icon = "check circle outline",
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
        <Message
          icon={icon}
          content={`${content} Refresca la pantalla para actualizar cambios.`}
          header={header}
          success
        />
      )}
    </>
  );
};

export default GenericSuccessMessage;
