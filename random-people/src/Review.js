import { useState } from "react";
import React from "react";
import Data from "./Data";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { ImQuotesRight } from "react-icons/im";

const Review = () => {
  const [index, setIndex] = useState(2);
  const checkNumber = (number) => {
    if (number > Data.length - 1) {
      return 0;
    }

    if (number < 0) {
      return Data.length - 1;
    }

    return number;
  };
  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const surprisePerson = () => {
    let randomNum = Math.floor(Math.random() * Data.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    setIndex(checkNumber(randomNum));
  };

  const { id, name, image, text, job } = Data[index];
  return (
    <>
      <section className="review" id={id}>
        <img src={image} alt="avatar" className="img-avatar"></img>

        <h4 className="fullname">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btns">
          <button className="btn-prev" type="button" onClick={prevReview}>
            <FcPrevious className="icon" />
          </button>
          <button className="btn-next" type="button" onClick={nextReview}>
            <FcNext className="icon" />
          </button>
        </div>
        <button className="btn-surprise" type="button" onClick={surprisePerson}>
          surprise me
        </button>
      </section>
    </>
  );
};

export default Review;
