import { ErrorMessage, Field, Form, Formik } from "formik";
let TodoForm = (props) => {
   return (
        <Formik
            initialValues={{ newTaskName: '' }}
            /*  validate={values => {
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
                    props.addTask(props.todoListId, values.newTaskName,)
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <Field placeholder='Task Name' /* type="email" */ name="newTaskName" />
                        <ErrorMessage name="newTaskName" component="div" />
                        <button type="submit" disabled={isSubmitting}>
                            Add Task
                        </button>
                    </div>

                </Form>
            )}
        </Formik>
    )
}
export default TodoForm;