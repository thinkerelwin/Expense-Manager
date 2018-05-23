import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID ,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   // console.log(expenses)
//   snapshot.forEach((childSnaphot) => {
//     expenses.push({
//       id: childSnaphot.key,
//       ...childSnaphot.val()
//     })
//   })
// })


// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'not cheap',
//   amount: '350',
//   createdAt: '0'
// })

// database.ref('expenses/-LCaohToN1rb0xotR7-m').remove()

// database.ref().set({
//   name: 'Elwin',
//   age: '31',
//   job: {
//     title: 'front-end developer',
//     company: 'none'
//   },
//   location: {
//     city: 'Taipei',
//     country: 'Taiwan'
//   },
// }).then((data) => {
//   // console.log(data)
// }).catch((error) => {
//   console.log(error)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const fetchedData = snapshot.val()
//   console.log(`${fetchedData.name} is a ${fetchedData.job.title} at ${fetchedData.job.company}`)
// }, (e) => {
//   console.log(`Error: ${e}`)
// })
// database.ref('expenses').remove()

// database.ref('location/city').set('New Taipei City')

// database.ref('attribute').set({ height: '170cm', weight: '60kg' })

