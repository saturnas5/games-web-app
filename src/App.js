import React, {useEffect} from "react";
import {loadPopularGames, loadNewGames, loadUpcomingGames} from "./reducers/actions/gamesActions";
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPopularGames())
    dispatch(loadNewGames())
    dispatch(loadUpcomingGames())
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
