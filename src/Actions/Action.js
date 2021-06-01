import React from "react";
import { getmedia } from "../Api";
import { GET_MEDIA } from "../Constants/ReduxConstants";

export const Increment = () => {
  return {
    type: "Increment",
    payload: 1,
  };
};
export const Decrement = () => {
  return {
    type: "Decrement",
    payload: 1,
  };
};

export const getAllPizza = () => (dispatch) => {
  getmedia().then(({ data }) => {
    dispatch({
      type: GET_MEDIA,
      payload: { data: data },
    });
  });
};
