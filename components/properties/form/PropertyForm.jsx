import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Divider, Form } from "semantic-ui-react";
import { newPropertyValidations } from "../../../lib/validations/PropertiesValidationsSchemas";
import PropertyFeaturesFields from "./PropertyFeaturesFields";
import PropertyImagesField from "./PropertyImagesField";
import LandFeaturesFields from "./LandFeaturesFields";
import ExtraDescription from "./ExtraDescription";
import { yupResolver } from "@hookform/resolvers";
import { useRouter } from "next/router";
import { validationsAfterSubmit } from "../../../lib/validations/ValidationsSchemas";

const PropertyForm = ({ submitionHandler, responseErrors }) => {
  const router = useRouter();
  const { errors, handleSubmit, register, setError, control } = useForm({
    resolver: yupResolver(newPropertyValidations),
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
      <PropertyImagesField errors={errors} register={register} />
      <PropertyFeaturesFields
        control={control}
        errors={errors}
        register={register}
      />
      <LandFeaturesFields errors={errors} register={register} />
      <ExtraDescription register={register} />

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
