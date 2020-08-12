import React, { FunctionComponent } from 'react'
import { Formik, Form, useFormik, useField, FieldInputProps, Field, ErrorMessage } from 'formik';
 import style from "./login.module.css"

// interface MyTextInputProps extends FieldInputProps<""> {
//   label: string;
// }

// export const MyTextInput: FunctionComponent<MyTextInputProps> = ({ label, ...props }) => {
//   const [field, meta] = useField(props);

//   return (
//       <div>
//           <label htmlFor={props.id || props.name}>{label}</label>
//           <input className="text-input" {...field} {...props}></input>
//           {meta.touched && meta.error ? (
//               <div className="error">{meta.error}</div>
//           ) : null}
//       </div>
//   );
// };



export default function Login() {
    const validate = values => {

        const errors = {
            firstName: '',
            lastName: '',
            email: ''
        };

        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (values.lastName.length > 15) {
            errors.lastName = 'Must be 15 characters or less';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
      <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}

    >
        <Form className={style.container}>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" /><br/>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" /><br/>
            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" /> 
            <ErrorMessage name="email" /><br />
            <button type="submit">Submit</button>
      </Form>
     
    </Formik>




        // <form onSubmit={formik.handleSubmit}>
        //     {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        //     <label htmlFor="firstName">First Name</label>
        //     <input
        //         id="firstName"
        //         name="firstName"
        //         type="text"
        //         onChange={formik.handleChange}
        //         onBlur={formik.handleBlur}
        //         value={formik.values.firstName}
        //     />
        //     {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        //     <label htmlFor="lastName">Last Name</label>
        //     <input
        //         id="lastName"
        //         name="lastName"
        //         type="text"
        //         onChange={formik.handleChange}
        //         onBlur={formik.handleBlur}
        //         value={formik.values.lastName}
        //     />
        //     {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        //     <label htmlFor="email">Email Address</label>
        //     <input
        //         id="email"
        //         name="email"
        //         type="email"
        //         onChange={formik.handleChange}
        //         onBlur={formik.handleBlur}
        //         value={formik.values.email}
        //     />
        //     <button type="submit">Submit</button>
        // </form>
    )
}


// <form onSubmit={formik.handleSubmit}>
//             { formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
//             <label htmlFor="firstName">First Name</label>
//             <input
//                 id="firstName"
//                 name="firstName"
//                 type="text"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.firstName}
//             />
//             {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
//             <label htmlFor="lastName">Last Name</label>
//             <input
//                 id="lastName"
//                 name="lastName"
//                 type="text"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.lastName}
//             /> 
//             {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
//             <label htmlFor="email">Email Address</label>
//             <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.email}
//             />
//             <button type="submit">Submit</button>
//         </form>