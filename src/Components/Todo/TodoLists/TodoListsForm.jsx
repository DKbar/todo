import { ErrorMessage, Field, Form, Formik } from "formik";
let TodoListsForm = (props) => {

    return (
        <Formik
            initialValues={{ todoListName: '' }}
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
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    props.addTodoList(values.todoListName)
                    setSubmitting(false);
                    resetForm();
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <Field placeholder='Todo List Name' /* type="email" */ name="todoListName" />
                        <ErrorMessage name="todoListName" component="div" />
                        <button type="submit" disabled={isSubmitting}>
                            Add TodoList
                        </button>
                    </div>

                </Form>
            )}
        </Formik>
    )
}
export default TodoListsForm;