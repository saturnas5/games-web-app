import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import { countGamesGenresInLibrary, genresArr } from "../../utils/_utils";
import InfoStatsBar from "../InfoStatsBar";

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

    function statsSliderHandler(num) {
        return (num / countTotalGamesLibrary()) * 100;
    }

    function countGamesByLibrary(user) {
        const librariesKeys = Object.keys(user.library);
        return librariesKeys.map(key => {
            return {library: key ,count: user.library[key].length}
        })
    }

    return (
        <div className='overview'>
            <h2 className="overview__title">
                {`Total Games in Your Library: ${countTotalGamesLibrary()}`}
            </h2>
            <div className="overview__genres">
                <h3 className="overview__stats-title">
                    Games Overview By Genres
                </h3>
                {genresArr.map((genre, index) => {
                    return (
                        <>
                            {
                                countGamesGenresInLibrary(user)[genre].length > 0
                                &&
                                <InfoStatsBar
                                    key={index}
                                    title={genre}
                                    percentage={statsSliderHandler(countGamesGenresInLibrary(user)[genre].length)}
                                    count={countGamesGenresInLibrary(user)[genre].length}
                                />
                            }
                        </>
                    )
                })}
            </div>
            <div className="overview__library">
                <h3 className="overview__stats-title">
                    Games Overview By Librarys
                </h3>

                {
                    countGamesByLibrary(user).map(library => {
                        return (
                            <>
                                {
                                    library.count > 0
                                    &&
                                    <InfoStatsBar
                                        key={library.library}
                                        count={library.count}
                                        title={library.library}
                                        percentage={statsSliderHandler(library.count)}
                                    />
                                }
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Overview;