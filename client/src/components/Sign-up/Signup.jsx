import React from "react";
import Button from "../../utils/Buttons/button";
import Input from "../../utils/Inputs/input";
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Sign-up/Signup.scss"


const Signup = () => {


    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
      username: Yup.string().required("Name is required"),
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(40, "Password must not exceed 40 characters"),
    });

    const formik = useFormik({
        initialValues: {
    
          email: "",
          password: "",
          username : "",
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting}) => {
            console.log(values)
          try {
            const response = await axios.post(
                `${process.env.REACT_APP_STRIPE_APP_DEV_URL}/api/auth/local/register`,
              values
            );
            if(response.status == 200)
        {
          navigate('/');
        }
          } catch (error) {
            
            showToasterror(error.response.data.error.message)
          } finally {
            setSubmitting(false);
          }
        },
      });
      const showToasterror = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });}
  return (
    <>
      <div className="Signup-container">
        <div className=" Signup-content">
        <div className="Signup-heading">Welcome</div>
<div className="Signup-subheading">Sign up to get started</div>

          <form className="Signup-form" onSubmit={formik.handleSubmit}>
          <Input
              label="Full name" name="username" placeholder="Enter your full name"
              className={`Signup-input ${formik.errors.username && formik.touched.username ? 'is-invalid' : ''}`}
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            <div className="invalid-feedback">
              {formik.errors.username && formik.touched.username ? formik.errors.username : null}
            </div>
            <Input
              label="Email address"
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`Signup-input ${formik.errors.email && formik.touched.email ? 'is-invalid' : ''}`}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <div className="invalid-feedback">
              {formik.errors.email && formik.touched.email ? formik.errors.email : null}
            </div>
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your Password"
              className={"Signup-input" + (formik.errors.password && formik.touched.password ? " is-invalid" : "")}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <div className="invalid-feedback">
              {formik.errors.password && formik.touched.password ? formik.errors.password : null}
            </div>
            <Button label='Sign up' type='submit' className="Signup-button" />
          </form>
          <div>Alredy have an account?
            <span className="Signup-link"  onClick={() => navigate(`/login`)}>
              'Sign in'
            </span>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Signup;