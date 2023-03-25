import React, { useState } from "react";
import "./Form.css";


const Form = ({ newFood }) => {
  const INITIAL_STATE = {
    name: "",
    description: "",
    recipe: "",
    serve: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newFood({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <>
      <h1>Add New Food or Drink</h1>
      <form className="Form" onSubmit={handleSubmit}>
        <label 
          htmlFor="itemType">What are you adding?:</label>
        <select 
         required name="itemType" 
         onChange={handleChange}>
          <option value=""></option>
          <option value={formData.itemType}>Snack</option>
          <option value={formData.itemType}>Drink</option>
        </select>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <label htmlFor="description">description: </label>
        <textarea
          id="description"
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="recipe">Recipe: </label>
        <textarea
          id="recipe"
          type="text"
          name="recipe"
          placeholder="Recipe"
          value={formData.recipe}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="serve">Serve: </label>
        <textarea
          id="serve"
          type="text"
          name="serve"
          placeholder="Serve"
          value={formData.serve}
          onChange={handleChange}
        ></textarea>
        <br/>
        <button>Add</button>
      </form>
    </>
  );
};

export default Form