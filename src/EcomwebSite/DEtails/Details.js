import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DetailofProduct from "./INDETAILlIST/DetailofProduct";
import { useMydata } from "../../EcomContext/EcomContext";

const Details = () => {
  const { data, handleCart }=useMydata()
  const { id } = useParams();
  const [boxin, SetboxIn] = useState(0);

  const pro = data.find((each) => {
    return each.id == id;
  });
  //console.log(pro);
  const imgs = [pro.images[0], pro.images[1], pro.images[2], pro.images[3]];
  const Handleone = (p) => {
    SetboxIn(p);
  };
  return (
    <div className="Main">
      <div className="CARD">
        <DetailofProduct
          pro={pro}
          imgs={imgs}
          Handleone={Handleone}
          handleCart
          boxin={boxin}
        />
      </div>
    </div>
  );
};

export default Details;
