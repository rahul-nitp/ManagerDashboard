import { combineReducers } from 'redux';
import  ManagerReducer  from "./manager_reducer";

const rootReducer = combineReducers({
  managerData : ManagerReducer
});

export default rootReducer;
                              