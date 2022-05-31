import React, {useEffect} from "react";
import {loadPopularGames, loadNewGames, loadUpcomingGames} from "./reducers/actions/gamesActions";

import Main from "./pages/Main";
import Header from "./components/Header";

function App() {

  return (
    <div className="App">
        <Header/>
      <Main/>
    </div>
  );
}

export default App;
