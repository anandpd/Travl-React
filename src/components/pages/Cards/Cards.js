import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  const cardData = [
    {
      image: "images/img-9.jpg",
      text: "Explore The Hidden Waterfall",
      label: "Adventure",
      path: "/services",
    },
    {
      image: "images/img-3.jpg",
      text: "Explore The Hidden Waterfall 1",
      label: "Adventure",
      path: "/services",
    },
    {
      image: "images/img-4.jpg",
      text: "Explore The Hidden Waterfall 2",
      label: "Adventure",
      path: "/services",
    },
    {
      image: "images/img-2.jpg",
      text: "Dive into Bali",
      label: "Luxury",
      path: "/services",
    }
  ];
  return (
    <div className='cards'>
      <h1> Check out these Epic Destination !</h1>
      <div className='cards__container'>
        <div class='cards__wrapper'>
          <ul className='cards__items'>
            {cardData.map((card) => (
              <CardItem
                src={card.image}
                text={card.text}
                label={card.label}
                path={card.path}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
