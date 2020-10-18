import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "semantic-ui-react";
import { newPropertyValidations } from "../../../lib/validations/PropertiesValidationsSchemas";
import PropertyFeaturesFields from "./PropertyFeaturesFields";
import PropertyImagesField from "./PropertyImagesField";
import LandFeaturesFields from "./LandFeaturesFields";
import ExtraDescription from "./ExtraDescription";
import { yupResolver } from "@hookform/resolvers";

const PropertyForm = ({ submitionHandler }) => {
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(newPropertyValidations),
  });

  return (
    <Form
      id="propertyForm"
      className="large"
      onSubmit={handleSubmit(submitionHandler)}
    >
      <PropertyImagesField errors={errors} register={register} />
      <PropertyFeaturesFields errors={errors} register={register} />
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
      </div>
    </Form>
  );
};

export default PropertyForm;
