import React from "react";
import { Formik, Form, Field } from "formik";
import Navbar from "./Navbar";
import { postReservations } from "../Api";
import { FORMIK_RESERVATIONS } from "../Constants/FormikInitialValues";
import { FORMIK_RESERVATIONS_VALIDATIONS } from "../Constants/FormikValidations";

const FormikReservations = () => {
  const handleSubmitForm = (values, { setSubmitting, resetForm }) => {
    console.log("Called", values);

    let data = {
      id: Math.random(),
      fullname: values.fullname,
      email: values.email,
      phone: values.phone,
      guests: values.guests,
      date: values.date,
      time: values.time,
    };

    postReservations(data).then(({ data }) => {
      console.log("Called", data);
      alert("Reservation submitted Successfully ");
    });
    setSubmitting(false);
    resetForm({});
  };
  return (
    <div className="Container-fluid text-center background1">
      <Navbar />
      <div className="row">
        <div className="col-sm-12 col-lg-12 col-md-12 col-xs-12">
          <div className="col-sm-12 col-lg-4 offset-lg-6 mt-5 pt-5">
            <h1 className="mt-5 pt-5" style={{ color: "white" }}>
              Reservation
            </h1>
            <Formik
              initialValues={FORMIK_RESERVATIONS}
              onSubmit={handleSubmitForm}
              validationSchema={FORMIK_RESERVATIONS_VALIDATIONS}
            >
              {({
                values,
                errors,
                handleChange,
                handleBlur,
                touched,
                isSubmitting,
              }) => (
                <div>
                  <Form noValidate>
                    <h4 style={{ color: "white" }}>Fullname</h4>

                    <input
                      className="form-control"
                      type="text"
                      name="fullname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fullname}
                    />
                    {errors.fullname && touched.fullname && errors.fullname}
                    <h4 style={{ color: "white" }}>E-mail</h4>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <p style={{ color: "white" }}>
                      {errors.email && touched.email && errors.email}
                    </p>
                    <h4 style={{ color: "white" }}>Phone Number</h4>
                    <input
                      className="form-control"
                      type="text"
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                    {errors.phone && touched.phone && errors.phone}
                    <h4 style={{ color: "white" }}>Guests</h4>
                    <input
                      className="form-control"
                      type="number"
                      name="guests"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.guests}
                    />
                    {errors.guests && touched.guests && errors.guests}
                    <h4 style={{ color: "white" }}>Date</h4>
                    <input
                      className="form-control"
                      type="date"
                      name="date"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.date}
                    />
                    {errors.date && touched.date && errors.date}
                    {errors.guests && touched.guests && errors.guests}
                    <h4 style={{ color: "white" }}>Time</h4>
                    <input
                      className="form-control"
                      type="text"
                      name="time"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.time}
                    />
                    {errors.time && touched.time && errors.time}
                    <button
                      className="btn btn-primary mt-5"
                      type="submit"
                      disabled={isSubmitting}
                      style={{backgroundColor:"orange",border:"1px solid grey",fontSize:"20px"}}
                    >
                      Submit
                    </button>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormikReservations;
