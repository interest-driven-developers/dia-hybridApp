'use client';

import Card from '../../components/Card';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
} from '@ionic/react';
import { useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import Layout from '@/components/Layout';
import Intro from '@/components/Intro';
import { useSession } from 'next-auth/react';

const Home = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <Layout>
      <IonContent fullscreen>
        <div className="flex flex-col justify-center mx-auto items-center w-full">
          <Intro />
        </div>
      </IonContent>
    </Layout>
  );
};

export default Home;
