import * as Yup from "yup";

export const FORMIK_RESERVATIONS_VALIDATIONS = Yup.object().shape({
  fullname: Yup.string().required("*Required"),
  email: Yup.string().email().required("*Required"),
  phone: Yup.string().required("*Required"),
  guests: Yup.number().required("*Required"),
  date: Yup.date().required("*Required"),
  time: Yup.string().required("*Required"),

});
