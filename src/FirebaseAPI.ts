import { initializeApp } from 'firebase/app';

class FirebaseAPI {
  constructor() {
    FirebaseAPI.init();
  }

  static init() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCzs3m1T-AwNOuezc9VVx8gWcrndQyIisY',
      authDomain: 'react-village-d5bce.firebaseapp.com',
      projectId: 'react-village-d5bce',
      storageBucket: 'react-village-d5bce.appspot.com',
      messagingSenderId: '903474401236',
      appId: '1:903474401236:web:4e87d7adb9bc43c9361041',
      measurementId: 'G-PHSNLX928V',
    };

    initializeApp(firebaseConfig);
  }
}

const FirebaseAPIInstance = new FirebaseAPI();

export { FirebaseAPI, FirebaseAPIInstance };
