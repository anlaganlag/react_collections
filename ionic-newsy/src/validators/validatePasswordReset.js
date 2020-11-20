export default function validatePasswordReset(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "An e-mail address is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Your e-mail is invalid.";
  }
  return errors;
}
