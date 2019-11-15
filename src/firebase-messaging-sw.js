// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    'messagingSenderId': 'AAAAt3uCTuU:APA91bFtxntV2FMqUggzFkAqoNrqqlCVDguOybfnK4Sd8CGh5P5ZJCGfj3EUay5chDghL6J_ADn2SnUDGbfT6Qwpl8p4x_jGiZ8L8j2ICOA5K4ZLj9b3HP2SHn1o0LpuKC61iO5HaA6x'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.