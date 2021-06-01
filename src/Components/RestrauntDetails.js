import React, { Component, useState, useEffect } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Mediadata from "./mediadata";
import { getmedia } from "../Api";
import { getAllPizza } from "../Actions/Action";

const RestrauntDetails = () => {
  // let dispatch = useDispatch();
  // const { media } = useSelector((state) => state.media);
  const [mediadata, setmediadata] = useState([]);
  useEffect(() => {
    getmedia().then(({ data }) => {
      console.log(data);
      setmediadata(data);
    });
    // dispatch(getAllPizza());
  }, []);

  return (
    <div className="Container-fluid " style={{ backgroundColor: "black" }}>
      {console.log(mediadata)}
      <div className="row">
        <div className="col-sm-12 col-lg-12 col-md-12 col-xs-12">
          <NavBar />
          <h1 className="mt-5 pt-5 pb-5 mb-5" style={{ color: "white" }}>
            <b>Our Menu!</b>
          </h1>
          <div className="row ml-lg-5">
            {mediadata &&
              mediadata.map((e, i) => (
                <Mediadata key={i + Math.random()} data={e} />
              ))}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default RestrauntDetails;
