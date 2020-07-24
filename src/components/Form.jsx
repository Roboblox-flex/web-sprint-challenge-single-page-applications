import React from "react";
import { useRouteMatch } from "react-router-dom";

function Form(props) {
  const {
    values,
    onInputChange,
    onCheckboxChange,
    onSubmit,
    disabled,
    errors,
  } = props;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <h2>Build Your Own Pizza</h2>
        </div>
        <div>
          <label>
            Name:&nbsp;
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={onInputChange}
              placeholder="Name"
            />
          </label>
          <div>
            <div>{errors.name}</div>
          </div>
          <br />
          <br />
          <label>
            Pizza Size:&nbsp;
            <select onChange={onInputChange} value={values.size} name="size">
              <option value="">- Select a Size -</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </label>
          <br />
          <br />
          <div>
            <h3>Add Toppings</h3>

            <label>
              Pepperoni
              <input
                name="pepperoni"
                type="checkbox"
                onChange={onCheckboxChange}
                checked={values.toppings.pepperoni}
              />
            </label>
            <br />
            <label>
              sausage
              <input
                name="sausage"
                type="checkbox"
                onChange={onCheckboxChange}
                checked={values.toppings.sausage}
              />
            </label>
            <br />
            <label>
              Onion
              <input
                name="onion"
                type="checkbox"
                onChange={onCheckboxChange}
                checked={values.toppings.onion}
              />
            </label>
            <br />
            <label>
              Mushrooms
              <input
                name="mushrooms"
                type="checkbox"
                onChange={onCheckboxChange}
                checked={values.toppings.mushrooms}
              />
            </label>
          </div>
          <br />
          <br />
          <label>
            Special Instructions:&nbsp;
            <input
              type="text"
              name="instructions"
              value={values.instructions}
              onChange={onInputChange}
              placeholder="Special Instructions"
            />
          </label>
          <br />
          <br />
          <div>
            <button disabled={disabled}>Add to Order</button>
          </div>
        </div>
        <br />
        <br />
      </form>
    </div>
  );
}

export default Form;
