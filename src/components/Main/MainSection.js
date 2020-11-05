import React from "react";
import "../../App.css";
import "./MainSection.css";
import { Button } from "../Button/Button";

const MainSection = () => {
  return (
    <div className='main-container'>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for ?</p>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          GET STARTED !
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'>
          WATCH TRAILER <i className='far-fa-play-circle' />
        </Button>
      </div>
    </div>
  );
};

export default MainSection;
