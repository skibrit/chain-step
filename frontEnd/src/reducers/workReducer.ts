import ActionType from "../actionTypes";

const initialState = {
  workList: [],
  workCount: 0,
  selectedWork:null,
  isFetching: true,
};

export default function workReducer(state = initialState, action:any) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
