import React from "react";
import { Divider, Form, Header } from "semantic-ui-react";

const PropertyImagesField = ({ errors = {}, register }) => (
  <>
    <Header as="h3" content="Agregar fotos" />
    <Divider />
    <Form.Field required>
      <label htmlFor="images">Fotos: </label>
      <input
        type="file"
        name="images"
        accept="image/*"
        multiple
        ref={register}
      />
      {errors.images && <p className="dark-error">{errors.images.message}</p>}
    </Form.Field>
  </>
);

export default PropertyImagesField;
