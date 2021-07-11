import { ErrorMessage, Field, Form, Formik } from "formik"
import { getTotalCount } from "../../../Redux/todo-selectors";
import { Input } from "../../FormsControls/FormsControl";
import { requiredCreator } from "../../utils/validators/validators";

let TodoForm = (props) => {
    let onSubmit; 
   return (
        <Formik
            initialValues={{ newTaskName: '' }}
             validate={requiredCreator(["newTaskName"],6)}
             onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    props.addTask(props.todoListId, values.newTaskName, onSubmit, props.totalCount)
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting, handleReset }) => {
                onSubmit= handleReset;
                return(
                <Form>
                    <div>
                        <Field placeholder='Task Name' /* type="email" */ name="newTaskName" component={Input} />
                        <ErrorMessage name="newTaskName" component="div" />
                        <button type="submit" disabled={isSubmitting} >
                            Add Task
                        </button>
                    </div>  

                </Form>
            )}}
        </Formik>
    )
}
export default TodoForm;