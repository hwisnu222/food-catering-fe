import { useState } from "react";
import { Validation } from "../utils/validation";

const getInitialState = (form) => {
  const temp = {};
  Object.keys(form).forEach((key) => {
    Object.assign(temp, { [key]: null });
  });

  return temp;
};

/**
 *
 * @param {object} form
 * @returns {isError: boolean, handleSubmit: function, errors: object}
 *
 * use:
 * initial hook
 *  const {isError, handleSubmit, errors} = useFrom(from)
 *
 * component:
 * <Button onClick={handleSubmit(handleSubmitForm)}>Submit</Button>
 */

export default function useForm(form) {
  const [errors, setErrors] = useState(getInitialState(form));
  const [isError, setIsError] = useState(false);

  const handleSubmit = (submitFn) => {
    const validate = Validation.form(form);
    setErrors(validate.errors);
    setIsError(validate.isError);

    if (!validate.isError) {
      submitFn();
    }
  };

  return { isError, handleSubmit, errors };
}
