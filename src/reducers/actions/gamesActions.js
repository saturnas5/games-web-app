import axios from "axios";
import {popularGamesURL} from "../../api/api";

export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGamesURL());
    console.log(popularData)
    dispatch({
        type: 'FETCH_GAMES',
        payload: popularData.data.results
    })
}