import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import MenuCard from "./MenuCard";

const Menu = () => {
  const { id , name} = useParams();
  const resInfo = useRestaurantMenu(id);
  if (!resInfo?.length) {
    return (<Shimmer></Shimmer>);
  }
  return (
    <>
      <h1> {"Menu : " + name} </h1>
      <div className="menu-container">
      {resInfo.map((ele) => {
        return <MenuCard card={ele} key={ele.card.info.id} />;
      })}
      </div>
    
    </>
  );
};

export default Menu;
