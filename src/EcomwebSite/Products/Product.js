import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../../index.css";
import "./product.css";
import BounceLoader from "react-spinners/BounceLoader";
import { MdOutlineLocalOffer } from "react-icons/md";
import { useMydata } from "../../EcomContext/EcomContext";
import Pagenation from "../Pagenation/Pagenation";
const override = {
  display: "block",
  margin: "0 auto",
};
const Product = () => {
  const { data, loading,page}=useMydata();
  // console.log(data);
  const [search, SetSearch] = useState("");
  let [color, setColor] = useState("#36d7b7");
  return (
    <div className="ProductBar">
      <div className="productcenter">
        <p className="protitle">Search items</p>
        <input
          type="text"
          value={search}
          onChange={(e) => SetSearch(e.target.value)}
          placeholder="Serach items"
          className="sameform"
        />
      </div>
      <hr/>
      {loading && (
        <BounceLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      <div className="productCard">
        {data.length > 0 &&
          page
            .filter((each) =>
              each.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((each) => {
              const { id, title, price, thumbnail, discountPercentage } = each;
              return (
                <Link to={`/details/${id}`} key={id} className="prodcutcards">
                  <img src={thumbnail} className="productimg" />
                  <div className="productcenter">
                    <p className="producttitle">{title}</p>
                    <button className="button">${price}</button>
                  </div>
                </Link>
              );
            })}
      </div>
      <Pagenation/>
    </div>
  );
};

export default Product;
