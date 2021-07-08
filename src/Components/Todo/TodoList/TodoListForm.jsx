import { ErrorMessage, Field, Form, Formik } from "formik"
import { Input } from "../../FormsControls/FormsControl";
import { requiredCreator } from "../../utils/validators/validators";

let TodoListForm = (props) => {
    let onSubmit; 
   return (
        <Formik
            initialValues={{ title: '' }}
             validate={requiredCreator(["title"],6)}
             onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    props.changeTodoList(props.todoListId, values.title, /* onSubmit */)
                    props.editMode()
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting, handleReset }) => {
                onSubmit= handleReset;
                return(
                <Form>
                    <div>
                        <Field placeholder='Title' /* type="email" */ name="title" component={Input} />
                        <ErrorMessage name="title" component="div" />
                        <button type="submit" disabled={isSubmitting} >
                            Save
                        </button>
                    </div>  

                </Form>
            )}}
        </Formik>
    )
}
export default TodoListForm;