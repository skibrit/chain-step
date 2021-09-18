import { combineReducers } from "redux";
import workReducer from "./workReducer";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  toastr: toastrReducer,
  work: workReducer,
});
export default rootReducer;
