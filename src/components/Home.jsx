import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  const orderNow = () => {
    if (true) {
      history.push("/pizza");
    }
  };

  return (
    <div className="home-wrapper">
      <button onClick={orderNow} className="order-button">
        Order now!
      </button>
    </div>
  );
}
