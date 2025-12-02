import { useFormik } from "formik";
import { cartContext } from "../store/CartContext";
import { ModalContext } from "../store/ModalContext";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import * as Yup from "yup";

export default function useCheckoutForm() {
  const { orderList, setOrderList } = useContext(cartContext);
  const { closeModal, openModal, modal } = useContext(ModalContext);
  
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Full name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    street: Yup.string().required("Street is required"),
    postcode: Yup.string()
      .matches(/^[0-9]{4,6}$/, "Postcode must be 4–6 digits")
      .required("Postcode is required"),
    city: Yup.string().required("City is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      street: "",
      email: "",
      postcode: "",
      city: "",
    },
    validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  async function handleSubmit(values) {
    const finalOrder = {
      order: {
        customer: {
          name: values.name,
          email: values.email,
          street: values.street,
          "postal-code": values.postcode,
          city: values.city,
        },
        items: orderList,
      },
    };

    try {
      await axios.post("http://localhost:3000/orders", finalOrder);

      openModal("congrats");
      setOrderList([]);
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  }
  return { formik, closeModal };
}
