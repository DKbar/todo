export const requiredCreator = (fields, maxLength) => values => {
  const errors = {};
  for (let field of fields) {
    if (!values[field]) {
      errors[field] = 'Required';
    } /* else if (values[field].length > maxLength) {
      errors.[field] = `length > ${maxLength}`;
    } */
  }


  return errors;
}


/* export const required = values => {

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
  } */