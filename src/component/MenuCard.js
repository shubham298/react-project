
import { CDN_URL } from "../utils/constant";

const MenuCard = (resInfo) => {
    const data = resInfo?.map((card) => {
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
      })
      return data
}

export default MenuCard