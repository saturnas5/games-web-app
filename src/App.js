import React, {useEffect} from "react";
import { Route, Switch } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {tryLocalSignin} from "./reducers/actions/userActions";

import Main from "./pages/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameDetails from "./pages/GameDetails";
import Login from "./pages/Login";

function App() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!user.isLoggedIn) {
            dispatch(tryLocalSignin());
        }
        console.log('user not logged')
    }, [])

  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route exact path={['/', '/games/platforms/:name/:id', '/genres/:genre', '/new-releases/:from/:to']}>
                <Main/>
            </Route>
            <Route path='/game/:slug/:id'>
                <GameDetails/>
            </Route>
            <Route exact path='/login'>
                <Login/>
            </Route>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
