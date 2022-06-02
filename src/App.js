import React from "react";
import { Route, Switch } from 'react-router-dom';

import Main from "./pages/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameDetails from "./pages/GameDetails";

function App() {

  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route exact path={['/', '/games/platforms/:name/:id', '/genres/:genre']}>
                <Main/>
            </Route>
            <Route path='/game/:slug/:id'>
                <GameDetails/>
            </Route>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
