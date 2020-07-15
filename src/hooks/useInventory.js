//@ts-check
import { useState, useEffect } from "react";
import { COLLECTION_NAMES } from "../utilities/constants";
import firebase from "firebase";

function useInventory(db) {
  const [inventory, setInventory] = useState([]);
  const { PRODUCTS, RETAILERS, CATEGORIES, COUNTS } = COLLECTION_NAMES;

  useEffect(() => {
    const prodRef = db.collection(PRODUCTS);
    prodRef
      .limit(10)
      .get()
      .then((snapshot) =>
        setInventory(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
      );
  }, [db]);

  const search = (term) => {
    const prodRef = db.collection(PRODUCTS);
    prodRef
      .limit(10)
      .get()
      .then((snapshot) =>
        setInventory(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
      );
  };

  const addProduct = (product) => {
    const prodRef = db.collection(PRODUCTS);
    const retailer = db.collection(RETAILERS).doc("focus-tek");
    const categories = db.collection(CATEGORIES);
    const counts = db.collection(COUNTS);

    const finalProduct = {
      ...product,
      retailer: retailer,
      main_category: product.main_category
        ? categories.doc(product.main_category)
        : null,
      sub_category: product.sub_category
        ? categories.doc(product.sub_category)
        : null,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
    };
    return prodRef
      .add(finalProduct)
      .then(() => {
        const pcount = counts.doc("products");
        return pcount.get().then((doc) => {
          if (doc.exists) {
            return pcount.update(
              "count",
              firebase.firestore.FieldValue.increment(1)
            );
          } else {
            return pcount.set({ count: 1 });
          }
        });
      })

      .then(() => {
        if (product.main_category) {
          const ccount = counts.doc(`products_${product.main_category}`);
          return ccount.get().then((doc) => {
            if (doc.exists) {
              return ccount.set(
                { count: firebase.firestore.FieldValue.increment(1) },
                { merge: true }
              );
            } else {
              return ccount.set({ count: 1 });
            }
          });
        }
      });
  };

  const addCategory = (category) => {
    const catRef = db.collection(CATEGORIES);
    category.parent = category.parent ? catRef.doc(category.parent) : null;
    return catRef.doc(category.name).set({ parent: category.parent });
  };

  return { inventory, search, addProduct, addCategory };
}

export default useInventory;
