import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import * as Yup from "yup";
import Form from "./components/Form.jsx";
import Home from "./components/Home.jsx";
import Order from "./components/Order.jsx";
import formSchema from "./formSchema";

const initialFormValues = {
  name: "",
  size: "",
  toppings: {
    pepperoni: true,
    mushrooms: true,
    onion: true,
    sausage: true,
  },
  instructions: "",
};

const initialFormErrors = {
  name: "",
  size: "",
};
const initialDisabled = true;
const App = () => {
  const [orders, setOrders] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const onSubmit = (evt) => {
    evt.preventDefault();

    console.log("submitted!");

    axios
      .post("https://reqres.in/api/users", formValues)
      .then((res) => {
        setOrders([...orders, res.data]);
        console.log(res.data);
      })
      .catch((err) => console.log(err.response))
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;

    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      },
    });
  };
  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
  return (
    <div className="App">
      <nav>
        <h1>Lambda Eats</h1>
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/pizza/order">Cart</Link>
        </div>
      </nav>

      <Switch>
        <Route path="/pizza/order">
          {orders.map((order) => {
            return <Order key={order.id} order={order} />;
          })}
        </Route>

        <Route path="/pizza">
          <Form
            values={formValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
