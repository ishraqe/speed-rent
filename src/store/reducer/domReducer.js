import { PATH_CHECK } from "../action/types";

const INITIAL_STATE = {
  path: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PATH_CHECK:
      console.log(action);
      return { ...state, path: "ok" };
    default:
      return state;
  }
};
