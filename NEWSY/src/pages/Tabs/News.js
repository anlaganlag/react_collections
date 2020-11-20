import React from "react";
import {IonPage, IonContent} from '@ionic/react';

import LargeHeader from "../../components/Header/LargeHeader";
import SmallHeader from "../../components/Header/SmallHeader";

const News = () => {
  return (
    <IonPage>
      <SmallHeader title="Newsy"/>
      <IonContent fullscreen>
        <LargeHeader title="Newsy"/>
      </IonContent>
    </IonPage>
  )
}

export default News;