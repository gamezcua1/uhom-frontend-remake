import { useRouter } from "next/router";
import React from "react";
import { Button } from "semantic-ui-react";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <Button
      id="goBack"
      className="btn-signin"
      icon="undo"
      content="Regresar"
      onClick={() => router.back()}
      type="button"
    />
  );
};

export default GoBackButton;
