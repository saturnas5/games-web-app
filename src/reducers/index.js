import {combineReducers} from "redux";
import gamesReducer from "./gamesReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    user: userReducer,
});

export default rootReducer;