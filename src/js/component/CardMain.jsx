import React from "react";

const CardMain = ({
    tittle, 
    description,
    button,
    image
}) => {
  return (
    <div className="card">
      <img src= {image} id="Photo" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{tittle}</h5>
        <p className="card-text">
          {description}
        </p>
        <a href="#" className="btn btn-primary">
          {button}
        </a>
      </div>
    </div>
  );
};

export default CardMain;
