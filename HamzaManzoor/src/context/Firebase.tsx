import { createContext, useContext, useReducer } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore/lite";
import StoreReducer from "./StoreReducer";
import actions from "./Actions";
import { initialFirebaseContext } from "../Confige/Types";
const { GET_PROJECTS_DATA, GET_Client_DATA, GET_Faq_DATA, GET_Info_DATA } =
  actions;
//firebase project link
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHQkLYx7RBfGDGfDEV_o7FVtbySgJwgro",
  authDomain: "newagent-8dd92.firebaseapp.com",
  databaseURL: "https://newagent-8dd92.firebaseio.com",
  projectId: "newagent-8dd92",
  storageBucket: "newagent-8dd92.appspot.com",
  messagingSenderId: "509066033859",
  appId: "1:509066033859:web:acbe66ab45e247f473c076"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const useFirebase = () => useContext(FirebaseContext);

const initialContext: initialFirebaseContext = {
  projectsData: [],
  clientData: [],
  FaqData: [],
  InfoData: [],
  getProjectData: () => {},
  getClientData: () => {},
  getFaqData: () => {},
  getInfoData: () => {},
};

export const FirebaseContext = createContext(initialContext);
export const FirebaseProvider = (props: any) => {
  const [state, dispatch] = useReducer(StoreReducer, initialContext);

  //Projects data
  const getProjectData = async () => {
    const data = await getDocs(
      collection(getFirestore(firebaseApp), "projects")
    );
    const newData: any = [];
    data.forEach((obj) => newData.push(obj.data()));

    dispatch({
      payload: newData,
      type: GET_PROJECTS_DATA,
    });
  };
  //Clients Reviw data
  const getClientData = async () => {
    const clientdata = await getDocs(
      collection(getFirestore(firebaseApp), "Education")
    );
    const clientnewData: any = [];
    clientdata.forEach((obj) => clientnewData.push(obj.data()));

    dispatch({
      payload: clientnewData,
      type: GET_Client_DATA,
    });
  };
  //Faq Data
  const getFaqData = async () => {
    const Faqdata = await getDocs(
      collection(getFirestore(firebaseApp), "faqs")
    );
    const FaqnewData: any = [];
    Faqdata.forEach((obj) => FaqnewData.push(obj.data()));

    dispatch({
      payload: FaqnewData,
      type: GET_Faq_DATA,
    });
  };
  //Client Info Data
  const getInfoData = async () => {
    const Infodata = await getDocs(
      collection(getFirestore(firebaseApp), "Experience")
    );
    const InfonewData: any = [];
    Infodata.forEach((obj) => InfonewData.push(obj.data()));

    dispatch({
      payload: InfonewData,
      type: GET_Info_DATA,
    });
  };
  return (
    <FirebaseContext.Provider
      value={{
        ...state,
        getProjectData,
        getClientData,
        getFaqData,
        getInfoData,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

//previous project method
export const db = getFirestore(firebaseApp);
export const app = initializeApp(firebaseConfig);
