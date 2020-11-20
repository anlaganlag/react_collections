export default function validateLogin(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "An e-mail address is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Your e-mail is invalid.";
  }
  if (!values.password) {
    errors.password = "A password is required.";
  } else if (values.password.length < 6) {
    errors.password = "At least 6 characters is required.";
  }
  return errors;
}
