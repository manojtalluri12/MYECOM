import React, { useState } from "react";
import Button from "../../Button/Button";
import "./detail.css";
//import { Link } from "react-router-dom";
import RelatedProduct from "./RelatedProduct";
import { useMydata } from "../../../EcomContext/EcomContext";
const DetailofProduct = ({
  pro,
  Handleone,
  imgs,
  boxin,

}) => {
  
  const { data, handleCart }=useMydata()
  const finding = data.find((each) => each.category === pro.category);
  return (
    <div key={pro.id}>
      <div className="card">
        <div className="left">
          <div>
            <img src={imgs[boxin]} alt={pro.id} className="imgs" />
          </div>
          <div className="flex">
            {imgs.map((each, index) => {
              return (
                <div className="flex">
                  <img
                    src={imgs[index]}
                    alt="bkbk"
                    className="size"
                    onClick={() => Handleone(index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="right">
          <p className="rightside">{pro.description}</p>
          <p className="green rightside">{pro.rating} ✩</p>
          <p className="rightside">
            {" "}
            <span className="detspan">Brand: </span>
            {pro.brand}
          </p>
          <p className="rightside">
            <span className="detspan">category: </span>
            {pro.category}
          </p>
          <h1 className="title rightside">{pro.title}</h1>
          <p className="rightside">
            {" "}
            <span className="detspan">Special price : </span>{" "}
            <span className="price">${pro.price}</span> <strike>$ 999</strike>
          </p>
          <Button onclick={() => handleCart(pro.id)} className="rightside">
           Add Cart
          </Button>
        </div>
      </div>
      <hr />
      <h3 className="textalign">Related Products</h3>
      <hr />
      <div className="RetatedProducts">
        <RelatedProduct data={data} pro={pro} />
      </div>
    </div>
  );
};
export default DetailofProduct;
/*
<div className="flex">
            <img
              src={pro.images[0]}
              alt="bkbk"
              className="size"
              onClick={() => Handleone(0)}
            />
          </div>
          <div className="flex">
            <img
              src={pro.images[1]}
              alt="bkbk"
              className="size"
              onClick={() => Handleone(1)}
            />
          </div>
          <div className="flex">
            <img
              src={pro.images[2]}
              alt="bkbk"
              className="size"
              onClick={() => Handleone(2)}
            />
          </div>
          <div className="flex">
            <img
              src={pro.images[3]}
              alt="bkbk"
              className="size"
              onClick={() => Handleone(3)}
            />
          </div> */
