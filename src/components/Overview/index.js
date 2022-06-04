import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {countGamesGenresInLibrary} from "../../utils/_utils";

const Overview = () => {
    const user = useSelector(state => state.user);
    const [action, setAction] = useState([]);

    useEffect(() => {

    }, [])

    function countTotalGamesLibrary() {
        let keysArr = Object.keys(user.library);
        let sum = 0;
        for(let i = 0; i < Object.keys(user.library).length; i++) {
            sum = sum += user.library[keysArr[i]].length;
        }
        return sum;
    }


    return (
        <div className='overview'>
            <div className="box">
                <div className="in-box" style={{width: `${countTotalGamesLibrary()}%`}}>

                </div>
            </div>
        </div>
    );
};

export default Overview;