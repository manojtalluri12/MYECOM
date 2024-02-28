import React from "react";
import { useMydata } from "../../EcomContext/EcomContext";

const Pagenation = () => {
  const { data, pageHandler } = useMydata();
  let pagenumbers = [];
  for (let i = 1; i < Math.ceil(data.length / 10) + 1; i++) {
    pagenumbers.push(i);
  }
  return (
    <div className="pagenationcenter">
      <center className="pagnation">
        {pagenumbers.map((page) => {
          return (
            <button onClick={() => pageHandler(page)} className="pagnationbtn">
              {page}
            </button>
          );
        })}
      </center>
    </div>
  );
};

export default Pagenation;
