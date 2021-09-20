export const decodeErrorMessage = (errors) => {
  if (errors?.request) {
    return errors.request.responseText;
  }
  return "Something went wrong. Please try again later";
};
