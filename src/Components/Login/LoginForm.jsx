import { ErrorMessage, Field, Form, Formik } from "formik";
import { requiredCreator } from "../utils/validators/validators";

let LoginForm = (props) => {
    
    return (
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false}}
             validate={requiredCreator(['email', 'password'], 6)}
             /* {values => {
               const errors = {};
               if (!values.email) {
                 errors.email = 'Required';
               } else if (
                 !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
               ) {
                 errors.email = 'Invalid email address';
               }
               if (!values.password) {
                  errors.password = 'Required';
               }
               return errors;
             }} */
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    props.login(values)
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <Field placeholder='Login' type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <Field placeholder='Password' type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <div>
                        <Field type="checkbox" name="rememberMe" /> Remember Me
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        {props.isAuths ? "Logout" : "Login"}
                    </button>
                </Form>
            )}
        </Formik>
    )
}
export default LoginForm;