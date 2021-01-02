import React from "react";
// import "./recipe.style";

const Recipe = ({ title, imgSrc, calories, ingredients }) => {
  return (
    <div className="card mt-5" style={{ width: "18rem" }}>
      <img src={imgSrc} className="card-img-top" alt={imgSrc} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{Math.round(calories)}</p>
      </div>
      <ul className="list-group list-group-flush">
        {ingredients.map((ingredient) => {
          return (
            <li className="list-group-item" key={ingredient}>
              {ingredient}
            </li>
          );
        })}
      </ul>
      {/* <div className="card-body"></div> */}
    </div>
  );
};

export default Recipe;
