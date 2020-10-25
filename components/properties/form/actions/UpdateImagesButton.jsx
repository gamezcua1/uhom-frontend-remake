import { useRouter } from "next/router";
import React from "react";
import { Button, Form } from "semantic-ui-react";

const UpdateImagesButton = ({ propertyId }) => {
  const router = useRouter();

  return (
    <Form.Field>
      <Button
        onClick={() => router.push(`/admin/properties/${propertyId}/images`)}
        type="button"
        floated="right"
        icon="edit"
        content="Actualizar imágenes"
        className="btn-login"
      />
    </Form.Field>
  );
};

export default UpdateImagesButton;
