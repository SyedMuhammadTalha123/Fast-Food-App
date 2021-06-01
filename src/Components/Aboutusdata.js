import React from "react";

const Aboutusdata = ({ data }) => {
  const { image, title } = data;
  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-lg-3 col-md-12 col-xs-12 offset-lg-9">
          <div className="gallery ">
            <img src={image} width="100%" height="20px" className="responsive" />
            <div className="desc"style={{fontFamily:"Times New Roman, Times, serif",fontSize:"25px",color:"grey"}}><b>{title}</b></div>
          </div>
          
        </div>
      </div>
    </>
  );
};
export default Aboutusdata;
