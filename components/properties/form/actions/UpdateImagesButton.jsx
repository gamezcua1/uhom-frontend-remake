// import { useRouter } from "next/router";
import React from "react";
import { Button, Form } from "semantic-ui-react";

const UpdateImagesButton = () => {
  // const router = useRouter();

  return (
    <Form.Field>
      <Button
        floated="right"
        icon="edit"
        content="Actualizar imágenes"
        className="btn-login"
      />
    </Form.Field>
  );
};

export default UpdateImagesButton;
