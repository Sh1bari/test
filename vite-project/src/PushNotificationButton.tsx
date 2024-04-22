import { messaging } from "./firebaseConfig";
import React, { useEffect  } from 'react';
import {  getToken, onMessage } from "firebase/messaging";

const PushNotificationButton = () => {
    useEffect(() => {
    
      // Запрашиваем разрешение на отправку уведомлений
      Notification.requestPermission()
        .then(permission => {
          if (permission === 'granted') {
            console.log('Notification permission granted.');
            // Получаем токен для уведомлений
            return getToken(messaging, {vapidKey: "BNY5dN_lF_WR7pREMgkNyzFpFLUtDgimpIecAemnKIcXMdNrtAK-OTuerB7U3-TbUYlfBgQkdOrSp-wC7s45gOs"})
          } else {
            throw new Error('Permission denied');
          }
        })
        .then(token => {
          console.log('Token:', token);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, []);
  
    return (
      <button>Enable Push Notifications</button>
    );
  };
  
  export default PushNotificationButton;