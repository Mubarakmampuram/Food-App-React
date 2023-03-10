import Counter from "./Counter";
import "./MediaCard.css";

function MediaCard({ data }) {
  return (
    <div>
      {data?.map((dish) => {
        //console.log(dish.dish_id);
        return (
          <div className="card">
            <div className="container">
              <h2>
                <b>{dish.dish_name}</b>
              </h2>
              <div className="spa">
                <h4>price :{dish.dish_price} SAR</h4>
                <h4>Calories:{dish.dish_calories}Cals</h4>
              </div>
              <p>{dish.dish_description}</p>
              <p>{dish.dish_id}</p>
              <Counter id={dish.dish_id}></Counter>
              {dish.addonCat.length ? <h3>Customization Available</h3> : null}
            </div>
            <img
              src="https://static.onecms.io/wp-content/uploads/sites/19/2005/07/25/hot-cold-chicken-spinach-salad-su-2000.jpg"
              alt="Food"
            />
          </div>
        );
      })}
    </div>
  );
}

export default MediaCard;
