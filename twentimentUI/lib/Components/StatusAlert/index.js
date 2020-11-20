import { useState, useEffect } from "react";
import Slide from "@material-ui/core/Slide";
import Snackbar from "@material-ui/core/Snackbar";

const SlideTransition = (props) => <Slide {...props} direction="left" />;

function StatusAlert({ error }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    error && setOpen(true);
  }, [error]);

  const close = () => setOpen(false);

  const message = error
    ? error.message === "429"
      ? "Slow down cowboy! Looks like we're getting too many searches! Please wait a minute and try again."
      : "Uh oh! Looks like something went haywire in our system  😞"
    : "";

  return error ? (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={close}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      message={message}
    />
  ) : (
    ""
  );
}

export default StatusAlert;
