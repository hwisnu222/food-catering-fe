export const Validation = {
    form: (form) => {
      const isError = !Object.values(form).every((item) => item);
      const tempErrors = {};
  
      Object.keys(form).forEach((key) => {
        Object.assign(tempErrors, {
          [key]: form[key] ? null : `${key.replaceAll("_", " ")} is empty`,
        });
      });
  
      return {
        isError,
        errors: tempErrors,
      };
    },
  };
  