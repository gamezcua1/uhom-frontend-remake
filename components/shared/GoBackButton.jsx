import { useRouter } from "next/router";
import React from "react";
import { Button } from "semantic-ui-react";

const GoBackButton = ({ onClose }) => {
  const router = useRouter();
  const handleClosing = () => (onClose ? onClose() : router.back());

  return (
    <Button
      id="goBack"
      className="btn-signin"
      icon="undo"
      content="Regresar"
      onClick={handleClosing}
      type="button"
    />
  );
};

export default GoBackButton;
