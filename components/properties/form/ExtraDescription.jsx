import React from "react";
import { Divider, Form, Header } from "semantic-ui-react";

const ExtraDescription = ({ register, defaultValues }) => {
  const { extra_description: extraDescription = "" } = defaultValues;
  return (
    <>
      <Header as="h3" content="Descripción adicional sobre la propiedad" />
      <Divider />

      <Form.Field>
        <label htmlFor="extra_description">Descripción adicional:</label>
        <textarea
          id="extraDescription"
          name="extra_description"
          placeholder="Descripción adicional"
          ref={register}
          rows={4}
          cols={50}
          defaultValue={extraDescription}
        />
      </Form.Field>
    </>
  );
};

export default ExtraDescription;
