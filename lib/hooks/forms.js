import { useEffect } from "react";
import { validationsAfterSubmit } from "../validations/ValidationsSchemas";

export const useErrorsAfterSubmit = (responseErrors, setError) => {
  useEffect(() => {
    if (responseErrors) {
      validationsAfterSubmit(
        responseErrors
      ).forEach(({ name, type, message }) => setError(name, { type, message }));
    }
  }, [responseErrors]);
};
