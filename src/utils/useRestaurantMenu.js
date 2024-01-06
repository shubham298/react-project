import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (id) => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(() => { fetchData(id);}, []);

    const fetchData = async (id) => {
        const json = await fetch(MENU_URL + id);
        const resMenu = await json.json();
        let resArray = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        let recommendedCards = resArray?.filter((ele) => {
            return ele.card.card.title === "Recommended";
        });
        console.log("recommendedCards", recommendedCards)
        setResInfo(recommendedCards[0]?.card?.card?.itemCards);
        console.log("final resIndo", resInfo)
        return;
    };

    return resInfo;

}

export default useRestaurantMenu;