import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Divider, Form } from "semantic-ui-react";
import { newPropertyValidations } from "../../../lib/validations/PropertiesValidationsSchemas";
import PropertyFeaturesFields from "./PropertyFeaturesFields";
import PropertyImagesField from "./PropertyImagesField";
import LandFeaturesFields from "./LandFeaturesFields";
import ExtraDescription from "./ExtraDescription";
import { useRouter } from "next/router";
import { validationsAfterSubmit } from "../../../lib/validations/ValidationsSchemas";
import UpdateImagesButton from "./actions/UpdateImagesButton";
import { setFormResolver } from "../../../lib/validations/resolver";

const PropertyForm = ({
  submitionHandler,
  responseErrors,
  required = true,
  willUpdateImages,
  defaultProperty,
}) => {
  const router = useRouter();
  const { errors, handleSubmit, register, setError, control } = useForm({
    resolver: setFormResolver(required, newPropertyValidations, null),
  });

  useEffect(() => {
    if (responseErrors) {
      validationsAfterSubmit(
        responseErrors
      ).forEach(({ name, type, message }) => setError(name, { type, message }));
    }
  }, [responseErrors]);

  return (
    <Form
      id="propertyForm"
      className="large"
      onSubmit={handleSubmit(submitionHandler)}
    >
      {willUpdateImages ? (
        <UpdateImagesButton />
      ) : (
        <PropertyImagesField errors={errors} register={register} />
      )}
      <PropertyFeaturesFields
        control={control}
        errors={errors}
        register={register}
        required={required}
        defaultValues={defaultProperty}
      />
      <LandFeaturesFields
        required={required}
        errors={errors}
        register={register}
        defaultValues={defaultProperty}
      />
      <ExtraDescription register={register} defaultValues={defaultProperty} />

      <div className="fluid">
        <Button
          id="submitProperty"
          className="btn-login"
          type="submit"
          icon="add"
          content="Agregar propiedad"
        />
        <Divider hidden />
        <Button
          id="goBack"
          className="btn-signin"
          icon="undo"
          content="Regresar"
          onClick={() => router.back()}
        />
      </div>
    </Form>
  );
};

export default PropertyForm;
