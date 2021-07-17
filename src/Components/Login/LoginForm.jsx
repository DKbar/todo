import { ErrorMessage, Field, Form, Formik } from "formik";
import { requiredCreator } from "../utils/validators/validators";

let LoginForm = (props) => {

    return (
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false, captcha: '' }}
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
            onSubmit={(values, { setSubmitting, setStatus }) => {
                setTimeout(() => {
                    props.login(values, setStatus)
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting, status }) => (
                <Form><div>
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
                    {status ? <div>{status}</div> : null}
                </div>
                    {props.captchaUrl ? <div>
                        <img src={props.captchaUrl} /* alt='captcha' */></img>
                        <div>
                            <Field /* placeholder='captcha' type="password" */ name="captcha" />
                            <ErrorMessage name="password" component="div" />
                        </div>

                    </div>
                        : null}

                    <button type="submit" disabled={isSubmitting}>
                        {props.isAuths ? "Logout" : "Login"}
                    </button>
                </Form>
            )}
        </Formik>
    )
}
export default LoginForm;