import styles from './FormsControl.module.css'
export const FormControl = ({ field, form, ...props }) => {
    let hasError = /* form.touched.newTaskName &&  */form.errors.newTaskName
    return (
    
        <div  className={hasError && styles.formControl + " " + styles.error}>
            {props.children}
        </div>
    )
}

export const Input = (props) => {
    let {field, form, ...restProps} = props
    return (
          <FormControl {...props}> <input {...field} {...restProps} ></input> </FormControl>  

    )
}

export const Textarea = (props) => {
    let {field, form, ...restProps} = props
    return (
          <FormControl {...props}> <textarea {...field} {...restProps} ></textarea> </FormControl>  

    )
}

/* export const Input = ({ field, form, ...props }) => {
    debugger
    let hasError = form.touched.newTaskName && form.errors.newTaskName
    console.log (hasError)
    return (
        <div  className={hasError && styles.formControl + " " + styles.error}>
            <input {...field} {...props} ></input>
        </div>
    )
} */