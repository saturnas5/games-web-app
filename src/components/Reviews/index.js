import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {formatDate} from "../../utils/_utils";
import Review from "../Review";

const Reviews = () => {
    const user = useSelector(state => state.user);
    const [allRates, setAllRates] = useState([]);

    useEffect(() => {
        setAllRates(handleGetRatedGames())
    }, [user.reviews])

    function handleGetRatedGames() {
        const revKeys = Object.keys(user.reviews)
        let allRatedGames = []
        for(let i = 0; i < revKeys.length; i++) {
            for(let j = 0; j < user.reviews[revKeys[i]].length; j++) {
                allRatedGames.push(user.reviews[revKeys[i]][j])
            }
        }
        return allRatedGames;
    }

    return (
        <div className="reviews">
            {allRates.map(game => {
                return (
                    <>
                        {
                            <Review
                                key={game.id}
                                userImg={user.settings.profileImg}
                                user={`${user.settings.firstName} 
                                ${user.settings.lastName} `}
                                game={game}
                            />
                        }
                    </>
                )
            })}
        </div>
    )
};

export default Reviews;