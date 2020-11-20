import React from "react";
import {IonHeader, IonTitle, IonToolbar} from "@ionic/react";

const LargeHeader = ({title}) => {
  return (
    <IonHeader collapse="condense">
      <IonToolbar
        style={{background: "#F06521"}}
        color="primary">
        <IonTitle size="large">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}

export default LargeHeader;