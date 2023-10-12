import React from "react";
import Button from "../../utils/Buttons/button";
import Input from "../../utils/Inputs/input";
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Login/login.scss"


const Login = () => {

  
    const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    identifier: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const formik = useFormik({
    initialValues: {
        identifier : "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        console.log(true);
        const response = await axios.post(
          `${process.env.REACT_APP_STRIPE_APP_DEV_URL}/api/auth/local`,
          values
        );
        localStorage.setItem('accessToken', response.data.jwt);
        localStorage.setItem('user:detail', JSON.stringify(response.data.user))

        if(response.status == 200)
        {
          navigate('/success');
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      } 
    },
  });

  return (
    <>
      <div className="login-container">
        <div className=" login-content">
        <div className="login-heading">Welcome Back</div>
<div className="login-subheading">Sign in to get started</div>

          <form className="login-form" onSubmit={formik.handleSubmit}>
            <Input
              label="Email address"
              type="email"
              name="identifier"
              placeholder="Enter your email"
              className={`login-input ${formik.errors.identifier&& formik.touched.identifier? 'is-invalid' : ''}`}
              onChange={formik.handleChange}
              value={formik.values.identifier}
            />
            <div className="invalid-feedback">
              {formik.errors.email && formik.touched.identifier? formik.errors.identifier : null}
            </div>
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your Password"
              className={"login-input" + (formik.errors.password && formik.touched.password ? " is-invalid" : "")}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <div className="invalid-feedback">
              {formik.errors.password && formik.touched.password ? formik.errors.password : null}
            </div>
            <Button label='Sign in' type='submit' className="login-button" />
          </form>
          <div>
            Didn't have an account?{" "}
            <span className="login-link"  onClick={() => navigate(`/sign-up`)}>
              'Sign up'
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

export default Login;
