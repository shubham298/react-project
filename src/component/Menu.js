import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_URL } from "../utils/constant";

const Menu = () => {
        const [resInfo, setResInfo] = useState();
        const { id } = useParams();
        const fetchData = async () => {
          const json = await fetch(MENU_URL + id);
          const resMenu = await json.json();
          let resArray =
            resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
          let recommendedCards = resArray?.filter((ele) => {
            return ele.card.card.title === "Recommended";
          });
          
          setResInfo(recommendedCards[0]?.card?.card?.itemCards);
          return;
        };
      
        useEffect(() => {
          fetchData();
        }, []);
      
        if (!resInfo?.length) {
          console.log("Shimmer");
          return <Shimmer />;
        }
      
        return (
          <>
            <h1>Menu Page </h1>
            {resInfo?.map((card) => {
              return (
                <div key={card.card.info.id} className="menu-card">
                  <ul>
                    {" "}
                    <h3>{card.card.info.name}</h3>
                  </ul>
                  <ul>
                    <img
                      src={CDN_URL + card?.card?.info?.imageId}
                      width="200"
                      height="200"
                      align="center"
                    ></img>{" "}
                  </ul>
                  <ul>
                    {" "}
                    <p>&#8377; {card.card.info.price / 100}</p>
                  </ul>
                  <ul>
                    {" "}
                    <p>{card.card.info.description}</p>
                  </ul>
                </div>
              );
            })}
          </>
        );
};

export default Menu;
