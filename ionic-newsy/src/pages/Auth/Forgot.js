import React from "react";
import {
  IonPage,
  IonContent,
  IonLabel,
  IonInput,
  IonItem,
  IonRow,
  IonCol,
  IonButton,
  IonLoading,
} from "@ionic/react";
import NavHeader from "../../components/Header/NavHeader";
import { toast } from "../../helpers/toast";

import firebase from "../../firebase";
import useForm from "../../hooks/useForm";
import validatePasswordReset from "../../validators/validatePasswordReset";

const INITIAL_STATE = {
  email: "",
};

const Forgot = (props) => {
  const { handleSubmit, handleChange, values, isSubmitting } = useForm(
    INITIAL_STATE,
    validatePasswordReset,
    handleResetPassword
  );
  const [busy, setBusy] = React.useState(false);

  async function handleResetPassword() {
    const { email } = values;
    setBusy(true);
    try {
      await firebase.resetPassword(email);
      toast("Check your e-mail to reset your password");
    } catch (err) {
      toast("Error: " + err.message);
      console.error("Password Reset Error: ", err);
    }
    setBusy(false);
  }

  return (
    <IonPage>
      <NavHeader title="Password Reset" />
      <IonLoading message="Please wait..." isOpen={busy} />
      <IonContent>
        <IonItem lines="full">
          <IonLabel position="floating">E-mail</IonLabel>
          <IonInput
            name="email"
            type="text"
            value={values.email}
            onIonChange={handleChange}
            required
          ></IonInput>
        </IonItem>
        <IonRow position="bottom">
          <IonCol>
            <IonButton
              type="submit"
              color="primary"
              expand="block"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              Get Reset Link
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Forgot;
