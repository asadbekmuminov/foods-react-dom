import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
function Create() {
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [img, setImg] = useState("");
  const [method, setMethod] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState("");
  const navigate = useNavigate();

  const { data, isPending, error, getNewResipes } = useFetch(
    "https://feather-workable-soybean.glitch.me/recipes",
    "POST"
  );
  const handleAdd = (e) => {
    e.preventDefault();
    if (!ingredients.includes(ingredient)) {
      setIngredients((prev) => {
        return [...prev, ingredient];
      });
    }
    setIngredient("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getNewResipes({
      id: uuidv4(),
      cookingTime: `${cookingTime} minutes`,
      img,
      title,
      method,
      ingredients,
    });
    setTitle("");
    setCookingTime("");
    setImg("");
    setMethod("");
  };
  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Create new recipe </h1>
      <form className="flex flex-col items-center gap-3 mb-10">
        <input
          type="text"
          required
          placeholder="Title"
          className="input input-bordered input-accent w-full max-w-xs font-bold text-white"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <input
          type="text"
          required
          placeholder="Cooking time"
          className="input input-bordered input-accent w-full max-w-xs font-bold text-white"
          onChange={(e) => {
            setCookingTime(e.target.value);
          }}
          value={cookingTime}
        />
        <div className="flex items-center gap-3">
          <input
            type="text"
            required
            placeholder="Ingredient"
            className="input input-bordered input-accent w-full max-w-xs font-bold text-white"
            onChange={(e) => {
              setIngredient(e.target.value);
            }}
            value={ingredient}
          />
          <button onClick={handleAdd} className="btn btn-success">
            Add
          </button>
        </div>
        <h1 className="text-xl font-bold mr-auto w-[320px]">
          Ingredients:
          {ingredients &&
            ingredients.map((ing) => {
              return (
                <span className="text-white" key={ing}>
                  {" "}
                  {ing},{" "}
                </span>
              );
            })}
        </h1>
        <textarea
          type="text"
          required
          placeholder="Method"
          className="textarea input-bordered input-accent w-full max-w-xs font-bold text-white"
          onChange={(e) => {
            setMethod(e.target.value);
          }}
          value={method}
        />
        <input
          type="url"
          required
          placeholder="Image URL"
          className="input input-bordered input-accent w-full max-w-xs font-bold text-white"
          onChange={(e) => {
            setImg(e.target.value);
          }}
          value={img}
        />
        <button
          onClick={handleSubmit}
          className="btn btn-outline btn-warning w-full"
        >
          Submit
        </button>
        <Link to={"/"} className="btn btn-outline ml-auto">
          Home
        </Link>
      </form>
    </div>
  );
}

export default Create;
