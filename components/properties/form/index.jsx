import React from "react";
import { useForm } from "react-hook-form";
import { newPropertyValidations } from "../../../lib/validations/PropertiesValidationsSchemas";
import PropertyFeaturesFields from "./PropertyFeaturesFields";
import PropertyImagesField from "./PropertyImagesField";
import LandFeaturesFields from "./LandFeaturesFields";
import ExtraDescription from "./ExtraDescription";
import UpdateImagesButton from "./actions/UpdateImagesButton";
import { setFormResolver } from "../../../lib/validations/resolver";
import { useErrorsAfterSubmit } from "../../../lib/hooks/forms";
import GenericForm from "../../shared/form";

const PropertyForm = ({
  submitionHandler,
  responseErrors,
  required = true,
  willUpdate,
  defaultProperty,
  action,
}) => {
  const { errors, handleSubmit, register, setError, control } = useForm({
    resolver: setFormResolver(required, newPropertyValidations, null),
  });

  useErrorsAfterSubmit(responseErrors, setError);

  return (
    <GenericForm
      id="propertyForm"
      handleSubmit={handleSubmit}
      onSubmit={submitionHandler}
      action={action}
    >
      {willUpdate ? (
        <UpdateImagesButton propertyId={defaultProperty.uuid} />
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
    </GenericForm>
  );
};

export default PropertyForm;
