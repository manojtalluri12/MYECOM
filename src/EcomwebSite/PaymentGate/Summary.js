import React from "react";
import { useMydata } from "../../EcomContext/EcomContext";

const Summary = ({findingpart}) => {
  const {  alldata, setalldata }=useMydata()
  const handledelete = (id) => {
    console.log(id);
    const fillter = alldata.filter((each) => each.id !== id);
    setalldata(fillter);
  };
  return (
    <div>
      <div className="addressummary">
        <p className="summarypara">
          if you want change address delete address and go back enter new
          address
        </p>
        <p>Delivey:- </p>
        {alldata.map((each) => {
          const { id, name, email, moblie, address } = each;
          return (
            <div>
              <p>{name}</p>
              <p>{email}</p>
              <p>{moblie}</p>
              <p>{address}</p>
              <button onClick={() => handledelete(id)}>delete</button>
            </div>
          );
        })}
      </div>
      <div className="summarygrid">
        <div>
          <img
            src={findingpart.thumbnail}
            alt={findingpart.id}
            className="summaryimages"
          />
        </div>
        <div>
          <p>{findingpart.title}</p>
          <p>${findingpart.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
