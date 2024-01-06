import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useMenuCard from "../utils/useMenuCard";

const Menu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id); // custom hook (custom utility function)
  const menuCard = useMenuCard(resInfo); // custom hook (custom utility function)
  if (!resInfo?.length) {
    return <Shimmer />;
  }
  return (
    <>
      <h1>Menu Page </h1>
      {menuCard}
    </>
  );
};

export default Menu;
