import { toastr } from "react-redux-toastr";

export const showErrorAlert = (
  errMsg = "Something went wrong, Please try again"
) => {
  toastr.error("Error", errMsg);
};

export const showSuccessAlert = (errMsg = "Some Success Msg") => {
  toastr.success("Success", errMsg);
};
