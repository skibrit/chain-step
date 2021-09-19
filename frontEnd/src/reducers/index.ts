import { combineReducers } from "redux";
import artistReducer from "./artistReducer";
import albumReducer from "./albumReducer";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  toastr: toastrReducer,
  artist: artistReducer,
  album: albumReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
