import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup"; // for everything

const Register = ({ touched, errors, values, status }) => {
  
  const [onSubmit, setOnSubmit] = useState([])

  useEffect(() => {
    status && setOnSubmit(status);   //DATA FROM FORM
  }, [status]);
  
console.log(onSubmit)
  return (
    <Form className="form">
      <h2>REGISTER</h2>
      <label>
        <Field
          className="field"
          name="username"
          type="text"
          placeholder="username"
        />
        {touched.username && errors.username && (
          <div className="error">{errors.username}</div>
        )}
      </label>
      <label>
        <Field
          className="field"
          name="password"
          type="password"
          placeholder="password"
        />
        {touched.password && errors.password && (
          <div className="error">{errors.password}</div>
        )}
      </label>
      <label>
      <Field className="field" component="select" name="type">
            <option>owner or renter?</option>
            <option value="renter">Renter</option>
            <option value="owner">Owner</option>
      </Field>
      {touched.type && errors.type && (
          <div className="error">{errors.type}</div>
        )}
      </label>
      <label>
        <button className="button">Register</button>
      </label>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: props => ({

    username: "",
    password: "",
    type: ""
 
  }),
  validationSchema: yup.object().shape({
    username: yup
      .string()
      .required('required'),
    password: yup.string().min(8),
    type: yup
    .string()
    .required('select an option')
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    // console.log("Submitting!", formikBag)
    // POST body === {}
    setStatus(values);
    resetForm();
  }
})(Register);