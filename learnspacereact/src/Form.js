import React from "react";
import "./Form.css";
import {Formik} from "formik";

const Form = () => {
    return (
        <div className={"Form"}>
            <Formik 
                initialValues={{name: Obi-Wan-Kenobi}}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
            </Formik>            
        </div>
    )
};
export default Form;
