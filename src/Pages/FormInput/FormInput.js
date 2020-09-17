import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const FormInput = () => {
  const classes = useStyles();
  const [values, setText] = useState("");
  useEffect(() => {
    return () => {};
  }, [values]);

  const handleChange = (name) => (event) =>
    setText((prev) => ({ ...prev, [name]: event.target.value }));

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            value={values.title}
            name="title"
            type="text"
            label="Title"
            onChange={handleChange}
          />
          <br />
          <Field
            component={TextField}
            value={values.description}
            type="text"
            label="description"
            name="description"
            onChange={handleChange}
          />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormInput;
