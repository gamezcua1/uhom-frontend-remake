import React, { useEffect } from "react";
import { Button, Divider, Form } from "semantic-ui-react";
import ImageList from "./ImagesList";
import PropertyImagesField from "../properties/form/PropertyImagesField";
import GoBackButton from "../shared/GoBackButton";
import { useForm } from "react-hook-form";
import { validationsAfterSubmit } from "../../lib/validations/ValidationsSchemas";

const ImagesForm = ({
  images,
  propertyId,
  submitionHandler,
  responseErrors,
}) => {
  const { errors, handleSubmit, register, setError } = useForm();

  useEffect(() => {
    if (responseErrors) {
      validationsAfterSubmit(
        responseErrors
      ).forEach(({ name, type, message }) => setError(name, { type, message }));
    }
  }, [responseErrors]);

  return (
    <Form
      id="propertyImagesForm"
      className="large"
      onSubmit={handleSubmit(submitionHandler)}
    >
      <PropertyImagesField register={register} errors={errors} />

      <div className="fluid">
        <Button
          id="uploadImages"
          icon="upload"
          content="Subir imágenes"
          className="btn-login"
        />

        <Divider hidden />
        <GoBackButton />
      </div>
      <ImageList images={images} propertyId={propertyId} />
    </Form>
  );
};

export default ImagesForm;
