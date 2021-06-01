import React from "react";

const MarketingBlock = ({ data, index }) => {
  const { heading, paragraph, image } = data;
  console.log("image", image);
  let imagePosition = "bottom";
  if (index % 2 === 0) {
    imagePosition = "top";
  }
  return (
    <>
      {imagePosition !== "top" ? (
        <div className="row">
          <div className="offset-lg-1 col-sm-12 col-lg-4">
            <h1 className=" mt-5 pt-5 pb-5"style={{  color: "orange" }}>
              <b>{heading}</b>
            </h1>

            <p
              style={{ fontSize: "22px", textAlign: "justify", color: "white",fontFamily:"Arial, Helvetica, sans-serif" }}
            >
              {paragraph}
            </p>
          </div>
          <div className="offset-lg-1 col-sm-12 mt-5 col-lg-4">
            <img
              src={image}
              width="100%"
              height="100%"
          
              alt="Responsive-image"
            />
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="offset-lg-1 col-sm-12 mt-5 col-lg-4 ">
            <img
              src={image}
              width="100%"
              height="100%"
              alt="Responsive-image "
            />
          </div>
          <div className="offset-lg-1 col-sm-12 col-lg-4">
            <h1 className=" mt-5 pt-5 pb-5"style={{  color: "orange" }}>
              <b>{heading}</b>
            </h1>

            <p
              style={{ fontSize: "22px", textAlign: "justify", color: "white" ,fontFamily:"Arial, Helvetica, sans-serif"}}
            >
              {paragraph}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default MarketingBlock;
