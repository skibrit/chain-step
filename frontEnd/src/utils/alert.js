import { toastr } from "react-redux-toastr";

export const showErrorAlert = (
  errMsg = "Something went wrong, Please try again"
) => {
  toastr.error(errMsg);
};

export const showSuccessAlert = (errMsg = "Welcome to todo app") => {
  toastr.success(errMsg);
};
