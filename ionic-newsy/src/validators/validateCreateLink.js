export default function validateCreateLink(values) {
  let errors = {};

  if (!values.url) {
    errors.url = "An URL is required.";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
    errors.url = "A valid URL is required.";
  }

  if (!values.description) {
    errors.description = "Please add the description!";
  } else if (values.description.length < 10) {
    errors.description = "A description must be at least 10 characters.";
  }

  return errors;
}
