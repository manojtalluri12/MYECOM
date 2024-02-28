import React, { useState } from "react";
import { useMydata } from "../../EcomContext/EcomContext";
import { toast } from "react-toastify";

const Form = () => {
  const formdata = () => {
    toast.success("move to next step we have consider your address", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const warn = () => {
    toast.error('please fill the form', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };

  const { alldata, setalldata } = useMydata();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [address, setaddress] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == "" || email == "" || mobile == " " || address == "") {
      return warn()
    }
    const newtodo = {
      id: new Date().toISOString(),
      name,
      email,
      mobile,
      address,
    };
    setalldata([...alldata, newtodo]);
    setname("");
    setemail("");
    setaddress("");
    setmobile("");
    formdata();
  };
  //console.log(alldata);
  return (
    <div className="from">
      <p className="formfont">Please fil the form before going next step</p>
      <div>
        <div className="fromdelivery">
          <h4 className="formtitle">Fill the address</h4>
        </div>
        <form className="fromdelivery" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Enter Your Name"
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="text"
            value={email}
            placeholder="Enter Your Email"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="text"
            value={mobile}
            placeholder="Enter Your Mobile Number"
            onChange={(e) => setmobile(e.target.value)}
          />
          <textarea
            type="text"
            value={address}
            placeholder="Enter Your Address"
            className="input"
            onChange={(e) => setaddress(e.target.value)}
          />
          <input type="submit" className="button" />
        </form>
      </div>
    </div>
  );
};

export default Form;
