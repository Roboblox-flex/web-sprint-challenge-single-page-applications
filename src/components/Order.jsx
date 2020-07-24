import React from "react";
import { useRouteMatch } from "react-router-dom";

export default function Order({ order }) {
  if (!order) {
    return <h3>Working fetching your order...</h3>;
  }

  const toppingArr = Object.keys(order.toppings);

  return (
    <div className="order container">
      <h2>{order.name}</h2>
      <p>Size: {order.size}</p>
      <p>Special Instructions: {order.instructions}</p>

      <div>
        Toppings:
        <ul>
          {toppingArr.map((topping, id) => (
            <li key={id}>{topping}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
