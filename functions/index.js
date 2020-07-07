const functions = require("firebase-functions");
import * as admin from "firebase-admin";

admin.initializeApp();

export const incrementProductCount = functions.firestore
  .document("products/{productId}")
  .onCreate((snapshot, context) => {
    // const product = snapshot.data();
    // const counter = admin
    //   .firestore()
    //   .doc('counts')
  });
