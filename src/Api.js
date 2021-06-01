import axios from "axios";

export const getResturants = () => {
  return axios.get("http://localhost:3000/restaurant");
};

export const postRestaurant = (data) => {
  return axios.post("http://localhost:3000/restaurant", data);
};

export const getHomepageData = () => {
  return axios.get("http://localhost:3000/homePageData");
};
export const getmedia=()=>{
   return axios.get("http://localhost:3000/media");
};
export const postReservations=(data)=> {
  return axios.post("http://localhost:3000/reservations",data);
};
export const getAboutus=()=>{
  return axios.get("http://localhost:3000/Aboutus")
}