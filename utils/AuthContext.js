/* eslint-disable prettier/prettier */
import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            alert(e);
          }
        },
        singUpCustomer: async (email, password, username, profileP) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.

                firestore()
                  .collection('customers')
                  .doc(auth().currentUser.uid)
                  .set({
                    name: username,
                    email: email,
                    userImg: profileP,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                  })

                  //ensure we catch any errors at this stage to advise us if something does go wrong
                  .catch(error => {
                    alert(error);
                  });
              })
              //we need to catch the whole sign up process if it fails too.
              .catch(error => {
                alert(error);
              });
          } catch (e) {
            alert(e);
          }
        },
        singUpFixer: async (email, password) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.
                firestore()
                  .collection('fixers')
                  .doc(auth().currentUser.uid)
                  .set({
                    aproved: false,
                    userImg: null,
                    name: fname,
                    email: email,
                    categories: null,
                    description: null,
                    paymentMethods: null,
                    dob: null,
                    location: null,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                  })
                  //ensure we catch any errors at this stage to advise us if something does go wrong
                  .catch(error => {
                    alert(
                      'Something went wrong with added user to firestore: ',
                      error,
                    );
                  });
              })
              //we need to catch the whole sign up process if it fails too.
              .catch(error => {
                alert('Something went wrong with sign up: ', error);
              });
          } catch (e) {
            alert(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            alert(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
