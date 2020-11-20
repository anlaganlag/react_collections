export default function validateEditProfile(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "A username is required.";
  }
  if (!values.email) {
    errors.email = "An e-mail address is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Your e-mail is invalid.";
  }
  if (!values.newPassword) {
    errors.newpassword = "A new password is required.";
  } else if (values.newPassword.length < 6) {
    errors.newpassword = "At least 6 characters is required.";
  }
  if (!values.currentPassword) {
    errors.currentpassword = "Your current password is required.";
  }
  return errors;
}
