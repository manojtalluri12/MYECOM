import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const EcomContext = createContext();

const EcomProvider = ({ children }) => {
  const [alldata, setalldata] = useState([]);
  const [menu, setmenu] = useState(true);
  const [data, SetData] = useState([]);
  const [page, setperPage] = useState([]);
  const [cart, SetCart] = useState([]);
  const [order, setOrder] = useState([]);
  const [loading, setloading] = useState(false);
  // console.log(page);
  useEffect(() => {
    setloading(true);
    const data = async () => {
      const poduct = await fetch("https://dummyjson.com/products?limit=50");
      const data = await poduct.json();
      const productsdetails = data.products;
      SetData(productsdetails);
      setperPage(productsdetails.slice(0, 10));
      setloading(false);
    };
    data();
  }, []);
  const pageHandler = (pagenumber) => {
    setperPage(data.slice(pagenumber * 10 - 10, pagenumber * 10));
  };
  const notify = () => {
    toast.success("Product Added To Cart", {
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
  const orersucess = () => {
    toast.success("sucessfully ordered item", {
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
  
  const handleCart = (id) => {
    notify();
    // window.alert("YOUR PRODUCT IS ADDED");
    const find = data.find((each) => each.id == id);
    SetCart([...cart, find]);
    if (cart.length >= 1) {
      const filter = cart.filter((each) => each.id !== id);
      SetCart([...filter, find]);
    }
  };
  const handleDelete = (id) => {
    const filter = cart.filter((each) => each.id !== id);
    SetCart(filter);
  };
  const handleplaceOrder = (id) => {
    orersucess()
    const find = data.find((each) => each.id === id);
    setOrder([...order, find]);
    const filter = cart.filter((each) => each.id !== id);
    SetCart(filter);
  };
  const handlemenu = () => {
    setmenu((m) => !m);
  };
  return (
    <EcomContext.Provider
      value={{
        menu,
        setmenu,
        alldata,
        setalldata,
        data,
        SetData,
        cart,
        SetCart,
        order,
        setOrder,
        loading,
        setloading,
        handleCart,
        handleDelete,
        handleplaceOrder,
        handlemenu,
        page,
        pageHandler,
      }}
    >
      {children}
    </EcomContext.Provider>
  );
};

function useMydata() {
  const context = useContext(EcomContext);
  return context;
}

export { EcomProvider, useMydata };
