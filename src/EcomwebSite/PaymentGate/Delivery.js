import React, { useState } from "react";
import Summary from "./Summary";
import Form from "./Form";
import Payment from "./Payment";
import "./payment.css";
import { useParams } from "react-router-dom";
import { useMydata } from "../../EcomContext/EcomContext";
const Delivery = () => {
  const { data }=useMydata()
  //console.log(cart);
  const { id } = useParams();
 // console.log(id);
  const findingpart = data.find((each) => each.id == id);
  //console.log(findingpart);
  const [step, setStep] = useState(0);
  const datas = [
    <Form  />,
    <Summary
      findingpart={findingpart}
  
    />,
    <Payment  id={findingpart.id} />,
  ];
  const handlePrevious = () => {
    if (step > 0) setStep(step - 1);
  };
  const handleContune = () => {
    if (step < 2) setStep(step + 1);
  };
  return (
    <div>
      <div>
        <div className="devlieryprocess">
          <p className={step >= 0 ? "process1" : ""}>1</p>
          <p className={step >= 1 ? "process1" : ""}>2</p>
          <p className={step >= 2 ? "process1" : ""}>3</p>
        </div>
        <div className="MainProcess">{datas[step]}</div>
      </div>
      <div className="belowprocess">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleContune}>Next</button>
      </div>
    </div>
  );
};

export default Delivery;
