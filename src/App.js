import React, {useEffect} from "react";
import {loadGames} from "./reducers/actions/gamesActions";
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames())
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
