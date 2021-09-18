export const decodeErrorMessage = (errors) => {
  if (Array.isArray(errors) && errors.length > 0) {
    return errors.map((err) => err.msg).join(" \n ");
  }
  return "Something went wrong. Please try again later";
};
